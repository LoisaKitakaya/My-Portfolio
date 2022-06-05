import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Routes, Route } from "react-router-dom";

import "./css/App.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Home from './pages/Home';
import Articles from './pages/Articles'
import OpenArticle from './pages/OpenArticle'
import Projects from './pages/Projects'
import About from './pages/About'
import Tags from "./pages/Tags";


const client = new ApolloClient({
  uri: "https://api-eu-central-1.graphcms.com/v2/cl3tlp7kmbvt801z101bc5db3/master",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        {/* routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/article/:slug" element={<OpenArticle />} />
          <Route path="/tags/:tag" element={<Tags/>}></Route>
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
        {/* routes */}
      </div>
    </ApolloProvider>
  );
}

export default App;
