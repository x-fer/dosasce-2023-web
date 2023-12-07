import { v4 } from 'uuid'

export const onRequestGet = async context => {
  const params = new URLSearchParams(context.request.url.split('?')[1])
  const pass = params.get('pass')

  const emails = params.get('emails').split(',')

  if (pass !== 'mojaNovaSifra123Woohoo') return Response.json({ error: 'wrong password' }, { status: 400 })

  const stateId = await context.env.USER_CATEGORY.get('current_state')
  const categoryDataString = await context.env.USER_CATEGORY.get(stateId)
  const categoryData = JSON.parse(categoryDataString)

  for (const email of emails) {
    delete categoryData[email]
  }

  const newStateId = new Date().toISOString() + v4()

  await context.env.USER_CATEGORY.put('current_state', newStateId)
  await context.env.USER_CATEGORY.put(newStateId, JSON.stringify(categoryData))

  return Response.json(categoryData)
}
