<script setup lang="ts">
import StatusBadge from "../common/StatusBadge.vue";
import type { MonitorSummary } from "../../types/monitor";
defineProps<{
  monitors: MonitorSummary[];
  selectedId: string;
}>();
const emit = defineEmits<{
  select: [id: string];
  toggle: [id: string];
}>();
</script>
<template>
  <section class="panel">
    <div class="section-heading">
      <h2>Ваши сайты</h2>
      <span class="hint">Сохранение в localStorage</span>
    </div>
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
              <button class="site-name" @click="emit('select', m.id)">
                {{ m.name }}</button><span class="site-url">{{ m.url }}</span>
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
                <button class="button small" @click="emit('select', m.id)">
                  История</button
                ><button class="button small" @click="emit('toggle', m.id)">
                  {{ m.isActive ? "Пауза" : "Продолжить" }}
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
