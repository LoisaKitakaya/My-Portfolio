import { useQuery, gql } from "@apollo/client";

import loader from "../assets/my-loader.svg";

import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import PageTitle from "../PageTitle";

const ALL_PROJECTS = gql`
  query Projects {
    projects {
      id
      name
      description
      image {
        url
      }
      demo
      sourceCode
    }
  }
`;

const Projects = () => {
  PageTitle("Loisa | Projects");

  const { loading, error, data } = useQuery(ALL_PROJECTS);
  console.log(data);

  if (loading)
    return (
      <div className="App">
        <div className="is-loading">
          <img src={loader} alt="Loading..."></img>
          <br />
          <p className="is-size-4">Loading....</p>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="App">
        <div className="is-error">
          <p className="is-size-4">
            Something went wrong. Could not fetch data.
          </p>
        </div>
      </div>
    );

  return (
    <div>
      {/* navigation */}
      <Navbar />
      {/* navigation */}
      <br />
      {/* app child */}
      <div className="Projects">
        {/* title */}
        <div className="page-title has-text-centered">
          <p className="is-size-1 has-text-theme">Projects</p>
          <p className="is-size-5 muted">
            A highlight of my projects. View them all on {""}
            <a
              href="https://github.com/LoisaKitakaya"
              className="has-text-grey is-underlined"
            >
              GitHub
            </a>
            .
          </p>
        </div>

        <br />

        {/* projects */}
        <div className="projects-container">
          {data.projects.map((project, index) => {
            const list = (
              <>
                <div class="card project-cards" key={index}>
                  <div class="card-image">
                    <figure class="image is-5by3">
                      {project.image.map((img, index) => {
                        const list = (
                          <>
                            <img key={index} src={img.url} alt="project img" />
                          </>
                        );

                        return list;
                      })}
                    </figure>
                  </div>
                  <div class="card-content project-content">
                    <p className="is-size-3 has-text-centered is-underlined">
                      {project.name}
                    </p>
                    <br />
                    <p className="has-text-centered">{project.description}</p>
                  </div>
                  <footer class="card-footer">
                    <a
                      href={project.sourceCode}
                      class="card-footer-item has-text-theme"
                    >
                      Source
                    </a>
                    <a
                      href={project.demo}
                      class="card-footer-item has-text-theme"
                    >
                      Demo
                    </a>
                  </footer>
                </div>
              </>
            );

            return list;
          })}
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

export default Projects;
