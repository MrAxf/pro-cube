import { parser } from 'valibot'
import { cubes } from '~~/server/database/schema'

export default defineEventHandler(async (event) => {
  const db = useDrizzle()
  const { userId } = event.context.auth()

  if (!userId) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized: User not signed in',
    })
  }

  const body = await readValidatedBody(event, parser(cubeSchema))

  const total = await db.$count(cubes, eq(cubes.userId, userId))

  if (total >= 20) {
    throw createError({
      statusCode: 403,
      statusMessage: 'Forbidden: User has reached the maximum number of cubes',
    })
  }

  const data = await db
    .insert(cubes)
    .values({
      ...body,
      userId: userId,
      createdAt: new Date(),
      updatedAt: new Date(),
    })
    .returning()

  return {
    data: data[0],
  }
})
