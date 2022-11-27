import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Blog from "./pages/Blog";
import GitHub from "./pages/GitHub";

import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div className="App">
      {/* routes */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/stats" element={<GitHub />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      {/* routes */}
    </div>
  );
}

export default App;
