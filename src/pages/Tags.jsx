import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

import loader from "../assets/my-loader.svg";

import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import PageTitle from "../PageTitle";

const THIS_ARTICLE = gql`
  query Article($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      coverImage {
        url
      }
      content
      tags
      date
    }
  }
`;

const Tags = () => {
  const slug = useParams();

  PageTitle(`Article | ${slug.slug}`);

  const { loading, error, data } = useQuery(THIS_ARTICLE, {
    variables: { slug: slug.slug },
  });
  console.log(data);

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
        <div className="card">
          <div className="card-image">
            <figure className="image is-3by1">
              <img src={data.post.coverImage.url} alt="" />
            </figure>
          </div>
          <div className="card-content">
            <p className="is-size-2 has-text-centered">{data.post.title}</p>
            <hr className="footer-divider" />
            <div className="content is-size-5">
              <ReactMarkdown>{data.post.content}</ReactMarkdown>
            </div>
            <hr className="footer-divider" />
            <div className="outro">
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
                <Link to={"/tags"} className="tag-links has-text-light">
                  {data.post.tags[0]}
                </Link>
                <Link to={"/tags"} className="tag-links has-text-light">
                  {data.post.tags[1]}
                </Link>
                <Link to={"/tags"} className="tag-links has-text-light">
                  {data.post.tags[2]}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* app child */}
      <br />
      {/* footer */}
      <Footer />
      {/* footer */}
    </div>
  );
};

export default Tags;
