import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

import loader from "../assets/my-loader.svg";

import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import PageTitle from "../PageTitle";

const THIS_ARTICLE = gql`
  query Article($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      content
      tags
      date
      authors {
        id
        name
      }
    }
  }
`;

const OpenArticle = () => {
  const slug = useParams();

  PageTitle(`Article | ${slug.slug}`);

  // const { loading, error, data } = useQuery(THIS_ARTICLE, {
  //   variables: { slug: slug.slug },
  // });
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
      <br />
      {/* app child */}
      <div className="Articles">
        <h1>Articles page | Slug: {slug.slug}.</h1>
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
