export function useMonitors() {
  const request = useFetch("/api/monitors", { default: () => [] });
  const { data: monitors, refresh, error: loadError } = request;
  const form = reactive({ name: "", url: "", intervalSec: 60 });
  const busy = ref(false);
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
  async function add() {
    busy.value = true;
    error.value = "";
    try {
      await $fetch("/api/monitors", { method: "POST", body: form });
      form.name = "";
      form.url = "";
      await refresh();
    } catch (e) {
      error.value = errorMessage(e);
    } finally {
      busy.value = false;
    }
  }
  async function toggle(id: string, isActive: boolean) {
    busy.value = true;
    error.value = "";
    try {
      await $fetch(`/api/monitors/${id}`, {
        method: "PATCH",
        body: { isActive: !isActive },
      });
      await refresh();
    } catch (e) {
      error.value = errorMessage(e);
    } finally {
      busy.value = false;
    }
  }
  let timer: ReturnType<typeof setInterval>;
  onMounted(() => {
    timer = setInterval(() => refresh(), 5000);
  });
  onBeforeUnmount(() => clearInterval(timer));

  return {
    ready: request,
    monitors,
    refresh,
    loadError,
    form,
    busy,
    error,
    up,
    down,
    add,
    toggle,
  };
}
