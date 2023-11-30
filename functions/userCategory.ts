import { v4 } from 'uuid'

export interface Env {
  USER_CATEGORY: KVNamespace
}

export const onRequestPost = async context => {
  const body = await context.request.json()
  const { email, category } = body

  if (!email || !category)
    return Response.json({ error: 'email, category, and currentData are required' }, { status: 400 })

  const currentStateId = await context.env.USER_CATEGORY.get('current_state')
  let currentData = null
  let existingCategory = null

  if (currentStateId) currentData = await context.env.USER_CATEGORY.get(currentStateId)
  if (currentData) existingCategory = currentData[email]

  if (existingCategory) {
    return Response.json({ error: 'user already exists' }, { status: 400 })
  } else {
    const stateId = v4()
    // console.log(stateId)

    await context.env.USER_CATEGORY.put('current_state', stateId)
    await context.env.USER_CATEGORY.put(stateId, JSON.stringify({ ...currentData, [email]: category }))
  }

  const res = {
    email,
    category,
  }

  return Response.json(res)
}
