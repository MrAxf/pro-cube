import { parser } from 'valibot'
import { cubes } from '~~/server/database/schema'

export default defineEventHandler(async (event) => {
  const db = useDrizzle()

  const { page, pageSize } = await getValidatedQuery(
    event,
    parser(paginationSchema)
  )

  const total = await db.$count(cubes)

  const data = await db
    .select()
    .from(cubes)
    .orderBy(sql`${cubes.createdAt} DESC`)
    .limit(pageSize)
    .offset((page - 1) * pageSize)

  const totalPages = Math.ceil(total / pageSize)
  const nextPage = page < totalPages ? page + 1 : null
  const nextPageUrl = nextPage
    ? `${event.node.req.url?.split('?')[0]}?page=${nextPage}&pageSize=${pageSize}`
    : null
  const prevPage = page > 1 ? page - 1 : null
  const prevPageUrl = prevPage
    ? `${event.node.req.url?.split('?')[0]}?page=${prevPage}&pageSize=${pageSize}`
    : null

  return {
    data,
    meta: {
      total: total,
      page,
      next_page: nextPage,
      prev_page: prevPage,
      last_page: totalPages,
      page_size: pageSize,
      showing: data.length,
      next_page_url: nextPageUrl,
      prev_page_url: prevPageUrl,
    },
  }
})
