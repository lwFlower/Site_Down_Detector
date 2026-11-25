<script setup lang="ts">
import StatusBadge from "../common/StatusBadge.vue";
import { formatDate, formatSize } from "~/utils/format";
import type { CheckRecord } from "~~/shared/types/monitor";
defineProps<{ checks: CheckRecord[]; page: number; totalPages: number }>();
const emit = defineEmits<{ page: [value: number] }>();
</script>
<template>
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
        <tr v-for="check in checks" :key="check.id">
          <td class="nowrap">{{ formatDate(check.checkedAt) }}</td>
          <td><StatusBadge :status="check.isUp ? 'UP' : 'DOWN'" /></td>
          <td>{{ check.statusCode ?? "—" }}</td>
          <td class="nowrap">
            {{ check.responseMs === null ? "—" : `${check.responseMs} мс` }}
          </td>
          <td class="nowrap">{{ formatSize(check.responseSize) }}</td>
          <td class="error-cell">{{ check.error || "—" }}</td>
        </tr>
        <tr v-if="!checks.length">
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
    <span class="hint">Страница {{ page }} из {{ totalPages || 1 }}</span>
    <div class="actions">
      <button
        class="button small"
        :disabled="page <= 1"
        @click="emit('page', page - 1)"
      >
        ← Назад</button
      ><button
        class="button small"
        :disabled="page >= totalPages"
        @click="emit('page', page + 1)"
      >
        Далее →
      </button>
    </div>
  </div>
</template>
