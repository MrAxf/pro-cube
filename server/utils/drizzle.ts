import { drizzle } from 'drizzle-orm/libsql'

import * as schema from '../database/schema'

export { sql, eq, and, or } from 'drizzle-orm'

export const tables = schema

export function useDrizzle() {
  const config = useRuntimeConfig()
  return drizzle({
    connection: {
      url: config.libsqlUrl,
      authToken: config.libsqlAuthToken,
    },
    schema,
  })
}

export type Cube = typeof schema.cubes.$inferSelect
