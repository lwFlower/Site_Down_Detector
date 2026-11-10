import { test } from "node:test";
import assert from "node:assert/strict";
import { createServer } from "node:http";
import { once } from "node:events";
import { probe, isPublicAddress } from "../server/utils/probe";
import {
  uptimePercent,
  statusChanged,
  runPool,
} from "../server/utils/checker-core";

test("uptime: период без данных, частичный и полный успех", () => {
  assert.equal(uptimePercent(0, 0), null);
  assert.equal(uptimePercent(2, 3), 66.67);
  assert.equal(uptimePercent(0, 3), 0);
  assert.equal(uptimePercent(3, 3), 100);
});
test("уведомления только при смене известного статуса", () => {
  assert.equal(statusChanged("UNKNOWN", "DOWN"), false);
  assert.equal(statusChanged("UP", "UP"), false);
  assert.equal(statusChanged("DOWN", "DOWN"), false);
  assert.equal(statusChanged("UP", "DOWN"), true);
  assert.equal(statusChanged("DOWN", "UP"), true);
});
test("пул соблюдает лимит, выполняет каждую задачу один раз", async () => {
  let active = 0;
  let maximum = 0;
  const completed: number[] = [];
  await runPool(
    Array.from({ length: 17 }, (_, i) => i),
    5,
    async (i) => {
      active++;
      maximum = Math.max(maximum, active);
      await new Promise((resolve) => setTimeout(resolve, 5));
      completed.push(i);
      active--;
    },
  );
  assert.equal(maximum, 5);
  assert.equal(completed.length, 17);
  assert.equal(new Set(completed).size, 17);
});
test("внутренние адреса недоступны для чекера", () => {
  for (const ip of [
    "127.0.0.1",
    "10.1.2.3",
    "169.254.169.254",
    "192.168.1.1",
    "172.16.0.1",
    "::1",
    "::ffff:127.0.0.1",
    "fc00::1",
    "fe80::1",
    "2002:7f00:1::",
  ])
    assert.equal(isPublicAddress(ip), false, ip);
  assert.equal(isPublicAddress("8.8.8.8"), true);
  assert.equal(isPublicAddress("2606:4700:4700::1111"), true);
});
test("HTTP: успех, ошибка, редирект, размер, таймаут и обрыв", async (t) => {
  const server = createServer((req, res) => {
    switch (req.url) {
      case "/down":
        res.writeHead(503);
        res.end("down");
        break;
      case "/redirect":
        res.writeHead(302, { Location: "/" });
        res.end();
        break;
      case "/loop":
        res.writeHead(302, { Location: "/loop" });
        res.end();
        break;
      case "/slow":
        break; // клиент должен сам завершить запрос по таймауту
      case "/large":
        res.end("x".repeat(1000));
        break;
      case "/abort":
        res.writeHead(200, { "Content-Length": 100 });
        res.write("x");
        setTimeout(() => res.destroy(), 5);
        break;
      default:
        res.end("hello");
    }
  });
  server.listen(0, "127.0.0.1");
  await once(server, "listening");
  t.after(() => {
    server.closeAllConnections();
    server.close();
  });
  const base = `http://127.0.0.1:${(server.address() as { port: number }).port}`;
  const options = { allowPrivate: true, timeoutMs: 1000 };
  const ok = await probe(base, options);
  assert.equal(ok.isUp, true);
  assert.equal(ok.statusCode, 200);
  assert.equal(ok.responseSize, 5);
  const down = await probe(base + "/down", options);
  assert.equal(down.isUp, false);
  assert.equal(down.statusCode, 503);
  assert.equal(down.responseSize, 4);
  assert.equal((await probe(base + "/redirect", options)).isUp, true);
  assert.match(
    (await probe(base + "/loop", options)).error!,
    /перенаправлений/,
  );
  assert.match(
    (await probe(base + "/slow", { ...options, timeoutMs: 50 })).error!,
    /время ожидания/,
  );
  assert.equal(
    (await probe(base + "/large", { ...options, maxBytes: 100 })).isUp,
    false,
  );
  assert.equal((await probe(base + "/abort", options)).isUp, false);
  assert.equal((await probe(base)).isUp, false); // тестовый флаг не включён в приложении
});
