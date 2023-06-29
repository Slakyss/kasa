import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Main from "../components/Main"
import Footer from "../components/Footer";
import App from "../App"
import Navbar from "../components/Navbar";

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

export const router = createBrowserRouter([
  {
    element: <HeaderFooterLayout />,
    errorElement: <h1>404 Not Found</h1>,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/appartement",
        element: <h1>Nos appartements</h1>,
      },
      {
        path: "/about",
        element: <h1>A propos</h1>,
      },
    ],
  },
]);


