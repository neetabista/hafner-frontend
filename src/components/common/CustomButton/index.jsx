import React from "react";
import { Link } from "react-router-dom";

const CustomButton = ({ title, slug, type, display, textAlign }) => {
  return (
    <>
      <div className="custom-button">
        <Link to={slug} type={type} style={{ display, textAlign }}>
          {title}
        </Link>
      </div>
    </>
  );
};

export default CustomButton;
