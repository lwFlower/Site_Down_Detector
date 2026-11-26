<script setup lang="ts">
import StatusBadge from "../common/StatusBadge.vue";
import CheckHistory from "./CheckHistory.vue";
import MonitorEvents from "./MonitorEvents.vue";
import { useMonitorDetails } from "../../composables/useMonitorDetails";
const props = defineProps<{ id: string }>();
const emit = defineEmits<{ deleted: []; close: [] }>();
const { data, days, page, deleting, error, remove, check } = useMonitorDetails(
  props.id,
);
async function deleteMonitor() {
  if (await remove()) emit("deleted");
}
</script>

<template>
  <section class="panel details">
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
      <div class="stats-grid detail-stats">
        <div class="stat">
          <span>Аптайм</span
          ><strong class="green-text">{{
            data.uptime === null ? "—" : `${data.uptime}%`
          }}</strong
          ><small>Доля успешных проверок</small>
        </div>
        <div class="stat">
          <span>Проверок</span><strong>{{ data.total }}</strong
          ><small>Интервал: {{ data.monitor.intervalSec }} сек</small>
        </div>
      </div>
      <p class="hint">
        Все даты — UTC. Аптайм рассчитывается по сохранённым демонстрационным
        проверкам. Хранятся последние 500 проверок и 100 событий на сайт. Время
        и размер ответа не измеряются.
      </p>
      <div class="demo-controls">
        <p>
          Демонстрация доступности. Кнопки сразу создают результат проверки.
        </p>
        <div class="actions">
          <button
            class="button"
            :disabled="!data.monitor.isActive"
            @click="check()"
          >
            Проверить сейчас
          </button>
          <button
            class="button danger"
            :disabled="!data.monitor.isActive"
            @click="check('DOWN')"
          >
            Сымитировать сбой
          </button>
          <button
            class="button primary"
            :disabled="!data.monitor.isActive"
            @click="check('UP')"
          >
            Восстановить
          </button>
        </div>
      </div>
      <CheckHistory
        :checks="data.checks"
        :page="page"
        :total-pages="data.totalPages"
        @page="page = $event"
      />
      <MonitorEvents :notifications="data.notifications" />
      <div class="delete-area">
        <button class="button danger small" @click="deleting = !deleting">
          Удалить монитор
        </button>
        <div v-if="deleting">
          <p>Удалить сайт и всю его историю? Отменить это действие нельзя.</p>
          <div class="actions">
            <button class="button danger" @click="deleteMonitor">
              Да, удалить</button
            ><button class="button" @click="deleting = false">Отмена</button>
          </div>
        </div>
      </div>
      <p v-if="error" class="error" role="alert">{{ error }}</p>
    </template>
  </section>
</template>
