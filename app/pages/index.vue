<script setup lang="ts">
const {
  data: monitors,
  refresh,
  error: loadError,
} = await useFetch("/api/monitors", { default: () => [] });
const form = reactive({ name: "", url: "", intervalSec: 60 });
const selectedId = ref("");
const busy = ref(false);
const error = ref("");
const up = computed(
  () =>
    monitors.value.filter((m) => m.isActive && m.lastStatus === "UP").length,
);
const down = computed(
  () =>
    monitors.value.filter((m) => m.isActive && m.lastStatus === "DOWN").length,
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
async function deleted() {
  selectedId.value = "";
  await refresh();
}
let timer: ReturnType<typeof setInterval>;
onMounted(() => {
  timer = setInterval(() => refresh(), 5000);
});
onBeforeUnmount(() => clearInterval(timer));
</script>

<template>
  <main class="container main">
    <div class="page-heading">
      <span class="eyebrow">МОНИТОРИНГ САЙТОВ</span>
      <h1>Всё ли работает?</h1>
      <p class="muted">
        Добавьте сайт — мы сохраним результаты проверок и изменения статуса.
      </p>
    </div>
    <div class="stats-grid">
      <div class="stat">
        <span>Всего сайтов</span><strong>{{ monitors.length }}</strong>
      </div>
      <div class="stat">
        <span>Доступны</span><strong class="green-text">{{ up }}</strong>
      </div>
      <div class="stat">
        <span>Недоступны</span><strong class="red-text">{{ down }}</strong>
      </div>
    </div>
    <section class="panel">
      <h2>Добавить сайт</h2>
      <form class="monitor-form" @submit.prevent="add">
        <label
          >Название<input
            v-model="form.name"
            required
            maxlength="100"
            placeholder="Мой сайт"
        /></label>
        <label
          >URL<input
            v-model="form.url"
            type="url"
            required
            maxlength="2048"
            placeholder="https://example.com"
        /></label>
        <label
          >Интервал<select v-model="form.intervalSec">
            <option :value="60">1 минута</option>
            <option :value="300">5 минут</option>
            <option :value="900">15 минут</option>
            <option :value="3600">1 час</option>
          </select></label
        >
        <button class="button primary" :disabled="busy">
          {{ busy ? "Подождите…" : "+ Добавить" }}
        </button>
      </form>
      <p class="hint">
        Первая проверка запускается автоматически. Только публичные HTTP(S)
        сайты.
      </p>
      <p v-if="error" class="error" role="alert">{{ error }}</p>
    </section>
    <section class="panel">
      <div class="section-heading">
        <h2>Ваши сайты</h2>
        <span class="hint">Обновление каждые 5 секунд</span>
      </div>
      <p v-if="loadError" class="error" role="alert">
        {{ errorMessage(loadError) }}
        <button class="text-button" @click="refresh()">Повторить</button>
      </p>
      <div v-if="!monitors.length" class="empty">
        Пока нет мониторов. Добавьте первый сайт с помощью формы выше.
      </div>
      <div v-else class="table-scroll">
        <table>
          <thead>
            <tr>
              <th>Сайт</th>
              <th>Статус</th>
              <th>Отклик</th>
              <th>Действия</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="m in monitors"
              :key="m.id"
              :class="{ selected: selectedId === m.id }"
            >
              <td>
                <button class="site-name" @click="selectedId = m.id">
                  {{ m.name }}</button
                ><span class="site-url">{{ m.url }}</span>
              </td>
              <td>
                <StatusBadge :status="m.lastStatus" :active="m.isActive" />
              </td>
              <td class="nowrap">
                {{
                  m.checks[0]?.responseMs != null
                    ? `${m.checks[0].responseMs} мс`
                    : "—"
                }}
              </td>
              <td>
                <div class="actions">
                  <button class="button small" @click="selectedId = m.id">
                    История</button
                  ><button
                    class="button small"
                    :disabled="busy"
                    @click="toggle(m.id, m.isActive)"
                  >
                    {{ m.isActive ? "Пауза" : "Продолжить" }}
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    <MonitorDetails
      v-if="selectedId"
      :id="selectedId"
      :key="selectedId"
      @deleted="deleted"
      @close="selectedId = ''"
    />
  </main>
</template>
