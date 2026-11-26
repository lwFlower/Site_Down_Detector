<script setup lang="ts">
import MonitorPage from "./pages/index.vue";
</script>
<template>
  <header class="header">
    <div class="container header-inner">
      <a class="brand" href="./">SiteWatch<span>.</span></a>
      <span class="muted">Данные в вашем браузере</span>
    </div>
  </header>
  <MonitorPage />
  <footer class="container footer">
    SiteWatch · Демонстрационные проверки при открытой странице
  </footer>
</template>
