import { Link } from "react-router-dom";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import myInfo from "../data/about.json";

const About = () => {
  const navs = [
    { title: "Home", href: "/" },
    { title: "About", href: "" },
  ].map((item, index) => (
    <Link to={item.href} key={index}>
      {item.title}
    </Link>
  ));

  const about = myInfo.about_me;
  const doingNow = myInfo.what_im_doing_now;
  const facts = myInfo.random_facts;
  const stack = myInfo.stack;

  return (
    <div className="min-h-screen">
      <div className="mx-16 p-4">
        {/* navbar */}
        <Navbar navs={navs} />
        {/* navbar */}

        <hr className="border-1 border-zinc-500 my-4" />

        {/* body */}
        <div className="flex justify-between ml-8">
          <div>
            <h4 className="text-4xl mb-8">About me</h4>
            {about.bio.map((item, index) => {
              const list = (
                <>
                  <p key={index} className="text-lg mb-4">
                    {item.paragraph}
                  </p>
                </>
              );

              return list;
            })}
            <h4 className="text-4xl mt-8 mb-8">What I'm currently doing</h4>
            <p className="text-lg underline italic mb-4">
              {doingNow.updated_date}
            </p>
            <p className="text-lg mb-8">{doingNow.content}</p>
            <h4 className="text-4xl mb-8">My stacks as a developer</h4>
            <p className="text-2xl ml-2 mb-4">Programming languages</p>
            <ul className="ml-8 mb-8">
              {stack.programming_languages.map((item, index) => {
                const list = (
                  <>
                    <li
                      key={index}
                      className="text-lg mb-4"
                      style={{
                        listStyleType: "disc",
                      }}
                    >
                      <a
                        href={`${item.link}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700"
                      >
                        {item.lang}
                      </a>
                    </li>
                  </>
                );

                return list;
              })}
            </ul>
            <p className="text-2xl ml-2 mb-4">
              Frameworks (fullstack, backend, frontend)
            </p>
            <ul className="ml-8 mb-4">
              {stack.frameworks.backend.map((item, index) => {
                const list = (
                  <>
                    <li
                      key={index}
                      className="text-lg mb-4"
                      style={{
                        listStyleType: "disc",
                      }}
                    >
                      <a
                        href={`${item.link}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700"
                      >
                        {item.lang}
                      </a>
                    </li>
                  </>
                );

                return list;
              })}
            </ul>
            <ul className="ml-8 mb-4">
              {stack.frameworks.frontend.map((item, index) => {
                const list = (
                  <>
                    <li
                      key={index}
                      className="text-lg mb-4"
                      style={{
                        listStyleType: "disc",
                      }}
                    >
                      <a
                        href={`${item.link}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700"
                      >
                        {item.lang}
                      </a>
                    </li>
                  </>
                );

                return list;
              })}
            </ul>
            <p className="text-2xl ml-2 mb-4">Databases</p>
            <ul className="ml-8 mb-8">
              {stack.databases.map((item, index) => {
                const list = (
                  <>
                    <li
                      key={index}
                      className="text-lg mb-4"
                      style={{
                        listStyleType: "disc",
                      }}
                    >
                      <a
                        href={`${item.link}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700"
                      >
                        {item.db}
                      </a>
                    </li>
                  </>
                );

                return list;
              })}
            </ul>
            <h4 className="text-4xl mb-8">Random facts</h4>
            <ul className="ml-8 mb-8">
              {facts.map((item, index) => {
                const list = (
                  <>
                    <li
                      key={index}
                      className="text-lg mb-4"
                      style={{
                        listStyleType: "disc",
                      }}
                    >
                      {item.fact}
                    </li>
                  </>
                );

                return list;
              })}
            </ul>
            <h4 className="text-4xl mb-4">Miscellaneous</h4>
            <a
              href="https://res.cloudinary.com/dit0fii18/image/upload/v1664124091/documents/Resume_-_Freedom_Loisa_w3xg3a.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 text-lg"
            >
              Resume
            </a>
          </div>
          <div className="flex flex-col w-fit">
            {about.images.map((pic, index) => {
              const list = (
                <>
                  <div
                    key={index}
                    className="rounded-md shadow-md border border-zinc-200 border-1 mb-4 mx-auto"
                    style={{
                      width: "80%",
                    }}
                  >
                    <img
                      src={pic.image}
                      alt="thumbnail"
                      className="rounded-t-md"
                    />
                    <p className="p-4 bg-white rounded-b-md">
                      {pic.description}
                    </p>
                  </div>
                </>
              );

              return list;
            })}
          </div>
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

export default About;
