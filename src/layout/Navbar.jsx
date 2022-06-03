import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item has-text-light">
            <i className="bi bi-house nav-icon"></i> Freedom Loisa
          </Link>
        </div>

        <div className="navbar-menu-links">
          <Link to="/articles" className="navbar-item has-text-light">
            <i className="bi bi-file-earmark-text nav-icon"></i> Articles
          </Link>
          <Link to="/projects" className="navbar-item has-text-light">
            <i className="bi bi-terminal nav-icon"></i> Projects
          </Link>
          <Link to="/about" className="navbar-item has-text-light">
            <i className="bi bi-person nav-icon"></i> About
          </Link>
        </div>

        <div className="navbar-menu-links">
          <a
            href="https://github.com/LoisaKitakaya"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-item has-text-light"
          >
            <i className="bi bi-github is-size-5"></i>
          </a>
          <a
            href="https://twitter.com/FreedomLoisa"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-item has-text-info"
          >
            <i className="bi bi-twitter is-size-5"></i>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
