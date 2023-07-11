// https://nuxt.com/docs/api/configuration/nuxt-config
import daisyui from 'daisyui'

export default defineNuxtConfig({
    devtools: { enabled: true },
    css: ['~/assets/css/fonts.css', '~/assets/css/general.css'],
    components: [
        { path: '~/components/chat', pathPrefix: false },
        '~/components',
    ],
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
            Chivo: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        },
    },
    tailwindcss: {
        config: {
            darkMode: 'class',
            content: [
                './pages/**/*.{vue,html,js,ts}',
                './layout/**/*.{vue,html,js,ts}',
                './components/**/*.{vue,html,js,ts}',
            ],
            plugins: [daisyui],
            daisyui: {
                themes: false,
                darkTheme: 'light',
            },
        },
    },
    typescript: {
        shim: false,
        strict: true,
    },
})
