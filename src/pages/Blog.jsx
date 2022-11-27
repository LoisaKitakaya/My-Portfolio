import { Link } from "react-router-dom";
import ArticleCategories from "../components/Blog/ArticelCategories";
import Articles from "../components/Blog/Articles";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Blog = () => {
  const navs = [
    { title: "Home", href: "/" },
    { title: "Blog", href: "" },
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
          <Articles />
          <ArticleCategories />
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

export default Blog;
