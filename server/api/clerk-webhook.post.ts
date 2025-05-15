import { verifyWebhook } from '@clerk/nuxt/webhooks'

import { users } from '../database/schema'

export default defineEventHandler(async (event) => {
  try {
    const evt = await verifyWebhook(event)
    const db = useDrizzle()

    const eventType = evt.type

    if (eventType === 'user.created') {
      await db.insert(users).values({
        id: evt.data.id,
        email: evt.data.email_addresses[0].email_address,
        createdAt: new Date(evt.data.created_at),
        updatedAt: new Date(evt.data.updated_at),
      })
    } else if (eventType === 'user.updated') {
      await db
        .update(users)
        .set({
          email: evt.data.email_addresses[0].email_address,
          updatedAt: new Date(evt.data.updated_at),
        })
        .where(eq(users.id, evt.data.id))
    } else if (eventType === 'user.deleted') {
      await db.delete(users).where(eq(users.id, evt.data.id!))
    } else if (eventType === 'session.created') {
      await db
        .update(users)
        .set({
          lastSignInAt: new Date(evt.data.created_at),
        })
        .where(eq(users.id, evt.data.user_id))
    }

    return 'Webhook received'
  } catch (err) {
    console.error('Error verifying webhook:', err)
    setResponseStatus(event, 400)
    return 'Error verifying webhook'
  }
})
