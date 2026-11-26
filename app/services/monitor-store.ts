import { ref } from "vue";
import type { Monitor, MonitorFormData, Status } from "../types/monitor";
import { readMonitors, writeMonitors } from "../storage/monitor-storage";
import { createMonitor, recordDemoCheck } from "./monitor-model";

export const monitors = ref<Monitor[]>([]);
export const storageError = ref("");
let initialized = false;
let storageReady = true;

export function initializeStore() {
  if (initialized) return;
  initialized = true;
  try {
    monitors.value = readMonitors(window.localStorage);
  } catch {
    storageReady = false;
    storageError.value =
      "Не удалось прочитать localStorage. Запись остановлена, чтобы сохранить прежние данные. Проверьте доступ к хранилищу браузера.";
  }
}

function change(update: (items: Monitor[]) => void) {
  if (!storageReady)
    throw new Error("Хранилище недоступно. Проверьте настройки браузера.");
  // Сначала сохраняем копию, затем обновляем интерфейс. Ошибка записи не теряет старые данные.
  let next: Monitor[];
  try {
    next = readMonitors(window.localStorage);
  } catch {
    storageReady = false;
    storageError.value =
      "Сохранённые данные недоступны. Изменение остановлено, прежнее содержимое не перезаписано.";
    throw new Error(storageError.value);
  }
  update(next);
  try {
    writeMonitors(window.localStorage, next);
  } catch {
    storageError.value =
      "Не удалось сохранить данные. Возможно, localStorage заполнен или отключён. Изменение не применено.";
    throw new Error(storageError.value);
  }
  monitors.value = next;
  storageError.value = "";
}

export function addMonitor(form: MonitorFormData) {
  const monitor = createMonitor(form);
  recordDemoCheck(monitor, "UP");
  change((items) => items.unshift(monitor));
}
export function toggleMonitor(id: string) {
  change((items) => {
    const monitor = items.find((m) => m.id === id);
    if (monitor) monitor.isActive = !monitor.isActive;
  });
}
export function deleteMonitor(id: string) {
  change((items) => {
    const index = items.findIndex((m) => m.id === id);
    if (index !== -1) items.splice(index, 1);
  });
}
export function checkMonitor(id: string, status?: Status) {
  change((items) => {
    const monitor = items.find((m) => m.id === id);
    if (monitor?.isActive)
      recordDemoCheck(monitor, status ?? monitor.demoStatus);
  });
}
export function checkDueMonitors() {
  if (storageError.value) return;
  const now = Date.now();
  const due = monitors.value.filter(
    (m) =>
      m.isActive &&
      (!m.lastCheckedAt ||
        now - Date.parse(m.lastCheckedAt) >= m.intervalSec * 1000),
  );
  if (!due.length) return;
  change((items) => {
    for (const monitor of items) {
      if (due.some((m) => m.id === monitor.id))
        recordDemoCheck(monitor, monitor.demoStatus);
    }
  });
}
