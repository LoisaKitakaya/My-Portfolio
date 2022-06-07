import { Link } from "react-router-dom";

import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import PageTitle from "../PageTitle";

const About = () => {
  PageTitle("Loisa | About");

  return (
    <div>
      {/* navigation */}
      <Navbar />
      {/* navigation */}
      <br />
      {/* app child */}
      <div className="About">
        {/* title */}
        <div className="page-title has-text-centered">
          <p className="is-size-1 has-text-theme">About me</p>
          <p className="is-size-5 muted">
            Software engineer, open-sourcerer, and best jungler in {""}{" "}
            <a
              href="https://www.arenaofvalor.com/"
              className="has-text-grey-light custom-links is-underlined"
            >
              Arena of Valor
            </a>{" "}
            | North Africa and Middle East server.
          </p>
        </div>

        <br />
        <br />
        <br />
        <br />

        {/* about */}
        <div className="about-container is-size-5">
          <p>
            Hey, my name is Freedom Loisa! I'm a software engineer based in
            Nairobi, Kenya. Welcome to my spot on the web for projects I've
            created, tutorials I've written, and anything else I want to show
            the world.
          </p>
          <br />
          <p>
            My only motivation for this site is to share what I've learned with
            the world and document notes for myself, and hopefully connect with
            a few people.
          </p>
          <br />
          <p>
            Check out the {""}{" "}
            <Link
              className="has-text-light custom-links is-underlined"
              to={"/projects"}
            >
              projects
            </Link>{" "}
            {""} page to see a highlight of the open-source projects I've made,
            and
            {""}{" "}
            <Link
              className="has-text-light custom-links is-underlined"
              to={"/articles"}
            >
              articles
            </Link>{" "}
            {""} to see everything I've written.
          </p>

          <hr className="footer-divider" />
          <br />

          <p className="is-size-4 has-text-theme">What I'm doing now</p>
          <p className="muted is-size-6">Updated June 5, 2022</p>
          <br />
          <ul className="about-list">
            <li>Freelancing as a web developer</li>
            <li>writing about coding stuff</li>
            <li>
              Dominating on {""}{" "}
              <a
                href="https://www.arenaofvalor.com/"
                className="has-text-light custom-links is-underlined"
              >
                Arena of Valor
              </a>{" "}
            </li>
          </ul>

          <hr className="footer-divider" />
          <br />

          <p className="is-size-4 has-text-theme">Connect</p>
          <p className="muted is-size-6">Open for employment</p>
          <p>
            You can contact me by email at kitakayaloisa@gmail.com to say hi! I
            always appreciate meeting new people.
          </p>
          <p>or:</p>
          <br />
          <ul className="about-list">
            <li>
              <a
                href="https://github.com/LoisaKitakaya"
                className="has-text-light custom-links is-underlined"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/FreedomLoisa"
                className="has-text-light custom-links is-underlined"
              >
                Twitter
              </a>
            </li>
          </ul>

          <hr className="footer-divider" />
          <br />

          <p className="is-size-4 has-text-theme">Misc</p>
          <p>Looking for a developer?</p>
          <ul className="about-list">
            <li>
              <a
                href="https://res.cloudinary.com/dit0fii18/image/upload/v1654616679/Documents/Resume_-_Freedom_Loisa_fszpma.pdf"
                className="has-text-light custom-links is-underlined"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* app child */}
      <br />
      {/* footer */}
      <Footer />
      {/* footer */}
    </div>
  );
};

export default About;
