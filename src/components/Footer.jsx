const Footer = () => {
  return (
    <div className="mx-4 text-center">
      <p>
        Made using{" "}
        <a
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/null/external-react-a-javascript-library-for-building-user-interfaces-logo-shadow-tal-revivo.png"
            alt="react"
            style={{
              display: "inline-flex",
              width: "1.5rem",
            }}
          />
          <span className="ml-1">React</span>
        </a>{" "}
        deployed on{" "}
        <a
          href="https://www.netlify.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/null/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png"
            alt="netlify"
            style={{
              display: "inline-flex",
              width: "1.5rem",
            }}
          />
          <span className="ml-1">Netlify</span>
        </a>
      </p>
    </div>
  );
};

export default Footer;
