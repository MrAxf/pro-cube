import { clerkMiddleware } from '@clerk/nuxt/server'

export default clerkMiddleware((event) => {
  const { userId } = event.context.auth()
  const isAuthRoute = event.path.startsWith('/api/cubes')

  if (!userId && isAuthRoute) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized: User not signed in',
    })
  }
})
