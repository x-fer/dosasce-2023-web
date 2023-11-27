import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
import Home from './screens/Home'
import About from './screens/About'
import ErrorPage from './screens/ErrorPage'
import { Header, ProblemRouter } from './components'
import React, { useState } from 'react'
import axios from 'axios'

export const TokenContext = React.createContext(null)

type VerifyTokenResponse = {
  sub: string
  hd: string
  email: string
  email_verified: string
  name: string
  picture: string
}

export const verifyToken = async (token: string) => {
  const { data: niceGoogleResponse } = await axios.get<VerifyTokenResponse>('https://oauth2.googleapis.com/tokeninfo', {
    params: { id_token: token },
  })

  if (niceGoogleResponse?.email_verified !== 'true') throw new Error('email not verified')

  return niceGoogleResponse
}

export const extractUser = async (token: string) => {
  const tokenData = await verifyToken(token).catch(() => null)

  return tokenData
}

function App() {
  const [token, setToken] = useState(localStorage.getItem('SavedLoginToken') || '')

  if (token.length !== 0) {
    console.log('NAPOKON - GOSPODIN TOKEN RADI')
  }

  console.log(extractUser(token))

  setToken(token)

  return (
    <>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_OAUTH_CLIENT_ID}>
        <Header />
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
