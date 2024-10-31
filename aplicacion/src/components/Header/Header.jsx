import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <img
          id="imgLogo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Naruto_logo.svg/1200px-Naruto_logo.svg.png"
          alt="LogoSerie"
        />
      </div>

      <nav className="sidebar-nav">
        <Link to="/inicio" className="nav-item">
          <span>Inicio</span>
        </Link>
        <Link to="/favorites" className="nav-item">
          <span>Favoritos</span>
        </Link>
        <Link to="/about" className="nav-item">
          <span>About</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
