// Проверка настоящего API на отдельной временной SQLite-базе.
// Сначала: npm run build. Затем: npm run test:api.
import { spawn } from "node:child_process";
import { mkdtemp, mkdir, copyFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { resolve, join } from "node:path";
import { once } from "node:events";
import assert from "node:assert/strict";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "../generated/prisma/client";

const root = process.cwd();
const temp = await mkdtemp(join(tmpdir(), "sitewatch-test-"));
await mkdir(join(temp, "prisma"));
await copyFile(resolve("prisma/dev.db"), join(temp, "prisma/dev.db"));
const db = new PrismaClient({
  adapter: new PrismaBetterSqlite3({
    url: `file:${join(temp, "prisma/dev.db")}`,
  }),
});
// Очищается только копия базы во временной папке.
await db.notification.deleteMany();
await db.check.deleteMany();
await db.monitor.deleteMany();
await db.user.deleteMany();
const child = spawn(process.execPath, [resolve(".output/server/index.mjs")], {
  cwd: temp,
  env: { ...process.env, HOST: "127.0.0.1", PORT: "0" },
  stdio: ["ignore", "pipe", "pipe"],
});
let log = "";
child.stdout.on("data", (chunk) => {
  log += chunk;
});
child.stderr.on("data", (chunk) => {
  log += chunk;
});
let base = "";
const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
let assertions = 0;
function equal(actual: unknown, expected: unknown) {
  assert.deepEqual(actual, expected);
  assertions++;
}
async function request(path: string, method = "GET", body?: unknown) {
  const response = await fetch(base + path, {
    method,
    headers: { "Content-Type": "application/json" },
    ...(body ? { body: JSON.stringify(body) } : {}),
  });
  return { status: response.status, data: await response.json() };
}
try {
  for (let i = 0; i < 100; i++) {
    base = log.match(/Listening on (http:\/\/127\.0\.0\.1:\d+)/)?.[1] ?? "";
    if (base) break;
    await wait(100);
  }
  assert.ok(base, "Сервер не запустился: " + log);
  equal((await request("/api/monitors")).data.length, 0);
  equal(await db.user.count(), 1);
  equal(
    (
      await request("/api/monitors", "POST", {
        name: "Ошибка",
        url: "http://127.0.0.1",
        intervalSec: 60,
      })
    ).status,
    400,
  );
  equal(
    (
      await request("/api/monitors", "POST", {
        name: "Ошибка",
        url: "https://8.8.8.8",
        intervalSec: 1,
      })
    ).status,
    400,
  );
  const created = await request("/api/monitors", "POST", {
    name: "Тест",
    url: "http://8.8.8.8:81",
    intervalSec: 60,
    isActive: false,
  });
  equal(created.status, 200);
  const id = created.data.id;
  const html = await (await fetch(base)).text();
  equal(html.includes("Тест"), true);
  equal(html.includes("Добавить сайт"), true);
  equal((await request("/api/monitors")).data.length, 1);
  equal((await request(`/api/monitors/${id}`)).data.uptime, null);
  for (let i = 0; i < 13; i++) {
    await db.check.create({
      data: {
        monitorId: id,
        checkedAt: new Date(Date.now() - (i + 1) * 60000),
        statusCode: i < 10 ? 200 : 503,
        isUp: i < 10,
        responseMs: 100,
        responseSize: 20,
      },
    });
  }
  await db.check.create({
    data: {
      monitorId: id,
      checkedAt: new Date(Date.now() - 20 * 86400000),
      statusCode: 500,
      isUp: false,
    },
  });
  const history = (await request(`/api/monitors/${id}?days=7`)).data;
  equal(history.total, 13);
  equal(history.uptime, 76.92);
  equal(history.averageMs, 100);
  equal(history.checks.length, 10);
  equal(history.totalPages, 2);
  equal((await request(`/api/monitors/${id}?page=2`)).data.checks.length, 3);
  equal((await request(`/api/monitors/${id}?days=30`)).data.total, 14);
  equal((await request(`/api/monitors/${id}?page=0`)).status, 400);
  equal((await request(`/api/monitors/${id}?days=2`)).status, 400);
  equal(
    (await request(`/api/monitors/${id}`, "PATCH", { isActive: false })).data
      .isActive,
    false,
  );
  await wait(1200);
  equal(await db.check.count({ where: { monitorId: id } }), 14);
  // Чекер сам фиксирует ошибку запрещённого адреса и смену UP -> DOWN.
  await db.monitor.update({
    where: { id },
    data: { lastStatus: "UP", url: "http://127.0.0.1", lastCheckedAt: null },
  });
  equal(
    (await request(`/api/monitors/${id}`, "PATCH", { isActive: true })).data
      .isActive,
    true,
  );
  for (let i = 0; i < 30 && (await db.notification.count()) === 0; i++)
    await wait(100);
  const checked = (await request(`/api/monitors/${id}`)).data;
  equal(checked.monitor.lastStatus, "DOWN");
  equal(checked.notifications.length, 1);
  equal(checked.notifications[0].channel, "log");
  equal(log.includes("UP → DOWN"), true);
  await db.monitor.update({ where: { id }, data: { lastCheckedAt: null } });
  await wait(1300);
  equal(await db.notification.count(), 1);
  const denied = await fetch(base + `/api/monitors/${id}`, {
    method: "DELETE",
    headers: { Origin: "https://another.example" },
  });
  equal(denied.status, 403);
  equal((await request(`/api/monitors/${id}`, "DELETE")).status, 200);
  equal((await request(`/api/monitors/${id}`)).status, 404);
  equal(await db.check.count(), 0);
  equal(await db.notification.count(), 0);
  console.log(`Успешно: ${assertions} проверок API и SQLite.`);
} finally {
  if (child.exitCode === null) {
    const exited = once(child, "exit");
    child.kill("SIGTERM");
    await exited;
  }
  await db.$disconnect();
  await rm(temp, { recursive: true, force: true });
}
