import { Octokit } from "octokit";
import { Link } from "react-router-dom";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const GitHub = () => {
  const octokit = new Octokit({
    auth: process.env.REACT_APP_TOKEN,
  });

  console.log(octokit);

  const navs = [
    { title: "Home", href: "/" },
    { title: "Git stats", href: "" },
  ].map((item, index) => (
    <Link to={item.href} key={index}>
      {item.title}
    </Link>
  ));

  return (
    <div className="min-h-screen">
      <div className="mx-16 p-4">
        {/* navbar */}
        <Navbar navs={navs} />
        {/* navbar */}

        <hr className="border-1 border-zinc-500 my-4" />

        {/* body */}

        {/* general stats */}
        <div className="h-screen">
          <h1 className="text-2xl text-center my-52">Coming soon...</h1>
        </div>
        {/* general stats */}

        {/* body */}

        <hr className="border-1 border-zinc-500 my-4" />

        {/* footer */}
        <Footer />
        {/* footer */}
      </div>
    </div>
  );
};

export default GitHub;
