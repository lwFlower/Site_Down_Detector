<script setup lang="ts">
import StatusBadge from "../common/StatusBadge.vue";
import CheckHistory from "./CheckHistory.vue";
import MonitorEvents from "./MonitorEvents.vue";
const props = defineProps<{ id: string }>();
const emit = defineEmits<{ deleted: []; close: [] }>();
const {
  ready,
  data,
  refresh,
  loadError,
  days,
  page,
  deleting,
  busy,
  error,
  remove,
} = useMonitorDetails(props.id);
await ready;
async function deleteMonitor() {
  if (await remove()) emit("deleted");
}
</script>

<template>
  <section class="panel details">
    <p v-if="loadError" class="error" role="alert">
      {{ errorMessage(loadError) }}
      <button class="text-button" @click="refresh()">Повторить</button>
    </p>
    <template v-if="data">
      <div class="section-heading">
        <div>
          <span class="eyebrow">ИСТОРИЯ МОНИТОРА</span>
          <h2>{{ data.monitor.name }}</h2>
          <span class="site-url">{{ data.monitor.url }}</span>
        </div>
        <button class="button small" @click="emit('close')">Закрыть</button>
      </div>
      <div class="section-heading">
        <StatusBadge
          :status="data.monitor.lastStatus"
          :active="data.monitor.isActive"
        /><label class="period-label"
          >Период<select v-model="days" @change="page = 1">
            <option :value="1">24 часа</option>
            <option :value="7">7 дней</option>
            <option :value="30">30 дней</option>
          </select></label
        >
      </div>
      <div class="stats-grid">
        <div class="stat">
          <span>Аптайм</span
          ><strong class="green-text">{{
            data.uptime === null ? "—" : `${data.uptime}%`
          }}</strong
          ><small>Доля успешных проверок</small>
        </div>
        <div class="stat">
          <span>Средний отклик</span
          ><strong>{{
            data.averageMs === null ? "—" : `${Math.round(data.averageMs)} мс`
          }}</strong
          ><small>За выбранный период</small>
        </div>
        <div class="stat">
          <span>Проверок</span><strong>{{ data.total }}</strong
          ><small>Интервал: {{ data.monitor.intervalSec / 60 }} мин</small>
        </div>
      </div>
      <p class="hint">
        Все даты — UTC. Аптайм: успешные проверки / все проверки × 100%.
      </p>
      <CheckHistory
        :checks="data.checks"
        :page="page"
        :total-pages="data.totalPages"
        @page="page = $event"
      />
      <MonitorEvents :notifications="data.notifications" />
      <div class="delete-area">
        <button
          class="button danger small"
          :disabled="busy"
          @click="deleting = !deleting"
        >
          Удалить монитор
        </button>
        <div v-if="deleting">
          <p>Удалить сайт и всю его историю? Отменить это действие нельзя.</p>
          <div class="actions">
            <button
              class="button danger"
              :disabled="busy"
              @click="deleteMonitor"
            >
              Да, удалить</button
            ><button class="button" :disabled="busy" @click="deleting = false">
              Отмена
            </button>
          </div>
        </div>
      </div>
      <p v-if="error" class="error" role="alert">{{ error }}</p>
    </template>
  </section>
</template>
