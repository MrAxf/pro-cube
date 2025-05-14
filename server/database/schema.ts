import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const users = sqliteTable('users', {
  id: text('id').primaryKey(),
  email: text('email').notNull(),
  lastSignInAt: integer('last_sign_in_at', { mode: 'timestamp' }),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull(),
})

export const cubes = sqliteTable('cubes', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  userId: text('user_id')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  name: text('name').notNull(),
  size: integer('size').notNull(),
  baseColor: text('base_color').notNull(),
  upColor: text('up_color').notNull(),
  downColor: text('down_color').notNull(),
  leftColor: text('left_color').notNull(),
  rightColor: text('right_color').notNull(),
  frontColor: text('front_color').notNull(),
  backColor: text('back_color').notNull(),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull(),
})
