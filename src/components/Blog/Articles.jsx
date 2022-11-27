import { Link } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import moment from "moment/moment";

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
  const { loading, error, data } = useQuery(GET_BLOGS);

  if (data) console.log(data);
  if (loading) return "Loading...";
  if (error) return `Error: ${error.message}`;

  return (
    <div>
      {data.codingBlogs.map((article, index) => {
        const list = (
          <>
            <Link to={`/blog/${article.slug}`} key={index}>
              <div
                className="rounded-md shadow-md border border-zinc-300 bg-white m-4 w-fit"
                style={{
                  width: "800px"
                }}
              >
                <img
                  className="rounded-t-md"
                  src={article.thumbnail.url}
                  alt="thumbnail"
                  style={{
                    width: "100%",
                    height: "300px",
                  }}
                />
                <div className="p-4">
                  <p className="text-xl font-semibold mb-4">{article.title}</p>
                  <p className="mb-4">{article.intro}</p>
                  <div className="flex items-center">
                    <img
                      className="rounded-full"
                      src={article.author.image.url}
                      alt="author"
                      style={{
                        width: "60px",
                        height: "60px",
                      }}
                    />
                    <div className="ml-4">
                      <p className="font-semibold">{article.author.name}</p>
                      <p className="text-zinc-500">
                        {moment(article.createdAt).format("ll")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </>
        );

        return list;
      })}
    </div>
  );
};

export default Articles;
