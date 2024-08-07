// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["nuxt-icon", "@nuxt/content", "@nuxt/image", "@nuxt/ui", ['nuxt-gtag', { id: 'G-BEW8B7QXPL' }],],

  colorMode: {
    preference: 'light'
  },
  
  compatibilityDate: "2024-08-03",
});