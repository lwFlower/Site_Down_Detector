import { publicTarget } from "./target";
import { request as httpRequest } from "node:http";
import { request as httpsRequest } from "node:https";

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
