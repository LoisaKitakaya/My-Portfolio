const Footer = () => {
  return (
    <div className="mx-4 text-center">
      <p className="italic footer-font">
        <i className="bi bi-code text-red-700"></i> Made using{" "}
        <a
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="underline text-blue-900 font-semibold">React</span>
        </a>{" "}
        {"&"} deployed on{" "}
        <a
          href="https://www.netlify.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="underline text-blue-900 font-semibold">Netlify</span>
          .
        </a>{" "}
        <i className="bi bi-code-slash text-red-700"></i>
      </p>
    </div>
  );
};

export default Footer;
