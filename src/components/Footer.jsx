const Footer = () => {
  return (
    <div className="mx-4 text-center">
      <p className="italic font-semibold">
        Made with <i className="bi bi-heart-fill text-red-600"></i> using{" "}
        <a
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="underline text-blue-600">React</span>
        </a>{" "}
        {"&"} deployed on{" "}
        <a
          href="https://www.netlify.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="underline text-blue-600">Netlify</span>.
        </a>
      </p>
    </div>
  );
};

export default Footer;
