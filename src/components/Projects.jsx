import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

import loader from "../assets/my-loader.svg";

import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import PageTitle from "../PageTitle";

const ALL_PROJECTS = gql`
  query Projects {
    projects {
      id
      name
      slug
      description
      tags
      image {
        url
      }
      demo
      sourceCode
    }
  }
`;

const Projects = () => {
  PageTitle("Loisa | Projects");

  // const { loading, error, data } = useQuery(ALL_PROJECTS);
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
    <div className="Projects">
      {/* navigation */}
      <Navbar />
      {/* navigation */}

      {/* app child */}
      <div className="Projects-child">
        <h1>Projects page</h1>
      </div>
      {/* app child */}

      {/* footer */}
      <Footer />
      {/* footer */}
    </div>
  );
};

export default Projects;
