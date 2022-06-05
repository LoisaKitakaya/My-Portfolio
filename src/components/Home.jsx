import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

import loader from "../assets/my-loader.svg";

import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import PageTitle from "../PageTitle";

const POSTS_QUERY = gql`
  query HomePosts {
    posts(first: 5) {
      id
      title
      slug
      date
    }
  }
`;

const Home = () => {
  PageTitle("Loisa | Home");

  // const { loading, error, data } = useQuery(POSTS_QUERY);
  // console.log(data);

  // if (loading)
  //   return (
  //     <div className="App">
  //       <div className="is-loading">
  //         <img src={loader} alt="Loading..."></img>
  //         <br />
  //         <p className="is-size-4">Loading....</p>
  //       </div>
  //     </div>
  //   );

  // if (error)
  //   return (
  //     <div className="App">
  //       <div className="is-error">
  //         <p className="is-size-4">
  //           Something went wrong. Could not fetch data.
  //         </p>
  //       </div>
  //     </div>
  //   );

  return (
    <div className="Home">
      {/* navigation */}
      <Navbar />
      {/* navigation */}

      {/* app child */}
      <div className="Home-child">
        <h1>Home page</h1>
      </div>
      {/* app child */}

      {/* footer */}
      <Footer />
      {/* footer */}
    </div>
  );
};

export default Home;
