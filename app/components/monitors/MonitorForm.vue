<script setup lang="ts">
import type { MonitorFormData } from "~~/shared/types/monitor";
defineProps<{ form: MonitorFormData; busy: boolean; error: string }>();
const emit = defineEmits<{ submit: [] }>();
</script>
<template>
  <section class="panel">
    <h2>Добавить сайт</h2>
    <form class="monitor-form" @submit.prevent="emit('submit')">
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
          <option :value="30">30 секунд</option>
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
      Первая проверка запускается автоматически. Только публичные HTTP(S) сайты.
    </p>
    <p v-if="error" class="error" role="alert">{{ error }}</p>
  </section>
</template>
