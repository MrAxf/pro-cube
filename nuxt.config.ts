import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  future: {
    compatibilityVersion: 4,
  },
  devtools: { enabled: true },

  runtimeConfig: {
    libsqlUrl: '',
    libsqlAuthToken: undefined,
  },

  nitro: {
    experimental: {
      tasks: true,
    },
  },

  /**Head & css */
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }],
    },
  },

  css: ['~/assets/css/tailwind.css'],

  /**Modules */
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    'shadcn-nuxt',
    '@nuxtjs/color-mode',
    'motion-v/nuxt',
    '@clerk/nuxt',
    '@pinia/nuxt',
  ],

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

  clerk: {
    skipServerMiddleware: true,
  },

  pinia: {
    storesDirs: ['./app/stores/**'],
  },

  /**Vite & Vue */
  vite: {
    plugins: [tailwindcss()],
    // server: {
    //   allowedHosts: ['*.ngrok-free.app'],
    // },
  },

  vue: {
    compilerOptions: {
      isCustomElement: (tag) => {
        return ['web-cube'].includes(tag)
      },
    },
  },
})
