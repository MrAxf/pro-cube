import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  dialect: 'turso',
  schema: './server/database/schema.ts',
  out: './server/database/migrations',
  dbCredentials: {
    url: process.env.NUXT_LIBSQL_URL as string,
    authToken: process.env.NUXT_LIBSQL_AUTH_TOKEN as string | undefined,
  },
})
