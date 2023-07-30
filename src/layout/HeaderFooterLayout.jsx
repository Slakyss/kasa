import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
import Conteneur from "./Conteneur";

const HeaderFooterLayout = ({ showFooter = true }) => {
  const location = useLocation();
  const isPageError = location.pathname === "/error";

  return (
    <>
      <Conteneur>
        <Navbar />     
          <Outlet />
      </Conteneur>
      {showFooter && !isPageError && <Footer />}
    </>
  );
};

export default HeaderFooterLayout;




