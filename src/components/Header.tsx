import { UserContext } from '@/App'
import { http } from '@/api/http'
import { CredentialResponse, GoogleLogin } from '@react-oauth/google'
import { Dispatch, SetStateAction, useContext } from 'react'

import UserDropdown from './UserDropdown'
import { addToAllContests } from '@/api/repository'
import LeaderboardDropdownIcon from '@/screens/leaderboard/LeaderboardDropdownIcon'
import { logger } from '@/utils/logger'

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

    http
      .post('/auth/google-login', credentialResponse)
      .then(() => {
        const bearer = 'Bearer ' + credential
        localStorage.setItem('SavedLoginToken', bearer)
        setToken(bearer)

        http.interceptors.request.use(config => {
          if (credential.length > 0) config.headers.set('Authorization', `Bearer ${credential}`)

          return config
        })
      })
      .then(() => {
        logger('adding to all contests...')
        logger('token: ', localStorage.getItem('SavedLoginToken'))
        addToAllContests()
      })
  }

  return (
    <header className="sticky top-0 z-50 flex min-h-[60px] w-full items-center justify-between bg-red px-4 text-white shadow-2xl sm:px-6 md:px-8">
      <a href="/" className="cursor-pointer select-none text-2xl">
        došašće++
      </a>

      <div className="flex gap-4 sm:gap-6">
          {/* <LeaderboardDropdownIcon /> */}
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
