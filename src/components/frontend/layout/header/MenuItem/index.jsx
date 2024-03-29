import React from "react";
import { Link } from "react-router-dom";
import DropdownIcon from "../../../../../icons/DropdownIcon";

const MenuItem = ({ title, slug, children, target }) => {
  return (
    <>
      <li className="nav__item">
        <Link to={slug} target={target}>
          {title}
          {children && <DropdownIcon />}
        </Link>
        {children && children}
      </li>
    </>
  );
};

export default MenuItem;
