import { Octokit } from "octokit";
import { Link } from "react-router-dom";

import Footer from "../components/Footer";
import GeneralStats from "../components/GitHub/GeneralStats";
import Navbar from "../components/Navbar";

const GitHub = () => {
  const octokit = new Octokit({
    auth: process.env.TOKEN,
  });

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
        <GeneralStats octokit={octokit} />
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
