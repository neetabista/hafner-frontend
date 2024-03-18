import React from "react";
import { Link } from "react-router-dom";
import MenuItem from "../../../components/frontend/layout/header/MenuItem";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header__top">
          <div className="header__socials">
            <Link to="#" className="icon">
              <i className="ri-facebook-fill"></i>
            </Link>
            <Link to="#" className="icon">
              <i className="ri-whatsapp-line"></i>
            </Link>
          </div>
          <button className="search-btn" type="button">
            <i className="ri-search-line"></i>
          </button>
        </div>
        <div className="header__wrap ">
          <div className="header__wrap--content">
            {/* <div className="header__logo--bg"> */}
            <div className="header__logo">
              <Link to="/">
                <img
                  src="/images/logo.jpeg.jpg"
                  alt="logo"
                  width="100%"
                  height="100%"
                />
              </Link>
            </div>
            {/* </div> */}
            <div className="header__nav--section">
              <nav className="nav">
                <ul className="nav__list">
                  <MenuItem title="home" slug="/" />
                  <MenuItem title="product" slug="/" />
                  <MenuItem title="offer" slug="/" />
                  <MenuItem title="association" slug="/" />
                  <MenuItem title="Customer & Support Services" slug="/" />
                  <MenuItem title="privacy" slug="/" />
                  <MenuItem title="contact" slug="/" />
                </ul>
              </nav>

              <Link to="#" className="product-catalouge-btn">
                product catalogue
              </Link>
            </div>
          </div>
        </div>
      </header>
      <div className="header__logo--bg"></div>
    </>
  );
};

export default Header;
