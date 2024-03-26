import React from "react";
import { Link } from "react-router-dom";
import DroprightIcon from "../../../../../icons/DroprightIcon";

const ProductCategory = ({ data, children }) => {
  return (
    <>
      <li className="sub-menu__item">
        <Link to="#">
          {data.category}
          {children && <DroprightIcon />}
        </Link>
        {children && children}
      </li>
    </>
  );
};

export default ProductCategory;
