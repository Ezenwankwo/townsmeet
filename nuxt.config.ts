// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      "@tailwindcss/postcss": {},
      autoprefixer: {},
    },
  },

  modules: [
    "@nuxt/icon",
    "@nuxt/content",
    "@nuxt/image",
    "@nuxt/ui",
    ['nuxt-gtag', { id: process.env.GTAG_ID }],
    "@nuxtjs/seo"
  ],

  runtimeConfig: {
    brevoApiKey: process.env.BREVO_API_KEY || process.env.BREVO_PASS || '',
    brevoSenderEmail: process.env.BREVO_USER || 'onyeka.ezenwankwo@gmail.com',
    mailTo: process.env.MAIL_TO || 'townsmeet@gmail.com',
  },

  future: {
    compatibilityVersion: 4,
  },

  colorMode: {
    preference: 'light'
  },

  site: {
    url: 'https://www.townsmeet.com',
    name: 'Townsmeet',
    description: 'Townsmeet is a digital transformation company. We provide innovative digital solutions to businesses in a variety of industries in Nigeria and across Africa.',
    defaultLocale: 'en', // not needed if you have @nuxtjs/i18n installed
  },

  seo: {
    redirectToCanonicalSiteUrl: true
  },

  robots: {
    enabled: false
  },

  nitro: {
    prerender: {
      ignore: ['/__nuxt_content']
    }
  },

  // nitro: {
  //   prerender: {
  //     routes: ['/'],
  //     crawlLinks: true
  //   },
  // },

  compatibilityDate: "2024-08-03",
});