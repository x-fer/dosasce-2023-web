import { v4 } from 'uuid'

export interface Env {
  USER_CATEGORY: KVNamespace
}

export const onRequestGet = async context => {
  const params = new URLSearchParams(context.request.url.split('?')[1])
  const emails = params.get('emails').split(',')

  const stateId = await context.env.USER_CATEGORY.get('current_state')
  // console.log('stateId: ', stateId)

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

    // console.log('userCategories API: ', res)
    return Response.json(res)
  } else {
    const allEmails = await context.env.USER_CATEGORY_OLD.list()
    // console.log('allEmails: ', allEmails)

    // const categoryData = await Promise.all(allEmails.keys.map(key => context.env.USER_CATEGORY_OLD.get(key)))
    const categoryData = allEmails.keys.map(async email => {
      const category = await context.env.USER_CATEGORY_OLD.get(email)

      return {
        email,
        category,
      }
    })

    const newStateId = v4()

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

    // console.log('userCategories API, allEmails: ', allEmails)
    // console.log('userCategories API: ', res)
    return Response.json(res)
  }
}
