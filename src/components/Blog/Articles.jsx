import { Link } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import { Pagination } from "@mantine/core";

import moment from "moment/moment";
import loader from "../../assets/Loading progress.gif";

const GET_BLOGS = gql`
  query CodingBlog {
    codingBlogs(orderBy: publishedAt_DESC) {
      title
      slug
      thumbnail {
        url
      }
      category
      intro
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

const Articles = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  const { loading, error, data } = useQuery(GET_BLOGS);

  if (data) console.log(data);
  if (loading)
    return (
      <div className="h-full w-full">
        <h1 className="text-center text-4xl text-zinc-500 py-4">
          All articles
        </h1>
        <div className="my-48">
          <img src={loader} alt="loading..." className="w-fit mx-auto mb-2" />
          <p className="text-lg text-center text-blue-600">loading...</p>
        </div>
      </div>
    );
  if (error) return `Error: ${error.message}`;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.codingBlogs.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-center text-4xl text-zinc-500 py-4" id="blog-top">
          All articles
        </h1>
        {currentPosts.map((article, index) => {
          const list = (
            <>
              <Link to={`/blog/${article.slug}`} key={index}>
                <div
                  className="rounded-md shadow-md border border-zinc-300 bg-white m-4 w-fit"
                  style={{
                    width: "800px",
                  }}
                >
                  {article.thumbnail !== null ? (
                    <img
                      className="rounded-t-md"
                      src={article.thumbnail.url}
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
                      <p className="text-2xl font-semibold">{article.title}</p>
                      <p className="text-lg text-zinc-500">
                        Category:
                        {article.category.map((item, index) => {
                          const list = (
                            <>
                              <span
                                key={index}
                                className="mx-1 px-2 bg-slate-200 rounded-md"
                              >
                                {item}
                              </span>
                            </>
                          );

                          return list;
                        })}
                      </p>
                    </div>
                    <p className="mb-4">{article.intro}</p>
                    {article.author !== null ? (
                      <div className="flex items-center">
                        <img
                          className="rounded-full"
                          src={article.author.image.url}
                          alt="'author's name"
                          style={{
                            width: "60px",
                            height: "60px",
                          }}
                        />
                        <div className="ml-4">
                          <p className="font-semibold cool-font">
                            {article.author.name}
                          </p>
                          <p className="text-zinc-500">
                            {`${moment(article.createdAt).format(
                              "ll"
                            )} ⚯ ${moment(article.createdAt).fromNow()}`}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </Link>
            </>
          );

          return list;
        })}
      </div>
      <Pagination
        total={Math.ceil(data.codingBlogs.length / postsPerPage)}
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

export default Articles;
