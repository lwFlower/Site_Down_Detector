import { computed, onBeforeUnmount, onMounted, reactive, ref } from "vue";
import {
  monitors,
  storageError,
  initializeStore,
  addMonitor,
  toggleMonitor,
  checkDueMonitors,
} from "../services/monitor-store";

export function useMonitors() {
  initializeStore();
  const form = reactive({ name: "", url: "", intervalSec: 30 });
  const error = ref("");
  const up = computed(
    () =>
      monitors.value.filter((m) => m.isActive && m.lastStatus === "UP").length,
  );
  const down = computed(
    () =>
      monitors.value.filter((m) => m.isActive && m.lastStatus === "DOWN")
        .length,
  );
  function add() {
    error.value = "";
    try {
      addMonitor(form);
      form.name = "";
      form.url = "";
    } catch (e) {
      error.value = (e as Error).message;
    }
  }
  function toggle(id: string) {
    error.value = "";
    try {
      toggleMonitor(id);
    } catch (e) {
      error.value = (e as Error).message;
    }
  }
  let timer: ReturnType<typeof setInterval>;
  onMounted(() => {
    timer = setInterval(() => {
      try {
        checkDueMonitors();
      } catch {
        /* Сообщение уже находится в storageError. */
      }
    }, 1000);
  });
  onBeforeUnmount(() => clearInterval(timer));
  return { monitors, storageError, form, error, up, down, add, toggle };
}
