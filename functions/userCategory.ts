import { v4 } from 'uuid'

export interface Env {
  USER_CATEGORY: KVNamespace
  USER_CATEGORY_OLD: KVNamespace
}

export const onRequestPost = async context => {
  const body = await context.request.json()
  const { email, category } = body

  if (!email || !category)
    return Response.json({ error: 'email, category, and currentData are required' }, { status: 400 })

  const currentStateId = await context.env.USER_CATEGORY.get('current_state')
  // console.log('currentStateId: ', currentStateId)

  let currentData = null
  let existingCategory = null

  if (currentStateId) {
    const currentDataString = await context.env.USER_CATEGORY.get(currentStateId)
    currentData = JSON.parse(currentDataString)
  }
  if (currentData) existingCategory = currentData[email]

  // console.log('currentData: ', currentData)

  if (existingCategory) {
    return Response.json({ error: 'user already exists' }, { status: 400 })
  } else {
    const stateId = v4()
    // console.log('newStateId: ', stateId)

    const newState = { ...currentData, [email]: category }

    // console.log('newState: ', newState)

    await context.env.USER_CATEGORY.put('current_state', stateId)
    await context.env.USER_CATEGORY.put(stateId, JSON.stringify(newState))
  }

  const res = {
    email,
    category,
  }

  return Response.json(res)
}
