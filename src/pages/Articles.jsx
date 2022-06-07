import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

import loader from "../assets/my-loader.svg";

import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import PageTitle from "../PageTitle";

const ALL_POSTS = gql`
  query AllPosts {
    posts {
      id
      title
      slug
      date
    }
  }
`;

const Articles = () => {
  PageTitle("Loisa | Articles");

  const { loading, error, data } = useQuery(ALL_POSTS);
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
        {/* title */}
        <div className="page-title has-text-centered">
          <p className="is-size-1 has-text-theme">Articles</p>
          <p className="is-size-5 muted">
            Tutorials, technical articles, snippets, reference materials,
            development-related resources as well as other non-programming
            topics I've written about.
          </p>
        </div>

        <br />
        {/* all articles */}
        <div className="all-articles">
          <table>
            <thead>
              <tr>
                <th>
                  <p className="has-text-theme is-size-3">Have a read</p>
                </th>
                <th></th>
              </tr>
            </thead>
            <br />
            <tbody>
              {data.posts.map((article) => {
                const list = (
                  <>
                    <Link
                      to={`/article/${article.slug}`}
                      key={article.id}
                      className="has-text-light"
                    >
                      <tr>
                        <td>
                          <p className="is-size-5">{article.title}</p>
                        </td>
                        <td>
                          <p>{article.date}</p>
                        </td>
                      </tr>
                    </Link>
                  </>
                );

                return list;
              })}
            </tbody>
          </table>
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

export default Articles;
