import type { Monitor, MonitorFormData, Status } from "../types/monitor";

export function createMonitor(form: MonitorFormData): Monitor {
  const name = form.name.trim();
  if (!name || name.length > 100)
    throw new Error("Название должно содержать от 1 до 100 символов");
  let url: URL;
  try {
    url = new URL(form.url.trim());
  } catch {
    throw new Error("Введите полный URL сайта");
  }
  if (
    !["http:", "https:"].includes(url.protocol) ||
    url.username ||
    url.password
  ) {
    throw new Error("Укажите HTTP(S) URL без логина и пароля");
  }
  if (
    !Number.isInteger(form.intervalSec) ||
    form.intervalSec < 30 ||
    form.intervalSec > 86400
  ) {
    throw new Error("Интервал должен быть от 30 до 86400 секунд");
  }
  return {
    id: crypto.randomUUID(),
    name,
    url: url.href,
    intervalSec: form.intervalSec,
    isActive: true,
    lastStatus: "UNKNOWN",
    lastCheckedAt: null,
    demoStatus: "UP",
    checks: [],
    notifications: [],
  };
}

// В демоверсии результат задаёт пользователь кнопкой «Сбой / Восстановить».
export function recordDemoCheck(
  monitor: Monitor,
  status: Status,
  now = new Date(),
) {
  const checkedAt = now.toISOString();
  const changed =
    monitor.lastStatus !== "UNKNOWN" && monitor.lastStatus !== status;
  monitor.demoStatus = status;
  monitor.checks.unshift({
    id: crypto.randomUUID(),
    checkedAt,
    isUp: status === "UP",
    statusCode: status === "UP" ? 200 : 503,
    responseMs: null,
    responseSize: null,
    error: status === "UP" ? null : "Демонстрационный сбой",
  });
  monitor.checks = monitor.checks.slice(0, 500);
  if (changed) {
    monitor.notifications.unshift({
      id: crypto.randomUUID(),
      event: status,
      createdAt: checkedAt,
    });
    monitor.notifications = monitor.notifications.slice(0, 100);
  }
  monitor.lastStatus = status;
  monitor.lastCheckedAt = checkedAt;
}

export function getHistory(
  monitor: Monitor,
  days: number,
  page: number,
  now = Date.now(),
) {
  const since = now - days * 86400000;
  const checks = monitor.checks.filter(
    (c) => Date.parse(c.checkedAt) >= since && Date.parse(c.checkedAt) <= now,
  );
  const successful = checks.filter((c) => c.isUp).length;
  return {
    monitor,
    total: checks.length,
    uptime: checks.length
      ? Math.round((successful / checks.length) * 10000) / 100
      : null,
    totalPages: Math.ceil(checks.length / 10),
    checks: checks.slice((page - 1) * 10, page * 10),
    notifications: monitor.notifications
      .filter(
        (n) =>
          Date.parse(n.createdAt) >= since && Date.parse(n.createdAt) <= now,
      )
      .slice(0, 20),
  };
}
