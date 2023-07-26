import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Main from "../components/Main";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";

const HeaderFooterLayout = ({ showFooter = true }) => {
  const location = useLocation();
  const isPageError = location.pathname === "/error";

  return (
    <>
      <Navbar />
      <Main>
        <Outlet />
      </Main>
      {showFooter && !isPageError && <Footer />}
    </>
  );
};

export default HeaderFooterLayout;