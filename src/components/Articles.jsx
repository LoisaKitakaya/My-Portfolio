import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import PageTitle from "../PageTitle";

const Articles = () => {
  PageTitle("Loisa | Articles");
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
