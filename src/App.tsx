import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
import Home from './screens/Home'
import ErrorPage from './screens/ErrorPage'
import { Header, ProblemRouter } from './components'
import { createContext, useEffect, useState } from 'react'
import { extractUser } from './api/token'
import LeaderBoardRouter from './screens/leaderboard/LeaderBoardRouter'
import Uzrast from './screens/Uzrast'

type UserType = {
  name: string
  email: string
  avatar: string
}

type UserContextType = {
  user?: UserType
  isLoggedIn: boolean
}

export const UserContext = createContext<UserContextType>({ isLoggedIn: false })

function App() {
  const [token, setToken] = useState(localStorage.getItem('SavedLoginToken') || '')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState<UserType | undefined>(undefined)

  useEffect(() => {
    const pureToken = token.replace('Bearer ', '')

    extractUser(pureToken).then(result => {
      if (result !== null) {
        setUser({ name: result.name, email: result.email, avatar: result.picture })
        setIsLoggedIn(true)
      }
    })
  }, [token])

  return (
    <>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_OAUTH_CLIENT_ID}>
        <UserContext.Provider value={{ user: user, isLoggedIn: isLoggedIn }}>
          <BrowserRouter>
            <Header setToken={setToken} setIsLoggedIn={setIsLoggedIn} />
            <Routes>
              <Route path="*" element={<ErrorPage />} />
              <Route path="/" element={<Home />} />
              <Route path="/problem/:problem_id" element={<ProblemRouter />} />
              <Route path="/leaderboard/:leaderboard_id" element={<LeaderBoardRouter />} />
              <Route path="/uzrast" element={<Uzrast />} />
            </Routes>
          </BrowserRouter>
        </UserContext.Provider>
      </GoogleOAuthProvider>
    </>
  )
}

export default App
