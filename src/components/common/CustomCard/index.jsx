import React from "react";
import { Link } from "react-router-dom";

const CustomCard = ({ data, category, textAlign }) => {
  return (
    <>
      <div className="custom-card">
        <Link to="#" className="custom-card__image">
          <img src={data.image} alt={data.title} width="100%" height="100%" />
        </Link>
        <div className="custom-card__content" style={{ textAlign }}>
          {category && <div className="category">{category}</div>}
          <Link to="#" className="custom-card__title">
            {data.title}
          </Link>
        </div>
      </div>
    </>
  );
};

export default CustomCard;
