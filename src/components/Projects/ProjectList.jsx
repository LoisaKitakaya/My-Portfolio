import { Link } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import { Pagination } from "@mantine/core";

import loader from "../../assets/Loading progress.gif";

const GET_PROJECTS = gql`
  query MyProjects {
    projectBlogs(orderBy: publishedAt_DESC) {
      title
      slug
      thumbnail {
        url
      }
      category
      labels
      intro
      createdAt
    }
  }
`;

const ProjectList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (data) console.log(data);
  if (loading)
    return (
      <div className="h-full w-full">
        <h1 className="text-center text-4xl text-zinc-500 py-4">Projects</h1>
        <div className="my-48">
          <img src={loader} alt="loading..." className="w-fit mx-auto mb-2" />
          <p className="text-lg text-center text-blue-600">loading...</p>
        </div>
      </div>
    );
  if (error)
    return (
      <div className="h-full w-full">
        <h1 className="text-center text-4xl text-zinc-500 py-4">Projects</h1>
        <div
          className="rounded-md shadow-md border border-zinc-300 bg-white m-4 w-fit py-36"
          style={{
            width: "800px",
          }}
        >
          <p className="text-4xl mb-4 text-center">
            Oops! Something went wrong.
          </p>
          <p className="text-center text-zinc-600">{error.message}</p>
        </div>
      </div>
    );

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.projectBlogs.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-center text-4xl text-zinc-500 py-4" id="blog-top project-two">
          My Projects
        </h1>
        {currentPosts.map((project, index) => {
          const list = (
            <>
              <Link
                to={`/projects/${project.slug}`}
                key={index}
                onClick={() => {
                  const element = document.getElementById("root");

                  element.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                <div
                  className="rounded-md shadow-md border border-zinc-300 bg-white m-4 w-fit project-three"
                  style={{
                    width: "800px",
                  }}
                >
                  {project.thumbnail !== null ? (
                    <img
                      className="rounded-t-md"
                      src={project.thumbnail.url}
                      alt="thumbnail"
                      style={{
                        width: "100%",
                        height: "300px",
                      }}
                    />
                  ) : (
                    <></>
                  )}
                  <div className="p-4">
                    <div className=" mb-4 cool-font flex items-center justify-between">
                      <p className="text-2xl font-semibold">{project.title}</p>
                      <p className="text-lg text-zinc-500">
                        Category:{" "}
                        <span className="mr-2 px-2 bg-slate-200 rounded-lg shadow-md border">
                          {project.category}
                        </span>
                      </p>
                    </div>
                    <p className="mb-4 text-lg">{project.intro}</p>
                    <hr className="my-4 border border-zinc-300" />
                    <div className="flex items-center">
                      {project.labels.map((item, index) => {
                        const list = (
                          <>
                            <span
                              key={index}
                              className="mr-2 px-2 bg-sky-300 rounded-lg
                                shadow-md border"
                            >
                              {item}
                            </span>
                          </>
                        );

                        return list;
                      })}
                    </div>
                  </div>
                </div>
              </Link>
            </>
          );

          return list;
        })}
      </div>
      <Pagination
        total={Math.ceil(data.projectBlogs.length / postsPerPage)}
        page={currentPage}
        withControls={false}
        onChange={setCurrentPage}
        onClick={() => {
          const element = document.getElementById("blog-top");

          element.scrollIntoView({
            behavior: "smooth",
          });
        }}
        className="mx-16 mb-4"
      />
    </div>
  );
};

export default ProjectList;
