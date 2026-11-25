<script setup lang="ts">
const props = withDefaults(
  defineProps<{ status: string; active?: boolean }>(),
  { active: true },
);
const label = computed(() =>
  props.active === false
    ? "На паузе"
    : ({ UP: "Доступен", DOWN: "Недоступен", UNKNOWN: "Ожидает проверки" }[
        props.status
      ] ?? "Нет данных"),
);
const tone = computed(() =>
  props.active === false ? "paused" : props.status.toLowerCase(),
);
</script>
<template>
  <span class="badge" :class="tone"
    ><span class="status-dot" />{{ label }}</span
  >
</template>
