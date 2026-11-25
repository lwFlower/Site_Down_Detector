export function useMonitorDetails(id: string) {
  const days = ref(7);
  const page = ref(1);
  const request = useFetch(`/api/monitors/${id}`, { query: { days, page } });
  const { data, refresh, error: loadError } = request;
  const deleting = ref(false);
  const busy = ref(false);
  const error = ref("");
  async function remove() {
    busy.value = true;
    error.value = "";
    try {
      await $fetch(`/api/monitors/${id}`, { method: "DELETE" });
      return true;
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
    data,
    refresh,
    loadError,
    days,
    page,
    deleting,
    busy,
    error,
    remove,
  };
}
