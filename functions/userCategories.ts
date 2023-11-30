export interface Env {
  USER_CATEGORY: KVNamespace
}

export const onRequestGet = async context => {
  const params = new URLSearchParams(context.request.url.split('?')[1])
  const emails = params.get('emails').split(',')

  const res = await Promise.all(
    emails.map(async email => {
      const category = await context.env.USER_CATEGORY.get(email)

      return {
        email,
        category,
      }
    })
  )

  return Response.json(res)
}
