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
    "@nuxtjs/seo"
  ],

  colorMode: {
    preference: 'light'
  },

  site: {
    url: 'https://townsmeet.com',
    name: 'Townsmeet',
    description: 'Townsmeet is a digital transformation company. We provide innovative digital solutions to businesses and organisations.',
    defaultLocale: 'en', // not needed if you have @nuxtjs/i18n installed
  },

  seo: {
    redirectToCanonicalSiteUrl: true
  },
  
  compatibilityDate: "2024-08-03",
});