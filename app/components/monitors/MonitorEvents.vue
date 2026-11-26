<script setup lang="ts">
import { formatDate } from "../../utils/format";
import type { NotificationRecord } from "../../types/monitor";
defineProps<{ notifications: NotificationRecord[] }>();
</script>
<template>
  <div>
    <h3>Изменения статуса</h3>
    <p class="hint">
      Последние 20 событий за выбранный период. События сохраняются в браузере.
    </p>
    <p v-if="!notifications.length" class="muted">
      Событий пока нет. Первая проверка задаёт начальное состояние.
    </p>
    <div v-for="n in notifications" :key="n.id" class="event-row">
      <span :class="n.event === 'UP' ? 'green-text' : 'red-text'">{{
        n.event === "UP" ? "↗ Сайт снова доступен" : "↘ Сайт недоступен"
      }}</span><time>{{ formatDate(n.createdAt) }}</time>
    </div>
  </div>
</template>
