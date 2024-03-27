import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuItem from "../../../components/frontend/layout/header/MenuItem";
import TopPanel from "../../../components/frontend/layout/header/TopPanel";
import MobileMenu from "../../../components/frontend/layout/header/MobileMenu";
import ProductCategory from "../../../components/frontend/layout/header/ProductCategory";
import { productCategoryData } from "../../../data/data";
import ProductSubCategory from "../../../components/frontend/layout/header/ProductSubCategory";

const Header = () => {
  return (
    <>
      <header className="header">
        <TopPanel />
        <div className="header__wrap ">
          <div className="header__wrap--content">
            <div className="header__logo-bg">
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
            </div>
            <div className="header__nav--section">
              <nav className="nav">
                <ul className="nav__list">
                  <MenuItem title="home" slug="/" />
                  <MenuItem title="about us" slug="/" />
                  <MenuItem title="product" slug="/">
                    <ul className="sub-menu">
                      {productCategoryData.map((item, index) => (
                        <ProductCategory data={item} key={index}>
                          {item.subCategory && (
                            <ul className="sub-category">
                              {item.subCategory.map((item, index) => (
                                <ProductSubCategory data={item} key={index} />
                              ))}
                            </ul>
                          )}
                        </ProductCategory>
                      ))}
                    </ul>
                  </MenuItem>

                  <MenuItem
                    title="catalogue"
                    target="_blank"
                    slug="https://hafner.co.in/wp-content/uploads/2022/12/Hafner-catalouge-.pdf"
                  />
                  <MenuItem title="contact us" slug="/contact-us" />
                </ul>
              </nav>
              <MobileMenu />

              <Link to="#" className="product-catalouge-btn">
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
