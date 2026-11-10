export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  css: ["~/assets/css/main.css"],
  nitro: { preset: "node-server" },
  app: {
    head: {
      title: "SiteWatch — мониторинг сайтов",
      htmlAttrs: { lang: "ru" },
      meta: [
        {
          name: "description",
          content:
            "Мониторинг доступности сайтов, история проверок и уведомления.",
        },
      ],
    },
  },
});
