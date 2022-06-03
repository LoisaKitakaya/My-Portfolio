import { Link } from "react-router-dom";

import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import PageTitle from "../PageTitle";

const Home = ({ data }) => {
  PageTitle("Loisa | Home");
  return (
    <div className="Home">
      {/* navigation */}
      <Navbar />
      {/* navigation */}

      {/* app child */}
      <div className="Home-child">
        <div className="home-page">
          {data.map((author, index) => {
            const authorItem = (
              <div key={index} className="author-intro">
                <>
                  <div className="author-caption">
                    <p className="is-size-2">Hey there, I'm Loisa</p>
                    <br />
                    <p className="is-size-5">{author.bio}</p>
                  </div>
                  <div className="author-image">
                    <img src={author.picture.url} alt={author.name} />
                  </div>
                </>
              </div>
            );

            return authorItem;
          })}

          <nav className="level latest-articles">
            <div className="level-left">
              <p className="level-item is-size-3">Latest articles</p>
            </div>
            <div className="level-right">
              <Link to="/articles" className="is-size-5 hyper-links">
                view all
              </Link>
            </div>
          </nav>
          {data.map((author, index) => {
            const latestArticles = (
              <div key={index}>
                {author.post.map((post, id) => {
                  const latest = (
                    <div className="level latest" key={id}>
                      <>
                        <div className="level-left">
                          <Link
                            to={`/articles/${post.slug}`}
                            className="level-item is-size-5"
                          >
                            {post.title}
                          </Link>
                        </div>
                        <div className="level-right">
                          <p className="level-item">{post.date}</p>
                        </div>
                      </>
                    </div>
                  );

                  return latest;
                })}
              </div>
            );

            return latestArticles;
          })}
        </div>
      </div>
      {/* app child */}

      {/* footer */}
      <Footer />
      {/* footer */}
    </div>
  );
};

export default Home;
