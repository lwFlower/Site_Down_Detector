<script setup lang="ts">
const props = defineProps<{ id: string }>();
const emit = defineEmits<{ deleted: []; close: [] }>();
const days = ref(7);
const page = ref(1);
const {
  data,
  refresh,
  error: loadError,
} = await useFetch(`/api/monitors/${props.id}`, { query: { days, page } });
const deleting = ref(false);
const busy = ref(false);
const error = ref("");
const date = (value: string) =>
  new Date(value).toLocaleString("ru-RU", { timeZone: "UTC" });
const size = (value: number | null) => (value === null ? "—" : `${value} Б`);
async function remove() {
  busy.value = true;
  error.value = "";
  try {
    await $fetch(`/api/monitors/${props.id}`, { method: "DELETE" });
    emit("deleted");
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
      <div class="table-scroll">
        <table>
          <thead>
            <tr>
              <th>Дата и время</th>
              <th>Результат</th>
              <th>HTTP</th>
              <th>Отклик</th>
              <th>Размер</th>
              <th>Ошибка</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="check in data.checks" :key="check.id">
              <td class="nowrap">{{ date(check.checkedAt) }}</td>
              <td><StatusBadge :status="check.isUp ? 'UP' : 'DOWN'" /></td>
              <td>{{ check.statusCode ?? "—" }}</td>
              <td class="nowrap">
                {{ check.responseMs === null ? "—" : `${check.responseMs} мс` }}
              </td>
              <td class="nowrap">{{ size(check.responseSize) }}</td>
              <td class="error-cell">{{ check.error || "—" }}</td>
            </tr>
            <tr v-if="!data.checks.length">
              <td colspan="6" class="empty">
                {{
                  page > 1
                    ? "Здесь больше нет записей. Вернитесь на предыдущую страницу."
                    : "Нет проверок за выбранный период."
                }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="section-heading pagination">
        <span class="hint"
          >Страница {{ page }} из {{ data.totalPages || 1 }}</span
        >
        <div class="actions">
          <button class="button small" :disabled="page <= 1" @click="page--">
            ← Назад</button
          ><button
            class="button small"
            :disabled="page >= data.totalPages"
            @click="page++"
          >
            Далее →
          </button>
        </div>
      </div>
      <h3>Изменения статуса</h3>
      <p class="hint">
        Последние 20 событий за выбранный период. Канал уведомления — лог.
      </p>
      <p v-if="!data.notifications.length" class="muted">
        Событий пока нет. Первая проверка задаёт начальное состояние.
      </p>
      <div v-for="n in data.notifications" :key="n.id" class="event-row">
        <span :class="n.event === 'UP' ? 'green-text' : 'red-text'">{{
          n.event === "UP" ? "↗ Сайт снова доступен" : "↘ Сайт недоступен"
        }}</span
        ><time>{{ date(n.createdAt) }}</time>
      </div>
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
            <button class="button danger" :disabled="busy" @click="remove">
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
