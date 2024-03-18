import React from "react";
import { Link } from "react-router-dom";

const CustomButton = ({ title, slug }) => {
  return (
    <>
      <div className="custom-button">
        <Link to={slug}>{title}</Link>
      </div>
    </>
  );
};

export default CustomButton;
