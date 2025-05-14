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

  const { id } = await getValidatedRouterParams(
    event,
    parser(idParameterSchema)
  )

  const cube = await db
    .select()
    .from(cubes)
    .where(and(eq(cubes.id, Number(id)), eq(cubes.userId, userId)))
    .limit(1)
    .get()

  if (!cube) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Not Found',
      message: 'Cube not found',
    })
  }

  const deletedCube = await db
    .delete(cubes)
    .where(eq(cubes.id, Number(id)))
    .returning()

  return {
    data: deletedCube[0],
  }
})
