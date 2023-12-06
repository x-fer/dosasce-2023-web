export const onRequestGet = async context => {
  // get a list of all keys in the USER_CATEGORY namespace
  const allStateIds = await context.env.USER_CATEGORY.list()
  const ret = {}

  const params = new URLSearchParams(context.request.url.split('?')[1])
  const pass = params.get('pass')

  if (pass !== 'mojaNovaSifra123Woohoo') return Response.json({ error: 'wrong password' }, { status: 400 })

  for (const key of allStateIds.keys) {
    const id = key.name

    console.log(id)

    if (id === 'current_state') continue
    const categoryDataString = await context.env.USER_CATEGORY.get(id)

    try {
      const categoryData = JSON.parse(categoryDataString)

      ret[id] = Object.entries(categoryData).length
    } catch (error) {
      console.log('id: ', id)

      ret[id] = 'error'
    }
  }

  return Response.json(ret)
}
