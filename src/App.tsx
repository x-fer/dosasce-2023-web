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
  categoryData?: Record<string, string> // Data for *ALL* users
}

export const UserContext = createContext<UserContextType>({
  isLoggedIn: false,
  user: undefined,
  categoryData: undefined,
})

function App() {
  const [token, setToken] = useState(localStorage.getItem('SavedLoginToken') || '')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState<UserType | undefined>(undefined)
  const [categoryData, setCategoryData] = useState<Record<string, string> | undefined>(undefined)

  useEffect(() => {
    console.log('calling category data useeffect')
    if (!categoryData) {
      checkUserCategories(['none'])
        .then(res => res.json())
        .then(userCategoryData => {
          setCategoryData(userCategoryData)
          console.log(userCategoryData)
        })
    }
  }, [categoryData])

  useEffect(() => {
    console.log("calling user's data useeffect")
    const pureToken = token.replace('Bearer ', '')

    if (!isLoggedIn) {
      extractUser(pureToken).then(result => {
        if (result !== null) {
          const userCategory = categoryData?.[result.email]

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
    }
  }, [token, categoryData])

  return (
    <>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_OAUTH_CLIENT_ID}>
        <UserContext.Provider value={{ user: user, isLoggedIn: isLoggedIn, categoryData: categoryData }}>
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
