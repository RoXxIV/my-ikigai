export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["./assets/scss/main.scss"],
  modules: ["@nuxtjs/i18n"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/variables.scss" as *;',
        },
      },
    },
  },
});
