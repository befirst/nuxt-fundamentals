// https://nuxt.com/docs/api/configuration/nuxt-config
import daisyui from 'daisyui'

export default defineNuxtConfig({
    devtools: { enabled: true },
    css: ['~/assets/css/fonts.css'],
    modules: [
        '@nuxtjs/eslint-module',
        '@nuxtjs/google-fonts',
        '@nuxtjs/tailwindcss',
        'nuxt-typed-router',
    ],
    googleFonts: {
        useStylesheet: true,
        prefetch: true,
        preconnect: true,
        preload: true,
        download: true,
        families: {
            Chivo: true,
        },
    },
    tailwindcss: {
        config: {
            content: [
                './pages/**/*.{vue,html,js,ts}',
                './layout/**/*.{vue,html,js,ts}',
                './components/**/*.{vue,html,js,ts}',
            ],
            plugins: [daisyui],
        },
    },
    typescript: {
        shim: false,
        strict: true,
    },
})
