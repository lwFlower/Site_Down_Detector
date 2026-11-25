<script setup lang="ts">
import MonitorForm from "~/components/monitors/MonitorForm.vue";
import MonitorList from "~/components/monitors/MonitorList.vue";
import MonitorDetails from "~/components/monitors/MonitorDetails.vue";
const {
  ready,
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
} = useMonitors();
await ready;
const selectedId = ref("");
async function deleted() {
  selectedId.value = "";
  await refresh();
}
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
    <MonitorForm :form="form" :busy="busy" :error="error" @submit="add" />
    <MonitorList
      :monitors="monitors"
      :selected-id="selectedId"
      :busy="busy"
      :load-error="loadError ? errorMessage(loadError) : ''"
      @select="selectedId = $event"
      @toggle="toggle"
      @refresh="refresh()"
    />
    <MonitorDetails
      v-if="selectedId"
      :id="selectedId"
      :key="selectedId"
      @deleted="deleted"
      @close="selectedId = ''"
    />
  </main>
</template>
