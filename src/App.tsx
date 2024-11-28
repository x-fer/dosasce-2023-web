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
import { checkUserCategories } from './api/repository'
import { logger } from './utils/logger'

export type UserType = {
  name: string
  email: string
  avatar: string
  hasSetCategory: boolean
  category?: string
}

type UserContextType = {
  user?: UserType
  isLoggedIn: boolean
  categoryData?: Record<string, string> // Data for *ALL* users

  setUser?: (user: UserType) => void
  setIsLoggedIn: (isLoggedIn: boolean) => void
  setCategoryData?: (categoryData: Record<string, string>) => void
}

export const UserContext = createContext<UserContextType>({
  user: undefined,
  isLoggedIn: false,
  categoryData: undefined,

  setUser: () => {},
  setIsLoggedIn: () => {},
  setCategoryData: () => {},
})

function App() {
  const [token, setToken] = useState(localStorage.getItem('SavedLoginToken') || '')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState<UserType | undefined>(undefined)
  const [categoryData, setCategoryData] = useState<Record<string, string> | undefined>(undefined)

  useEffect(() => {
    logger('token: ', token)
  }, [token])

  useEffect(() => {
    logger('user: ', user)

    if (!categoryData?.[user?.email || '']) {
      checkUserCategories(['none'])
        .then(res => res.json())
        .then(userCategoryData => {
          logger('checkUserCategories response: ', userCategoryData)
          setCategoryData(userCategoryData)
        })
    }
  }, [user])

  useEffect(() => {
    const pureToken = token.replace('Bearer ', '')

    if (!isLoggedIn) {
      checkUserCategories(['none'])
        .then(res => res.json())
        .then(userCategoryData => {
          logger('checkUserCategories response: ', userCategoryData)
          setCategoryData(userCategoryData)

          extractUser(pureToken)
            .then(result => {
              if (result !== null) {
                const userCategory = userCategoryData[result.email]

                if (userCategory) {
                  setUser({
                    name: result.name,
                    email: result.email,
                    avatar: result.picture,
                    hasSetCategory: true,
                    category: userCategory,
                  })
                } else {
                  setUser({ name: result.name, email: result.email, avatar: result.picture, hasSetCategory: false })
                  if (window.location.pathname !== '/uzrast') window.location.href = '/uzrast'
                }
                setIsLoggedIn(true)
              }
            })
            .catch(() => {})
        })
        .catch(() => {})
    }
  }, [token])

  return (
    <>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_OAUTH_CLIENT_ID}>
        <UserContext.Provider value={{ user, isLoggedIn, categoryData, setUser, setIsLoggedIn, setCategoryData }}>
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
