import React, { useState } from "react";
import { Link } from "react-router-dom";

const TopPanel = () => {
  const [searchBox, setSearchBox] = useState();
  return (
    <>
      <div className="header__top">
        <div className="header__socials">
          <Link
            to="https://www.facebook.com/hafner.india"
            target="_blank"
            className="icon"
          >
            <div class="d-none">Hafner Facebook Account</div>
            <i className="bx bxl-facebook"></i>
          </Link>
          <Link
            to="https://api.whatsapp.com/send/?phone=917307542081&text&type=phone_number&app_absent=0"
            target="_blank"
            className="icon"
          >
            <div class="d-none">Hafner whatsapp Account</div>
            <i className="bx bxl-whatsapp"></i>
          </Link>
        </div>
        <a
          className="search-btn"
          type="button"
          onClick={() => setSearchBox(!searchBox)}
        >
          <i className="ri-search-line"></i>
        </a>
      </div>
      <div className={`search-box ${searchBox ? "active" : ""}`}>
        <form>
          <input type="text" placeholder=" Type to Search" />
          <button type="submit">
            <i class="bx bx-search"></i>
          </button>
        </form>

        <div className="close-btn" onClick={() => setSearchBox(!searchBox)}>
          <i className="ri-close-fill"></i>
        </div>
      </div>
    </>
  );
};

export default TopPanel;
