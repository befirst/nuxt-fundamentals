// https://nuxt.com/docs/api/configuration/nuxt-config
import daisyui from 'daisyui'

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    'nuxt-typed-router'
  ],
  tailwindcss: {
    config: {
      content: [],
      plugins: [daisyui]
    }
  },
  typescript: {
    typeCheck: true,
    shim: false,
    strict: true
  }
})
