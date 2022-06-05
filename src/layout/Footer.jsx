const Footer = () => {
  return (
    <footer className="footer">
      <div className="content">
        <hr className="footer-divider" />
        <div className="part-1">
          <p className="social">
            Made with <i className="bi bi-hearts has-text-danger-dark"></i> by
            Freedom Loisa
          </p>
          <a
            href="https://github.com/LoisaKitakaya"
            className="has-text-light social"
          >
            <i className="bi bi-github nav-icon has-text-grey"></i> GitHub
          </a>
          <a
            href="https://twitter.com/FreedomLoisa"
            className="has-text-light social"
          >
            <i className="bi bi-twitter nav-icon has-text-info"></i> Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
