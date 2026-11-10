import { lookup } from "node:dns/promises";
import { BlockList, isIP } from "node:net";
import { request as httpRequest } from "node:http";
import { request as httpsRequest } from "node:https";

const blocked = new BlockList();
for (const [address, prefix] of [
  ["0.0.0.0", 8],
  ["10.0.0.0", 8],
  ["100.64.0.0", 10],
  ["127.0.0.0", 8],
  ["169.254.0.0", 16],
  ["172.16.0.0", 12],
  ["192.0.0.0", 24],
  ["192.0.2.0", 24],
  ["192.168.0.0", 16],
  ["198.18.0.0", 15],
  ["198.51.100.0", 24],
  ["203.0.113.0", 24],
  ["224.0.0.0", 4],
  ["240.0.0.0", 4],
] as const)
  blocked.addSubnet(address, prefix, "ipv4");
const globalV6 = new BlockList();
globalV6.addSubnet("2000::", 3, "ipv6");
blocked.addSubnet("2001::", 23, "ipv6");
blocked.addSubnet("2001:db8::", 32, "ipv6");
blocked.addSubnet("2002::", 16, "ipv6");
export function isPublicAddress(address: string) {
  const family = isIP(address);
  if (family === 4) return !blocked.check(address, "ipv4");
  return (
    family === 6 &&
    globalV6.check(address, "ipv6") &&
    !blocked.check(address, "ipv6")
  );
}
export async function publicTarget(raw: string, allowPrivate = false) {
  const url = new URL(raw);
  if (
    !["http:", "https:"].includes(url.protocol) ||
    url.username ||
    url.password
  )
    throw new Error("Нужен HTTP(S) URL без логина и пароля");
    if (
      process.env.NODE_ENV === "development" &&
      url.href === "http://127.0.0.1:3333/health"
    ) {
      return { url, address: { address: "127.0.0.1", family: 4 } };
    }
  const host = url.hostname.replace(/^\[|\]$/g, "");
  let timer: ReturnType<typeof setTimeout> | undefined;
  // DNS тоже ограничен по времени. Проверяем адреса перед каждым редиректом.
  const addresses = await Promise.race([
    lookup(host, { all: true }),
    new Promise<never>((_, reject) => {
      timer = setTimeout(
        () => reject(new Error("DNS: превышено время ожидания")),
        3000,
      );
    }),
  ]).finally(() => clearTimeout(timer));
  if (
    !addresses.length ||
    (!allowPrivate && addresses.some((a) => !isPublicAddress(a.address)))
  )
    throw new Error("Разрешены только публичные адреса сайтов");
  return { url, address: addresses[0]! };
}
export type ProbeResult = {
  isUp: boolean;
  statusCode: number | null;
  responseMs: number;
  responseSize: number | null;
  error: string | null;
};

export async function probe(
  raw: string,
  options: {
    timeoutMs?: number;
    maxBytes?: number;
    allowPrivate?: boolean;
  } = {},
): Promise<ProbeResult> {
  const started = performance.now();
  const timeoutMs = options.timeoutMs ?? 10000;
  const maxBytes = options.maxBytes ?? 5 * 1024 * 1024;
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  let statusCode: number | null = null;
  try {
    let current = raw;
    for (let redirects = 0; redirects <= 5; redirects++) {
      const { url, address } = await publicTarget(
        current,
        options.allowPrivate,
      );
      controller.signal.throwIfAborted();
      const result = await new Promise<{ redirect?: string; size: number }>(
        (resolve, reject) => {
          const request = (
            url.protocol === "https:" ? httpsRequest : httpRequest
          )(
            url,
            {
              method: "GET",
              signal: controller.signal,
              headers: {
                "User-Agent": "SiteDownDetector/1.0",
                "Accept-Encoding": "identity",
              },
              // Соединяемся именно с проверенным IP: повторный DNS не обойдёт запрет локальной сети.
              lookup: (_host, opts, callback) => {
                if (opts.all) callback(null, [address]);
                else callback(null, address.address, address.family);
              },
            },
            (response) => {
              statusCode = response.statusCode ?? null;
              if (
                [301, 302, 303, 307, 308].includes(statusCode ?? 0) &&
                response.headers.location
              ) {
                const redirect = new URL(response.headers.location, url).href;
                response.destroy();
                resolve({ redirect, size: 0 });
                return;
              }
              let size = 0;
              response.on("data", (chunk) => {
                size += chunk.length;
                if (size > maxBytes)
                  response.destroy(
                    new Error("Ответ больше 5 МБ (лимит проверки)"),
                  );
              });
              response.on("end", () => resolve({ size }));
              response.on("error", reject);
              response.on("aborted", () =>
                reject(new Error("Ответ прерван сервером")),
              );
            },
          );
          request.on("error", reject);
          request.end();
        },
      );
      if (result.redirect) {
        current = result.redirect;
        continue;
      }
      const isUp = statusCode !== null && statusCode >= 200 && statusCode < 400;
      return {
        isUp,
        statusCode,
        responseMs: Math.round(performance.now() - started),
        responseSize: result.size,
        error: isUp ? null : `HTTP ${statusCode}`,
      };
    }
    throw new Error("Слишком много перенаправлений");
  } catch (error) {
    return {
      isUp: false,
      statusCode,
      responseMs: Math.round(performance.now() - started),
      responseSize: null,
      error: controller.signal.aborted
        ? "Превышено время ожидания"
        : (error as Error).message,
    };
  } finally {
    clearTimeout(timer);
  }
}
