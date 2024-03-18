import React from "react";
import Banner from "./component/banner";
import About from "./component/about";
import Testimonials from "./component/testimonials";
import Category from "./component/category";
import Product from "./component/product";

const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Category />
      <Testimonials />
      <Product />
    </>
  );
};

export default Home;
