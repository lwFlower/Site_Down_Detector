import { lookup } from "node:dns/promises";
import { BlockList, isIP } from "node:net";

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
  // Единственный локальный адрес для демонстрации при npm run dev.
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
