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

  // const { loading, error, data } = useQuery(ALL_POSTS);
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
    <div className="Articles">
      {/* navigation */}
      <Navbar />
      {/* navigation */}

      {/* app child */}
      <div className="Articles-child">
        <h1>Articles page</h1>
      </div>
      {/* app child */}

      {/* footer */}
      <Footer />
      {/* footer */}
    </div>
  );
};

export default Articles;
