import { Link } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

import Navbar from "../components/Navbar";

const ABOUT_ME_INTRO = gql`
  query Me {
    author(where: { id: "clavflb52bju30bulk2gtlgke" }) {
      name
      bio {
        html
      }
      image {
        url
      }
    }
  }
`;

const About = () => {
  const { loading, error, data } = useQuery(ABOUT_ME_INTRO);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const navs = [
    { title: "Home", href: "/" },
    { title: "About", href: "" },
  ].map((item, index) => (
    <Link to={item.href} key={index}>
      {item.title}
    </Link>
  ));

  return (
    <div className="pages h-screen">
      <div className="mx-16 p-4">
        {/* navbar */}
        <Navbar navs={navs} />
        {/* navbar */}

        <hr className="border-1 border-zinc-500 my-4" />

        {/* body */}

        {/* intro */}
        <div className="flex justify-between mx-4">
          <div
            className="mx-8"
            style={{
              width: "250%",
            }}
          >
            <div
              className="text-lg"
              dangerouslySetInnerHTML={{ __html: data.author.bio.html }}
            />
          </div>
          <div className="flex flex-col w-fit">
            {data.author.image.map((pic, index) => {
              const list = (
                <>
                  <img
                    key={index}
                    src={pic.url}
                    alt="thumbnail"
                    className="rounded-md shadow-md border border-zinc-200 border-1 my-2 mx-auto"
                    style={{
                      width: "80%",
                    }}
                  />
                </>
              );

              return list;
            })}
          </div>
        </div>
        {/* intro */}

        {/* body */}

        {/* footer */}
        {/* footer */}
      </div>
    </div>
  );
};

export default About;
