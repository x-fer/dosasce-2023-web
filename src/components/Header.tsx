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
    <header className="sticky top-0 z-50 flex min-h-[60px] w-full items-center justify-between bg-red px-8 text-white shadow-2xl">
      <a href="/" className="cursor-pointer select-none text-2xl">
        došašće++
      </a>

      <div>
        <a href="/leaderboard/1" className="mr-7 inline-block cursor-pointer select-none align-top text-2xl underline">
          <Trophy size={24} strokeWidth={3} className="inline-block" />
          <p className="ml-1 hidden underline sm:inline-block">rang-lista</p>
        </a>
        <div className="inline-block">
          {!isLoggedIn ? (
            <GoogleLogin onSuccess={onSuccess} shape="pill" text="signin" />
          ) : (
            <UserDropdown logOut={logOut} />
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
