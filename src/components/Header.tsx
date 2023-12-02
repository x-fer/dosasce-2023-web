import { UserContext } from '@/App'
import { http } from '@/api/http'
import { CredentialResponse, GoogleLogin } from '@react-oauth/google'
import { Dispatch, SetStateAction, useContext } from 'react'
import { Trophy } from 'lucide-react'
import UserDropdown from './UserDropdown'

type HeaderType = {
  setToken: Dispatch<SetStateAction<string>>
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>
}

const Header = ({ setToken, setIsLoggedIn }: HeaderType) => {
  const { isLoggedIn } = useContext(UserContext)

  const logOut = () => {
    localStorage.removeItem('SavedLoginToken')
    setToken('')
    setIsLoggedIn(false)
  }

  const onSuccess = (credentialResponse: CredentialResponse) => {
    const { credential } = credentialResponse

    if (!credential) return

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
    <header className="sticky top-0 z-50 flex min-h-[60px] w-full items-center justify-between bg-red px-4 text-white shadow-2xl sm:px-6 md:px-8">
      <a href="/" className="cursor-pointer select-none text-2xl">
        došašće++
      </a>

      <div className="flex gap-4 sm:gap-6">
        <a href="/leaderboard/1" className="cursor-pointer select-none underline">
          <div className="flex h-full items-center gap-1 text-2xl">
            <Trophy size={24} strokeWidth={3} />
            <p className="mb-1 hidden underline sm:block">rang-lista</p>
          </div>
        </a>

        {!isLoggedIn ? (
          <GoogleLogin onSuccess={onSuccess} shape="pill" text="signin" />
        ) : (
          <UserDropdown logOut={logOut} />
        )}
      </div>
    </header>
  )
}

export default Header
