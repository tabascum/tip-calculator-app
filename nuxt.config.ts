// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/style/base.css"],
  modules: ["@pinia/nuxt"],
  ssr: false,
});
