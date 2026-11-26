import type { Monitor, SavedData } from "../types/monitor";

export const STORAGE_KEY = "sitewatch-demo-v1";

function validDate(value: unknown): value is string {
  return typeof value === "string" && Number.isFinite(Date.parse(value));
}
function validMonitor(value: unknown): value is Monitor {
  if (!value || typeof value !== "object") return false;
  const m = value as Monitor;
  return (
    typeof m.id === "string" &&
    typeof m.name === "string" &&
    typeof m.url === "string" &&
    Number.isInteger(m.intervalSec) &&
    m.intervalSec >= 30 &&
    typeof m.isActive === "boolean" &&
    ["UP", "DOWN", "UNKNOWN"].includes(m.lastStatus) &&
    ["UP", "DOWN"].includes(m.demoStatus) &&
    (m.lastCheckedAt === null || validDate(m.lastCheckedAt)) &&
    Array.isArray(m.checks) &&
    m.checks.every(
      (c) =>
        c &&
        typeof c.id === "string" &&
        validDate(c.checkedAt) &&
        typeof c.isUp === "boolean" &&
        Number.isInteger(c.statusCode) &&
        c.responseMs === null &&
        c.responseSize === null &&
        (c.error === null || typeof c.error === "string"),
    ) &&
    Array.isArray(m.notifications) &&
    m.notifications.every(
      (n) =>
        n &&
        typeof n.id === "string" &&
        ["UP", "DOWN"].includes(n.event) &&
        validDate(n.createdAt),
    )
  );
}

export function readMonitors(storage: Storage): Monitor[] {
  const raw = storage.getItem(STORAGE_KEY);
  if (!raw) return [];
  const data: SavedData = JSON.parse(raw);
  if (
    data.version !== 1 ||
    !Array.isArray(data.monitors) ||
    !data.monitors.every(validMonitor)
  ) {
    throw new Error("Сохранённые данные имеют неизвестный формат");
  }
  return data.monitors;
}

export function writeMonitors(storage: Storage, monitors: Monitor[]) {
  const data: SavedData = { version: 1, monitors };
  // Все данные заменяются одной записью. При ошибке старое значение остаётся.
  storage.setItem(STORAGE_KEY, JSON.stringify(data));
}
