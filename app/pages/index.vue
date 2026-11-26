<script setup lang="ts">
import { ref } from "vue";
import MonitorForm from "../components/monitors/MonitorForm.vue";
import MonitorList from "../components/monitors/MonitorList.vue";
import MonitorDetails from "../components/monitors/MonitorDetails.vue";
import { useMonitors } from "../composables/useMonitors";
const { monitors, storageError, form, error, up, down, add, toggle } =
  useMonitors();
const selectedId = ref("");
</script>

<template>
  <main class="container main">
    <div class="page-heading">
      <span class="eyebrow">МОНИТОРИНГ САЙТОВ</span>
      <h1>Всё ли работает?</h1>
      <p class="muted">
        Демоверсия. Добавьте сайт и покажите сбой или восстановление кнопками в
        истории.
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
    <p v-if="storageError" class="error" role="alert">{{ storageError }}</p>
    <MonitorForm :form="form" :error="error" @submit="add" />
    <MonitorList
      :monitors="monitors"
      :selected-id="selectedId"
      @select="selectedId = $event"
      @toggle="toggle"
    />
    <MonitorDetails
      v-if="selectedId"
      :id="selectedId"
      :key="selectedId"
      @deleted="selectedId = ''"
      @close="selectedId = ''"
    />
  </main>
</template>
