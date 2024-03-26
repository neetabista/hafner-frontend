import React from "react";
import { useState, useEffect } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import MenuItem from "../MenuItem";

const MobileMenu = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="side-menu-btn" onClick={handleShow}>
        <i className="ri-menu-line"></i>
      </div>
      <Offcanvas show={show} onHide={handleClose} backdrop="static">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <img
              src="/images/logo.jpeg.jpg"
              alt="logo"
              height="100%"
              width="100%"
            />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <nav className="nav">
            <ul className="nav__list nav__mobile">
              <MenuItem title="home" slug="/" />
              <MenuItem title="product" slug="/" />
              <MenuItem title="offer" slug="/" />
              <MenuItem title="association" slug="/" />
              <MenuItem title="Customer & Support Services" slug="/" />
              <MenuItem title="privacy" slug="/" />
              <MenuItem title="contact" slug="/" />
            </ul>
          </nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default MobileMenu;
