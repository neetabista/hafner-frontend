import React from "react";
import { Link } from "react-router-dom";

const ProductSubCategory = ({ data }) => {
  return (
    <>
      <li className="sub-category__item">
        <Link to={data.slug}>{data.subCategoryName}</Link>
      </li>
    </>
  );
};

export default ProductSubCategory;
