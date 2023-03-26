import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import logos from "../assets/images";
import "./Layout.scss";

const Layout = () => {
  return (
    <>
      <NavBar />
      <main className="content">
        <Outlet />
      </main>
      <footer>
        <div>
          <div className="contact-info">
            <div className="footer__logo">
              <img src={logos.logoTransparent} alt="logo" />
            </div>
            <ul className="contact-info__address">
              <li> ul.nowhre 56/97, 66-666 Everywhere City</li>
              <li>Telefon: 123 456 789</li>
              <li> kontakt@kontakt.kontakt</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
