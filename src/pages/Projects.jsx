import { Link } from "react-router-dom";

import ProjectList from "../components/Projects/ProjectList";
import ProjectCategories from "../components/Projects/ProjectCategories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PageTitle from "../PageTitle";

const Projects = () => {
  PageTitle("Projects");

  const home = (
    <p className="flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5 rounded-sm bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
      <span className="ml-1">Home</span>
    </p>
  );

  const projectTitle = (
    <p className="flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5 mx-1 text-emerald-600"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
        />
      </svg>

      <span className="ml-1">Projects</span>
    </p>
  );

  const navs = [
    { title: home, href: "/" },
    { title: projectTitle, href: "" },
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
        <div className="flex justify-between">
          <ProjectList />
          <ProjectCategories />
        </div>
        {/* body */}
        <hr className="border-1 border-zinc-500 my-4" />
        {/* footer */}
        <Footer />
        {/* footer */}
      </div>
    </div>
  );
};

export default Projects;
