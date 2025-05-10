import { parser } from 'valibot'
import { cubes } from '~~/server/database/schema'

export default defineEventHandler(async (event) => {
  const db = useDrizzle()
  const { id } = await getValidatedRouterParams(
    event,
    parser(idParameterSchema)
  )

  const cube = await db
    .select()
    .from(cubes)
    .where(eq(cubes.id, Number(id)))
    .limit(1)
    .get()

  if (!cube) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Not Found',
      message: 'Cube not found',
    })
  }

  const data = await readValidatedBody(event, parser(cubeSchema))

  const updatedCube = await db
    .update(cubes)
    .set({
      ...data,
      updatedAt: new Date(),
    })
    .where(eq(cubes.id, Number(id)))
    .returning()

  return {
    data: updatedCube[0],
  }
})
