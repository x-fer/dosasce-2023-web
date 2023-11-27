import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
import Home from './screens/Home'
import About from './screens/About'
import ErrorPage from './screens/ErrorPage'
import { Header, ProblemRouter } from './components'
import { useEffect, useState } from 'react'
import { extractUser } from './api/token'

function App() {
  const [token, setToken] = useState(localStorage.getItem('SavedLoginToken') || '')

  useEffect(() => {
    const pureToken = token.replace('Bearer ', '')
    const tokenData = extractUser(pureToken)

    console.log('Tokendata', tokenData)
  }, [token])

  return (
    <>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_OAUTH_CLIENT_ID}>
        <Header setToken={setToken} />
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<ErrorPage />} />
            <Route path="/" element={<Home />} />
            <Route path="/problem/:problem_id" element={<ProblemRouter />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </GoogleOAuthProvider>{' '}
    </>
  )
}

export default App
