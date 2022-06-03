import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

import loader from "../assets/my-loader.svg";

import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import PageTitle from "../PageTitle";

const OpenArticle = () => {
  PageTitle("Loisa | Article"); 
    
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const [article, setArticle] = useState([]);

  const slug = useParams();

  const fetchArticle = async () => {
    setLoading(true);

    

    setLoading(false);
  };

  useEffect(() => {
    fetchArticle();
  });

  if (loading) {
    return (
      <div className="App">
        <div className="is-loading">
          <img src={loader} alt="Loading..."></img>
          <br />
          <p className="is-size-4">Loading....</p>
        </div>
      </div>
    );
  }

  if (error || !Array.isArray(article)) {
    return (
      <div className="App">
        <div className="is-error">
          <p className="is-size-4">
            Something went wrong. Could not fetch data.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="Articles">
      {/* navigation */}
      <Navbar />
      {/* navigation */}

      {/* app child */}
      <div className="Articles-child">
        <h1>Articles page | Slug: {slug.slug}.</h1>
      </div>
      {/* app child */}

      {/* footer */}
      <Footer />
      {/* footer */}
    </div>
  );
};

export default OpenArticle;
