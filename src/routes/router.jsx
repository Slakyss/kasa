import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Main from "../layout/Main";
import Footer from "../layout/Footer";
import HomePage from "../pages/HomePage";
import AppartementPage from "../pages/AppartementPage";
import Navbar from "../components/Navbar";
import About from "../pages/About";
import ErrorPageNotFound from "../pages/ErrorPageNotFound";

const HeaderFooterLayout = () => {
  return (
    <>
      <Navbar />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};

const AppartementRouter = createBrowserRouter([
  {
    element: <HeaderFooterLayout />,
    errorElement: <ErrorPageNotFound />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/appartement/:id",
        element: <AppartementPage />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  {
    path: "/error",
    element: <ErrorPageNotFound/>
  }  
]);



export const router = AppartementRouter;