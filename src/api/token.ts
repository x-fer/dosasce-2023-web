import axios from 'axios'

type VerifyTokenResponse = {
  sub: string
  hd: string
  email: string
  email_verified: string
  name: string
  picture: string
}

export const verifyToken = async (token: string) => {
  const { data: niceGoogleResponse } = await axios.get<VerifyTokenResponse>('https://oauth2.googleapis.com/tokeninfo', {
    params: { id_token: token },
  })

  if (niceGoogleResponse?.email_verified !== 'true') throw new Error('email not verified')

  return niceGoogleResponse
}

export const extractUser = async (token: string) => {
  const tokenData = await verifyToken(token).catch(() => null)

  return tokenData
}
