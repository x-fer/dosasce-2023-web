export const onRequestGet = async context => {
  const params = new URLSearchParams(context.request.url.split('?')[1])
  const pass = params.get('pass')
  const stateId = params.get('stateId')

  if (pass !== 'mojaNovaSifra123Woohoo') return Response.json({ error: 'wrong password' }, { status: 400 })

  const categoryDataString = await context.env.USER_CATEGORY.get(stateId)
  const categoryData = JSON.parse(categoryDataString)

  return Response.json(categoryData)
}
