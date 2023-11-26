// Set CORS to all /api responses
export const onRequest: PagesFunction = async ({ next }) => {
  const response = await next()
  response.headers.set('Cross-Origin-Opener-Policy', 'same-origin-allow-popups')
  return response
}
