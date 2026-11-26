import { computed, ref } from "vue";
import {
  monitors,
  deleteMonitor,
  checkMonitor,
} from "../services/monitor-store";
import { getHistory } from "../services/monitor-model";
import type { Status } from "../types/monitor";

export function useMonitorDetails(id: string) {
  const days = ref(7);
  const page = ref(1);
  const deleting = ref(false);
  const error = ref("");
  const data = computed(() => {
    const monitor = monitors.value.find((m) => m.id === id);
    return monitor ? getHistory(monitor, days.value, page.value) : null;
  });
  function remove() {
    try {
      deleteMonitor(id);
      return true;
    } catch (e) {
      error.value = (e as Error).message;
      return false;
    }
  }
  function check(status?: Status) {
    error.value = "";
    try {
      checkMonitor(id, status);
    } catch (e) {
      error.value = (e as Error).message;
    }
  }
  return { data, days, page, deleting, error, remove, check };
}
