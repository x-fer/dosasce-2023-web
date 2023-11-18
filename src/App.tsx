import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './screens/Home'
import About from './screens/About'
import { Footer, Header, ProblemRouter } from './components'

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/problem/:problem_id" element={<ProblemRouter />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
