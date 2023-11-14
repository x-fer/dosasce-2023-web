import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./screens/Home";
import About from "./screens/About";
import { Footer, Header, ProblemRouter } from "./components";

function App() {
  return (
    <div className="app bg-white">
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/problem/:problem_id" element={<ProblemRouter />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
