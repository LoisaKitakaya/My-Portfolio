import { Link, useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PageTitle from "../PageTitle";
import moment from "moment/moment";
import loader from "../assets/Loading progress.gif";
import UtterancesComments from "../components/UtterancesComments";

const GET_ARTICLE = gql`
  query Article($slug: String!) {
    codingBlog(where: { slug: $slug }) {
      title
      thumbnail {
        url
      }
      category
      article {
        html
      }
      createdAt
      author {
        name
        image {
          url
        }
      }
    }
  }
`;

const Article = () => {
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

  const blogTitle = (
    <p className="flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5 text-blue-600"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
        />
      </svg>

      <span className="ml-1">Blog</span>
    </p>
  );

  const { slug } = useParams();

  const formatText = (slug) => {
    const noHyphenText = slug.replaceAll("-", " ");

    const myArray = noHyphenText.split(" ");

    const newArray = [];

    myArray.map((word) => {
      const capitalized = word.charAt(0).toUpperCase() + word.slice(1);

      return newArray.push(capitalized);
    });

    return newArray.join(" ");
  };

  PageTitle(formatText(slug));

  const navs = [
    { title: home, href: "/" },
    { title: blogTitle, href: "/blog" },
    { title: formatText(slug), href: "" },
  ].map((item, index) => (
    <Link to={item.href} key={index}>
      {item.title}
    </Link>
  ));

  const { loading, error, data } = useQuery(GET_ARTICLE, {
    variables: { slug: slug },
  });

  if (data) console.log(data);
  if (loading)
    return (
      <div className="h-full w-full">
        <div className="mx-16 p-4 blog-one">
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
          className="rounded-md shadow-md border border-zinc-300 bg-white m-4 w-fit py-36 blog-five"
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

  return (
    <div className="min-h-screen">
      <div className="mx-16 p-4 blog-one">
        {/* navbar */}
        <Navbar navs={navs} />
        {/* navbar */}
        <hr className="border-1 border-zinc-500 my-4" />
        {/* body */}
        <div className="flex justify-between blog-four">
          {/* article */}
          <div>
            <div
              className="rounded-md shadow-md border border-zinc-300 bg-white m-4 w-fit blog-three"
              style={{
                width: "800px",
              }}
            >
              <img
                className="rounded-t-md"
                src={data.codingBlog.thumbnail.url}
                alt="thumbnail"
                style={{
                  width: "100%",
                  height: "300px",
                }}
              />
              <div className="p-4">
                <div
                  className="mb-4 text-lg"
                  dangerouslySetInnerHTML={{
                    __html: data.codingBlog.article.html,
                  }}
                />
                <hr className="border border-1 mb-4" />
                <div className="flex items-center">
                  <img
                    className="rounded-full"
                    src={data.codingBlog.author.image.url}
                    alt="'author's name"
                    style={{
                      width: "60px",
                      height: "60px",
                    }}
                  />
                  <div className="ml-4">
                    <p className="font-semibold cool-font">
                      {data.codingBlog.author.name}
                    </p>
                    <p className="text-zinc-500">
                      {`${moment(data.codingBlog.createdAt).format(
                        "ll"
                      )} ⚯ ${moment(data.codingBlog.createdAt).fromNow()}`}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <UtterancesComments />
          </div>
          {/* article */}

          {/* article details */}
          <div className="mx-4">
            <div className="p-4 my-4 border border-zinc-300 shadow-md mx-auto w-80 rounded-md bg-white h-fit">
              <div className="flex flex-col items-center">
                <img
                  className="rounded-full mb-2"
                  src={data.codingBlog.author.image.url}
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
            <div className="p-4 my-4 border border-zinc-300 shadow-md mx-auto w-80 rounded-md bg-white h-fit">
              <p className="text-lg text-zinc-500 mb-2">
                Published on: <br />
                <span className="text-black">
                  {moment(data.codingBlog.createdAt).format("ll")}
                </span>
              </p>
              <p className="text-lg text-zinc-500 mb-2">
                Category: <br />
                {data.codingBlog.category.map((item, index) => {
                  const list = (
                    <>
                      <Link
                        to={`/blog/categories/${item}`}
                        key={index}
                        className="mr-1 px-2 bg-slate-200 rounded-md hover:shadow-md border"
                        onClick={() => {
                          const element = document.getElementById("root");

                          element.scrollIntoView({
                            behavior: "smooth",
                          });
                        }}
                      >
                        {item}
                      </Link>
                    </>
                  );

                  return list;
                })}
              </p>
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

export default Article;
