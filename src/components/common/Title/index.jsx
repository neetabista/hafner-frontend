import React from "react";

const Title = ({ title, color, textAlign, display, icon }) => {
  return (
    <>
      <div className="title-wrap" style={{ display }}>
        <h2 className="title" style={{ textAlign, color }}>
          {title}
        </h2>
        <img src={icon ? icon : "/public/images/icon-dark.svg"} alt="icon" />
      </div>
    </>
  );
};

export default Title;
