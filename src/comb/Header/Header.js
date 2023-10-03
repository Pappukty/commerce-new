import React from "react";
import Nav from "./components/NavLinks/nav";

import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
const Header = () => {
  return (
    <div>
      <Nav />
      <Outlet/>
      <Footer />
    </div>
  );
};

export default Header;
