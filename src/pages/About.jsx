import { Link } from "react-router-dom";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import myInfo from "../data/about.json";
import PageTitle from "../PageTitle";

const About = () => {
  PageTitle("About");

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

  const aboutTitle = (
    <p className="flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5 text-yellow-600"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
        />
      </svg>
      <span className="ml-1">About</span>
    </p>
  );

  const navs = [
    { title: home, href: "/" },
    { title: aboutTitle, href: "" },
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
      <div className="mx-16 p-4 about-zero">
        {/* navbar */}
        <Navbar navs={navs} />
        {/* navbar */}

        <hr className="border-1 border-zinc-500 my-4" />

        {/* body */}
        <div className="flex justify-between ml-8 about-one about-text">
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
            <div className="about-resume"/>
          </div>
          <div className="flex flex-col w-fit">
            {about.images.map((pic, index) => {
              const list = (
                <>
                  <div
                    key={index}
                    className="rounded-md shadow-md border border-zinc-200 border-1 mb-4 mx-auto about-img"
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
