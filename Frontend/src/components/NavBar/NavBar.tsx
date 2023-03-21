import { Link } from "react-router-dom";
import logos from "../../assets/images";

import "./NavBar.scss";

const NavBar = () => {
  return (
    <nav className="nav">
      <div className="nav__logo">
        <img src={logos.logoTransparent} alt="logo" className="logo" />
      </div>
      <div className="nav__links">
        <ul className="nav__list">
          <li className="nav__link">
            <Link to="/">Start</Link>
          </li>
          <li className="nav__link">
            <Link to="/menu">Menu</Link>
          </li>
          <li className="nav__link">
            <Link to="/contact">Kontakt</Link>
          </li>
          <li className="nav__link">
            <Link to="/about">O nas</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
