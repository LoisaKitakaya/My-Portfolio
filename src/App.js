import { Routes, Route } from "react-router-dom";
import About from "./pages/About";

import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div className="App">
      {/* routes */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {/* routes */}
    </div>
  );
}

export default App;
