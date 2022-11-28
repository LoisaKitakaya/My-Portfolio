import { Link } from "react-router-dom";

import data from "../../data/coding_blog.json";

const ArticleCategories = () => {
  const categories = data.categories;
  return (
    <div>
      <h2 className="text-4xl text-zinc-500 text-center mt-4 mb-8">
        Categories
      </h2>
      <ul className="px-4 mx-auto w-80 text-center">
        {categories.map((category, index) => {
          const list = (
            <>
              <Link
                to={`categories/${category.name}`}
                key={index}
                className="text-xl"
              >
                <li className="rounded-md bg-slate-300 hover:bg-slate-400 duration-200 ease-linear my-4 py-4 shadow-md">
                  {category.name}
                </li>
              </Link>
            </>
          );

          return list;
        })}
      </ul>
    </div>
  );
};

export default ArticleCategories;
