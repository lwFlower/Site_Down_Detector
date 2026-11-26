import { test } from "node:test";
import assert from "node:assert/strict";
import {
  createMonitor,
  recordDemoCheck,
  getHistory,
} from "../app/services/monitor-model";
import {
  readMonitors,
  writeMonitors,
  STORAGE_KEY,
} from "../app/storage/monitor-storage";
import {
  initializeStore,
  addMonitor,
  toggleMonitor,
  checkMonitor,
  deleteMonitor,
  monitors,
  checkDueMonitors,
} from "../app/services/monitor-store";

class MemoryStorage {
  values = new Map<string, string>();
  failWrites = false;
  get length() {
    return this.values.size;
  }
  getItem(key: string) {
    return this.values.get(key) ?? null;
  }
  setItem(key: string, value: string) {
    if (this.failWrites) throw new Error("Quota exceeded");
    this.values.set(key, value);
  }
  clear() {
    this.values.clear();
  }
  removeItem(key: string) {
    this.values.delete(key);
  }
  key(index: number) {
    return [...this.values.keys()][index] ?? null;
  }
}
const form = { name: "Тест", url: "https://example.com", intervalSec: 30 };

test("смена статуса создаёт ровно два события на UP → DOWN → DOWN → UP", () => {
  const m = createMonitor(form);
  for (const status of ["UP", "DOWN", "DOWN", "UP"] as const)
    recordDemoCheck(m, status);
  assert.equal(m.checks.length, 4);
  assert.equal(m.notifications.length, 2);
  assert.deepEqual(
    m.notifications.map((n) => n.event),
    ["UP", "DOWN"],
  );
  assert.equal(m.checks[0].responseMs, null);
  assert.equal(m.checks[0].responseSize, null);
});

test("периоды, аптайм и пагинация", () => {
  const m = createMonitor(form);
  const now = Date.now();
  assert.equal(getHistory(m, 7, 1, now).uptime, null);
  recordDemoCheck(m, "DOWN", new Date(now - 20 * 86400000));
  for (let i = 0; i < 13; i++)
    recordDemoCheck(
      m,
      i < 10 ? "UP" : "DOWN",
      new Date(now - (13 - i) * 60000),
    );
  const history = getHistory(m, 7, 1, now);
  assert.equal(history.uptime, 76.92);
  assert.equal(history.total, 13);
  assert.equal(history.checks.length, 10);
  assert.equal(history.totalPages, 2);
  assert.equal(getHistory(m, 7, 2, now).checks.length, 3);
  assert.equal(getHistory(m, 30, 1, now).total, 14);
});

test("сохранение и чтение после перезагрузки, отказ на повреждённых данных", () => {
  const storage = new MemoryStorage();
  const m = createMonitor(form);
  recordDemoCheck(m, "UP");
  writeMonitors(storage, [m]);
  const restored = readMonitors(storage);
  assert.deepEqual(restored, [m]);
  storage.setItem(STORAGE_KEY, "{broken");
  assert.throws(() => readMonitors(storage));
});

test("500 проверок и 100 событий на монитор, валидация формы", () => {
  const m = createMonitor(form);
  for (let i = 0; i < 600; i++) recordDemoCheck(m, i % 2 ? "UP" : "DOWN");
  assert.equal(m.checks.length, 500);
  assert.equal(m.notifications.length, 100);
  assert.throws(() => createMonitor({ ...form, intervalSec: 1 }));
  assert.throws(() => createMonitor({ ...form, url: "javascript:alert(1)" }));
});

test("нормальные операции приложения, пауза, расписание и ошибка записи без потери данных", () => {
  const storage = new MemoryStorage();
  Object.defineProperty(globalThis, "window", {
    value: { localStorage: storage },
    configurable: true,
  });
  initializeStore();
  addMonitor(form);
  const id = monitors.value[0].id;
  checkMonitor(id, "DOWN");
  toggleMonitor(id);
  checkMonitor(id, "UP");
  assert.equal(monitors.value[0].checks.length, 2);
  assert.equal(monitors.value[0].lastStatus, "DOWN");
  toggleMonitor(id);
  checkMonitor(id, "UP");
  assert.equal(readMonitors(storage)[0].notifications.length, 2);
  const saved = readMonitors(storage);
  saved[0].lastCheckedAt = new Date(Date.now() - 60000).toISOString();
  writeMonitors(storage, saved);
  monitors.value = saved;
  checkDueMonitors();
  assert.equal(readMonitors(storage)[0].checks.length, 4);
  const before = storage.getItem(STORAGE_KEY);
  storage.failWrites = true;
  assert.throws(() => deleteMonitor(id));
  assert.equal(monitors.value.length, 1);
  assert.equal(storage.getItem(STORAGE_KEY), before);
  storage.failWrites = false;
  deleteMonitor(id);
  assert.equal(readMonitors(storage).length, 0);
});
