import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

import loader from "../assets/my-loader.svg";
import me from "../assets/me.jpg";

import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import PageTitle from "../PageTitle";

const POSTS_QUERY = gql`
  query HomePosts {
    posts(first: 10) {
      id
      title
      slug
      date
    }
  }
`;

const Home = () => {
  PageTitle("Loisa | Home");

  const { loading, error, data } = useQuery(POSTS_QUERY);
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
          <p className="is-size-2">
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
      <div className="Home">
        {/* intro */}
        <div className="intro">
          <div className="intro-caption">
            <p className="is-size-1 has-text-theme">Hey, I'm Loisa</p>
            <br />
            <p className="is-size-4">
              I'm a software engineer in Nairobi. I love building open-source
              projects and writing about what I learn. This website is my
              digital diary—a compendium of the things I've learned and created
              over the years.
            </p>
            <br />
            <Link
              to={"/about"}
              className="has-text-grey-light custom-links is-size-4 is-underlined"
            >
              More about me <i className="bi bi-arrow-right-short"></i>
            </Link>
          </div>
          <div className="intro-image">
            <img src={me} alt="Loisa" />
          </div>
        </div>

        {/* latest articles */}
        <div className="latest-articles">
          <table>
            <thead>
              <tr>
                <th>
                  <p className="has-text-theme is-size-3">Latest articles</p>
                </th>
                <th>
                  <Link
                    to="/articles"
                    className="has-text-light custom-links is-size-5"
                  >
                    view all
                  </Link>
                </th>
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

export default Home;
