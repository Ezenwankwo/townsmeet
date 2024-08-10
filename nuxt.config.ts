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

  modules: [
    "nuxt-icon",
    "@nuxt/content",
    "@nuxt/image",
    "@nuxt/ui",
    ['nuxt-gtag', { id: process.env.GTAG_ID }],
    ['nuxt-mail', {
      message: {
        to: process.env.MAIL_TO,
      },
      smtp: {
        host: "smtp-relay.brevo.com",
        port: 587,
        auth: {
          user: process.env.BREVO_USER,
          pass: process.env.BREVO_PASS,
        },
      },
    }],
  ],

  colorMode: {
    preference: 'light'
  },
  
  compatibilityDate: "2024-08-03",
});