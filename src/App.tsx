import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
import Home from './screens/Home'
import About from './screens/About'
import { Footer, Header, ProblemRouter } from './components'

function App() {
  return (
    <>
      <GoogleOAuthProvider clientId="891036883092-1ae2qsf49k29scimr8m3rekaf74ndbfj.apps.googleusercontent.com">
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/problem/:problem_id" element={<ProblemRouter />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </GoogleOAuthProvider>
    </>
  )
}

export default App
