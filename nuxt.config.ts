import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  future: {
    compatibilityVersion: 4,
  },
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    'shadcn-nuxt',
    '@nuxtjs/color-mode',
    'motion-v/nuxt',
  ],
  css: ['~/assets/css/tailwind.css'],
  vite: {
    plugins: [tailwindcss()],
  },

  shadcn: {
    prefix: '',
    componentDir: './app/components/ui',
  },

  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'dark',
    storage: 'cookie',
  },

  vue: {
    compilerOptions: {
      isCustomElement: (tag) => {
        return ['web-cube'].includes(tag)
      },
    },
  },

  runtimeConfig: {
    libsqlUrl: '',
    libsqlAuthToken: undefined,
  },
})
