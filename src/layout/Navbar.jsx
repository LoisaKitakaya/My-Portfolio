import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="level navigation">
      <p className="level-item has-text-centered">
        <Link to="/" className="link has-text-light">
          <i className="bi bi-house nav-icon"></i> Home
        </Link>
      </p>
      <p className="level-item has-text-centered">
        <Link to="/articles" className="link has-text-light">
          <i className="bi bi-file-earmark-text nav-icon"></i> Articles
        </Link>
      </p>
      <p className="level-item has-text-centered">
        <Link to="/projects" className="link has-text-light">
          <i className="bi bi-terminal nav-icon"></i> Projects
        </Link>
      </p>
      <p className="level-item has-text-centered">
        <Link to="/about" className="link has-text-light">
          <i className="bi bi-person nav-icon"></i> About
        </Link>
      </p>
    </nav>
  );
};

export default Navbar;
