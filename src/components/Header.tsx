import { UserContext } from '@/App'
import { http } from '@/api/http'
import { CredentialResponse, GoogleLogin } from '@react-oauth/google'
import { Dispatch, SetStateAction, useContext } from 'react'
import UserDropdown from './UserDropdown'
import { checkUserCategory } from '@/api/repository'
import { useNavigate } from 'react-router-dom'

type HeaderType = {
  setToken: Dispatch<SetStateAction<string>>
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>
}

const Header = ({ setToken, setIsLoggedIn }: HeaderType) => {
  const { isLoggedIn, user } = useContext(UserContext)
  const navigate = useNavigate()

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

      checkUserCategory(user!.email)
        .then(res => res.json())
        .then(data => {
          if (data.category) {
            setIsLoggedIn(true)
          } else {
            navigate('/uzrast')
          }
        })
    })
  }

  return (
    <header className="sticky top-0 z-50 flex min-h-[60px] w-full items-center justify-between bg-red px-8 text-white shadow-2xl">
      <a href="/" className="cursor-pointer select-none text-2xl">
        došašće++
      </a>

      {!isLoggedIn ? (
        <GoogleLogin onSuccess={onSuccess} shape="pill" text="signin" />
      ) : (
        <UserDropdown logOut={logOut} />
      )}
    </header>
  )
}

export default Header
