import { http } from '@/api/http'
import { CredentialResponse, GoogleLogin } from '@react-oauth/google'
import { Dispatch, SetStateAction } from 'react'

const Header = ({ setToken }: { setToken: Dispatch<SetStateAction<string>> }) => {
  const onSuccess = (credentialResponse: CredentialResponse) => {
    const { credential } = credentialResponse

    if (!credential) return

    console.log(credential)

    http.post('/auth/google-login', credentialResponse).then(() => {
      const bearer = 'Bearer ' + credential
      localStorage.setItem('SavedLoginToken', bearer)
      setToken(bearer)

      http.interceptors.request.use(config => {
        if (credential.length > 0) config.headers.set('Authorization', `Bearer ${credential}`)

        return config
      })
    })
  }

  return (
    <header className="sticky top-0 z-50 flex min-h-[60px] w-full items-center justify-between bg-red px-8 text-white shadow-2xl">
      <a href="/" className="cursor-pointer select-none text-2xl">
        došašće++
      </a>
      <GoogleLogin onSuccess={onSuccess} shape="pill" />
    </header>
  )
}

export default Header
