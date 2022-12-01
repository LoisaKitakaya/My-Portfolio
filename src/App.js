import { Routes, Route } from "react-router-dom";
import Project from "./pages/Project";
import About from "./pages/About";
import Article from "./pages/Article";
import Blog from "./pages/Blog";
import Categories from "./pages/Categories";
import GitHub from "./pages/GitHub";

import LandingPage from "./pages/LandingPage";
import Projects from "./pages/Projects";
import CategoriesTwo from "./pages/CategoriesTwo";

function App() {
  return (
    <div className="App">
      {/* routes */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/stats" element={<GitHub />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<Article />} />
        <Route path="/blog/categories/:category" element={<Categories />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:project" element={<Project />} />
        <Route
          path="/projects/categories/:category"
          element={<CategoriesTwo />}
        />
      </Routes>
      {/* routes */}
    </div>
  );
}

export default App;
