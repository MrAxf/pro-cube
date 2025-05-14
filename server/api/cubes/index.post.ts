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
