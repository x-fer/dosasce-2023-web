import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
import Home from './screens/Home'
import ErrorPage from './screens/ErrorPage'
import { Header, ProblemRouter } from './components'
import { createContext, useEffect, useState } from 'react'
import { extractUser } from './api/token'
import LeaderBoardRouter from './screens/leaderboard/LeaderBoardRouter'
import Testcase from './screens/Testcase'
import Uzrast from './screens/Uzrast'
import About from './components/Informations'
import { checkUserCategory } from './api/repository'

type UserType = {
  name: string
  email: string
  avatar: string
  hasSetCategory: boolean
  category?: string
}

type UserContextType = {
  user?: UserType
  isLoggedIn: boolean
}

export const UserContext = createContext<UserContextType>({
  isLoggedIn: false,
  user: undefined,
})

function App() {
  const [token, setToken] = useState(localStorage.getItem('SavedLoginToken') || '')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState<UserType | undefined>(undefined)

  useEffect(() => {
    const pureToken = token.replace('Bearer ', '')

    if (!isLoggedIn) {
      extractUser(pureToken).then(result => {
        if (result !== null) {
          checkUserCategory(result.email)
            .then(res => res.json())
            .then(data => {
              if (data.category) {
                setUser({
                  name: result.name,
                  email: result.email,
                  avatar: result.picture,
                  hasSetCategory: true,
                  category: data.category,
                })
              } else {
                setUser({ name: result.name, email: result.email, avatar: result.picture, hasSetCategory: false })
                if (window.location.pathname !== '/uzrast') window.location.href = '/uzrast'
              }
              setIsLoggedIn(true)
            })
        }
      })
    }
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
              <Route path="/about" element={<About />} />

              <Route path="/testcase" element={<Testcase />} />
              <Route path="/uzrast" element={<Uzrast />} />
            </Routes>
          </BrowserRouter>
        </UserContext.Provider>
      </GoogleOAuthProvider>
    </>
  )
}

export default App
