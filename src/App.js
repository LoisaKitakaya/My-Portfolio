import "./css/App.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import Testing from "./components/Testing";

const client = new ApolloClient({
  uri: "https://api-eu-central-1.graphcms.com/v2/cl3tlp7kmbvt801z101bc5db3/master",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Testing />
      </div>
    </ApolloProvider>
  );
}

export default App;
