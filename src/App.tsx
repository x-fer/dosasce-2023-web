import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
import Home from './screens/Home'
import About from './screens/About'
import ErrorPage from './screens/ErrorPage'
import { Header, ProblemRouter } from './components'

function App() {
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
