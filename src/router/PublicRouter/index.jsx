import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../frontend/home";

const PublicRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default PublicRouter;
