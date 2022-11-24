import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const About = () => {
  const navs = [
    { title: "Home", href: "/" },
    { title: "About", href: "" },
  ].map((item, index) => (
    <Link to={item.href} key={index}>
      {item.title}
    </Link>
  ));

  return (
    <div className="pages h-screen">
      <div className="mx-16 p-4">
        {/* navbar */}
        <Navbar navs={navs} />
        {/* navbar */}

        <hr className="border-1 border-zinc-500 my-4" />

        {/* body */}
        {/* body */}

        {/* footer */}
        {/* footer */}
      </div>
    </div>
  );
};

export default About;
