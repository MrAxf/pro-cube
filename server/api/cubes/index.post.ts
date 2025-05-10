import { parser } from 'valibot'
import { cubes } from '~~/server/database/schema'

export default defineEventHandler(async (event) => {
  const db = useDrizzle()

  const body = await readValidatedBody(event, parser(cubeSchema))

  const data = await db
    .insert(cubes)
    .values({
      ...body,
      createdAt: new Date(),
      updatedAt: new Date(),
    })
    .returning()

  return {
    data: data[0],
  }
})
