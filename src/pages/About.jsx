import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

import loader from "../assets/my-loader.svg";

import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import PageTitle from "../PageTitle";

const ABOUT_AUTHOR = gql`
  query Author {
    authors {
      id
      name
      intro
      bio
      picture {
        url
      }
    }
  }
`;

const About = () => {
  PageTitle("Loisa | About");

  // const { loading, error, data } = useQuery(ABOUT_AUTHOR);
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
    <div>
      {/* navigation */}
      <Navbar />
      {/* navigation */}

      {/* app child */}
      <div className="About">
        <h1>About page</h1>
      </div>
      {/* app child */}

      {/* footer */}
      <Footer />
      {/* footer */}
    </div>
  );
};

export default About;
