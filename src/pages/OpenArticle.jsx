import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
// import { ReactMarkdown } from "react-markdown/lib/react-markdown";

import loader from "../assets/my-loader.svg";

import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import PageTitle from "../PageTitle";
import Comments from "../components/Comments";

const THIS_ARTICLE = gql`
  query Article($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      coverImage {
        url
      }
      tags
      date
      content {
        html
      }
    }
  }
`;

const OpenArticle = () => {
  const slug = useParams();

  PageTitle(`${slug.slug}`);

  const { loading, error, data } = useQuery(THIS_ARTICLE, {
    variables: { slug: slug.slug },
  });
  // console.log(data);

  if (loading)
    return (
      <div className="App">
        <div className="is-loading">
          <img src={loader} alt="Loading..."></img>
          <br />
          <p className="is-size-4">Loading....</p>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="App">
        <div className="is-error">
          <p className="is-size-4">
            Something went wrong. Could not fetch data.
          </p>
        </div>
      </div>
    );

  return (
    <div>
      {/* navigation */}
      <Navbar />
      {/* navigation */}
      <br />
      {/* app child */}
      <div className="Articles">
        <div className="card article-card">
          <div className="card-image">
            <figure className="image is-2by1">
              <img src={data.post.coverImage.url} alt="" />
            </figure>
          </div>
          <div className="card-content">
            <p className="is-size-2 has-text-centered has-text-dark">
              {data.post.title}
            </p>
            <hr className="article-divider" />
            {/* <div className="content">
              <ReactMarkdown>{data.post.content.markdown}</ReactMarkdown>
            </div> */}
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: data.post.content.html }}
            />
            <hr className="footer-divider" />
            <div className="outro has-text-dark">
              <p>
                Written by{" "}
                <Link
                  to={"/about"}
                  className="has-text-theme outro-name is-underlined"
                >
                  Freedom Loisa
                </Link>{" "}
                on {data.post.date}
              </p>
              <div className="tags">
                <p>Tags:</p>
                <button className="tag-links button has-text-dark">
                  {data.post.tags[0]}
                </button>
                <button className="tag-links button has-text-dark">
                  {data.post.tags[1]}
                </button>
                <button className="tag-links button has-text-dark">
                  {data.post.tags[2]}
                </button>
              </div>
            </div>
          </div>
        </div>
        <br />
        <hr className="footer-divider" />
        <p className="is-size-3 has-text-theme has-text-centered">Comments</p>
        <hr className="footer-divider" />
        <br />
        <Comments />
      </div>
      {/* app child */}
      <br />
      {/* footer */}
      <Footer />
      {/* footer */}
    </div>
  );
};

export default OpenArticle;
