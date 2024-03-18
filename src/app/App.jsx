import React from "react";
import "../assets/styles/main.scss";
import "remixicon/fonts/remixicon.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "../frontend/layout/header";
import PublicRouter from "../router/PublicRouter";
import Footer from "../frontend/layout/footer";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <PublicRouter />
        <Footer />
      </Router>
    </>
  );
};

export default App;
