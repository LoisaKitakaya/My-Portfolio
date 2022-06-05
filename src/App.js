import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Routes, Route } from "react-router-dom";

import "./css/App.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Home from './components/Home';
import Articles from './components/Articles'
import OpenArticle from './components/OpenArticle'
import Projects from './components/Projects'
import About from './components/About'


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
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
        {/* routes */}
      </div>
    </ApolloProvider>
  );
}

export default App;
