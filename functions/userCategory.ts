export interface Env {
  USER_CATEGORY: KVNamespace
}

export const onRequestGet = async context => {
  const params = new URLSearchParams(context.request.url.split('?')[1])
  const email = params.get('email')

  const category = await context.env.USER_CATEGORY.get(email)

  const res = {
    email,
    category,
  }

  return Response.json(res)
}

export const onRequestPost = async context => {
  const body = await context.request.json()
  const { email, category } = body

  if (!email || !category) return Response.json({ error: 'email and category are required' }, { status: 400 })

  const existingCategory = await context.env.USER_CATEGORY.get(email)

  if (existingCategory) {
    return Response.json({ error: 'user already exists' }, { status: 400 })
  } else {
    await context.env.USER_CATEGORY.put(email, category)
  }

  const res = {
    email,
    category,
  }

  return Response.json(res)
}
