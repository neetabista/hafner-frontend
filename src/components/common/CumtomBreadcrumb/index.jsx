import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const CustomBreadcrumb = ({ title, subtitle }) => {
  return (
    <>
      <div
        className="custom-breadcrumb "
        style={{ backgroundImage: `url("/images/kitchen.jpg")` }}
      >
        <div className="bg-overlay"></div>
        <div className="pattern-layer"></div>
        <Container>
          <div className="bd-content">
            <div className="bd-title">
              <h1>{title}</h1>
            </div>
            <div className="bd-links">
              <ul>
                <li className="cb-normal">
                  <Link to="/">Home</Link>
                </li>
                {/* {children && children} */}
                <li className="cb-current">{subtitle}</li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default CustomBreadcrumb;
