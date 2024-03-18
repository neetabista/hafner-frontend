import React from "react";
import { Link } from "react-router-dom";

const MenuItem = ({ title, slug }) => {
  return (
    <>
      <li className="nav__item">
        <Link to={slug}>{title}</Link>
      </li>
    </>
  );
};

export default MenuItem;
