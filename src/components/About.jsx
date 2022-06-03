import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import PageTitle from "../PageTitle";

const About = () => {
  PageTitle("Loisa | About");
  return (
    <div className="About">
      {/* navigation */}
      <Navbar />
      {/* navigation */}

      {/* app child */}
      <div className="About-child">
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
