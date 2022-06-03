import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import PageTitle from "../PageTitle";

const Projects = () => {
  PageTitle("Loisa | Projects");
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
