/* eslint-disable @typescript-eslint/no-explicit-any */
import { v4 } from 'uuid'

export interface Env {
  USER_CATEGORY: KVNamespace
  USER_CATEGORY_OLD: KVNamespace
}

export const onRequestGet = async context => {
  let logMessage: any = {
    serviceName: 'userCategories.onRequestGet',
  }

  const params = new URLSearchParams(context.request.url.split('?')[1])
  const emails = params.get('emails').split(',')

  logMessage.emails = emails

  const stateId = await context.env.USER_CATEGORY.get('current_state')

  if (stateId) {
    const categoryDataString = await context.env.USER_CATEGORY.get(stateId)

    const categoryData = JSON.parse(categoryDataString)

    const res =
      emails[0] === 'none'
        ? categoryData
        : emails.map(email => {
            return {
              email,
              category: categoryData[email],
            }
          })

    logMessage = {
      ...logMessage,
      stateId,
      categoryData,
      res,
    }

    return Response.json(res)
  } else {
    const allEmails = await context.env.USER_CATEGORY_OLD.list()

    const categoryData = {}
    for (const email of allEmails.keys) {
      const category = await context.env.USER_CATEGORY_OLD.get(email.name)

      categoryData[email.name] = category
    }

    const newStateId = new Date().toISOString() + v4()

    await context.env.USER_CATEGORY.put('current_state', newStateId)
    await context.env.USER_CATEGORY.put(newStateId, JSON.stringify(categoryData))

    const res =
      emails[0] === 'none'
        ? categoryData
        : emails.map(email => {
            return {
              email,
              category: categoryData[email],
            }
          })

    logMessage = {
      ...logMessage,
      stateId: newStateId,
      categoryData,
      allEmails,
      res,
    }
    return Response.json(res)
  }
}
