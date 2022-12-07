import { Link, useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PageTitle from "../PageTitle";
import moment from "moment/moment";
import loader from "../assets/Loading progress.gif";
import UtterancesComments from "../components/UtterancesComments";
import author from "../data/about.json";

const GET_PROJECT = gql`
  query Project($slug: String!) {
    projectBlog(where: { slug: $slug }) {
      title
      thumbnail {
        url
      }
      category
      labels
      article {
        html
      }
      createdAt
    }
  }
`;

const Project = () => {
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

  const { project } = useParams();

  const formatText = (project) => {
    const noHyphenText = project.replaceAll("-", " ");

    const myArray = noHyphenText.split(" ");

    const newArray = [];

    myArray.map((word) => {
      const capitalized = word.charAt(0).toUpperCase() + word.slice(1);

      return newArray.push(capitalized);
    });

    return newArray.join(" ");
  };

  PageTitle(formatText(project));

  const navs = [
    { title: home, href: "/" },
    { title: projectTitle, href: "/projects" },
    { title: formatText(project), href: "" },
  ].map((item, index) => (
    <Link to={item.href} key={index}>
      {item.title}
    </Link>
  ));

  const { loading, error, data } = useQuery(GET_PROJECT, {
    variables: { slug: project },
  });

  if (data) console.log(data);
  if (loading)
    return (
      <div className="h-full w-full">
        <div className="mx-16 p-4 project-one">
          {/* navbar */}
          <Navbar navs={navs} />
          {/* navbar */}
          <hr className="border-1 border-zinc-500 my-4" />
          <div className="my-64">
            <img src={loader} alt="loading..." className="w-fit mx-auto mb-2" />
            <p className="text-lg text-center text-blue-600">loading...</p>
          </div>
          <hr className="border-1 border-zinc-500 my-4" />
          {/* footer */}
          <Footer />
          {/* footer */}
        </div>
      </div>
    );
  if (error)
    return (
      <div className="h-full w-fit mx-auto mt-36">
        <div
          className="rounded-md shadow-md border border-zinc-300 bg-white m-4 w-fit py-36 project-five"
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

  const authorImg = author.about_me;

  return (
    <div className="min-h-screen">
      <div className="mx-16 p-4 project-one">
        {/* navbar */}
        <Navbar navs={navs} />
        {/* navbar */}
        <hr className="border-1 border-zinc-500 my-4" />
        {/* body */}
        <div className="flex justify-between project-four">
          {/* article */}
          <div>
            <div
              className="rounded-md shadow-md border border-zinc-300 bg-white m-4 w-fit project-three"
              style={{
                width: "800px",
              }}
            >
              <img
                className="rounded-t-md"
                src={data.projectBlog.thumbnail.url}
                alt="thumbnail"
                style={{
                  width: "100%",
                  height: "300px",
                }}
              />
              <div className="p-4">
                <div
                  className="mb-4 text-lg project-content"
                  dangerouslySetInnerHTML={{
                    __html: data.projectBlog.article.html,
                  }}
                />
                <hr className="border border-1 mb-4" />
                <div className="flex items-center flex-wrap">
                  {data.projectBlog.labels.map((item, index) => {
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
            <UtterancesComments />
          </div>
          {/* article */}

          {/* article details */}
          <div className="mx-4">
            <div className="p-4 my-4 border border-zinc-300 shadow-md mx-auto w-80 rounded-md bg-white h-fit project-six">
              <div className="flex flex-col items-center">
                <img
                  className="rounded-full mb-2"
                  src={authorImg.images[0].image}
                  alt="'author's name"
                  style={{
                    width: "120px",
                    height: "120px",
                  }}
                />
                <p className="text-lg text-zinc-500 mb-2">About me</p>
              </div>
              <p className="text-lg text-zinc-500 mb-4">
                Hello and thanks for visiting! My name is{" "}
                <Link to="/about" className="underline text-sky-600">
                  Freedom Loisa
                </Link>
                , and this is my website and digital garden.
              </p>
              <p className="text-lg text-zinc-500">
                I'm a software developer who creates open-source projects and
                writes about code, design, and life. This site is and has always
                been free of ads, trackers, social media, affiliates, and
                sponsored posts.
              </p>
            </div>
            <div className="p-4 my-4 border border-zinc-300 shadow-md mx-auto w-80 rounded-md bg-white h-fit project-six">
              <p className="text-lg text-zinc-500 mb-2">
                Published on: <br />
                <span className="text-black">
                  {moment(data.projectBlog.createdAt).format("ll")}
                </span>
              </p>
              <p className="text-lg text-zinc-500 mb-4">
                Category:{" "}
                <Link
                  to={`/projects/categories/${data.projectBlog.category}`}
                  className="mr-1 px-2 bg-slate-200 rounded-md hover:shadow-md border"
                  onClick={() => {
                    const element = document.getElementById("root");

                    element.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  {data.projectBlog.category}
                </Link>
              </p>
              <hr className="mt-2 mb-4 border border-zinc-300" />
              <div className="flex items-center flex-wrap">
                {data.projectBlog.labels.map((item, index) => {
                  const list = (
                    <>
                      <span
                        key={index}
                        className="mr-1 px-2 bg-sky-300 rounded-md shadow-md border"
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
          {/* article details */}
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

export default Project;
