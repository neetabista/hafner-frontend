import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../frontend/home";
import LargeAppliance from "../../frontend/product details layout/large appliance";
import SmallAppliance from "../../frontend/product details layout/small appliance";
import CookTops from "../../frontend/product details layout/cooktops";
import ProductDetails from "../../frontend/product details layout/product details";
import ContactUs from "../../frontend/contact us";
import Association from "../../frontend/association";

const PublicRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kitchen-hoods-chimney" element={<LargeAppliance />} />
        <Route path="/electric-kettel" element={<SmallAppliance />} />
        <Route path="/cook-top" element={<CookTops />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/association" element={<Association />} />
      </Routes>
    </>
  );
};

export default PublicRouter;
