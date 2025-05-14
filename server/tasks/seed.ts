import { createClerkClient } from '@clerk/nuxt/server'
import type { SQL } from 'drizzle-orm'
import { getTableColumns } from 'drizzle-orm'
import type { PgTable } from 'drizzle-orm/pg-core'
import type { SQLiteTable } from 'drizzle-orm/sqlite-core'

import { users } from '../database/schema'

const buildConflictUpdateColumns = <
  T extends PgTable | SQLiteTable,
  Q extends keyof T['_']['columns'],
>(
  table: T,
  columns: Q[]
) => {
  const cls = getTableColumns(table)
  return columns.reduce(
    (acc, column) => {
      const colName = cls[column].name
      acc[column] = sql.raw(`excluded.${colName}`)
      return acc
    },
    {} as Record<Q, SQL>
  )
}

export default defineTask({
  meta: {
    name: 'db:seed',
    description: 'Run database seed task',
  },
  async run() {
    const config = useRuntimeConfig()
    const db = useDrizzle()
    const clerkClient = createClerkClient({ secretKey: config.clerk.secretKey })
    const perPage = 50
    let addedUsers = 0
    let totalUsers = 1

    while (addedUsers < totalUsers) {
      const userList = await clerkClient.users.getUserList({
        limit: perPage,
        offset: addedUsers,
      })

      totalUsers = userList.totalCount
      addedUsers += userList.data.length
      await db
        .insert(users)
        .values(
          userList.data.map((user) => ({
            id: user.id,
            email: user.emailAddresses[0].emailAddress,
            lastSignInAt: user.lastSignInAt
              ? new Date(user.lastSignInAt)
              : null,
            createdAt: new Date(user.createdAt),
            updatedAt: new Date(user.updatedAt),
          }))
        )
        .onConflictDoUpdate({
          target: users.id,
          set: buildConflictUpdateColumns(users, [
            'email',
            'lastSignInAt',
            'updatedAt',
          ]),
        })
    }
    return { result: 'success' }
  },
})
