import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HeaderFooterLayout from "../layout/HeaderFooterLayout"; // Importer le composant que vous avez créé ci-dessus
import HomePage from "../pages/HomePage";
import AppartementPage from "../pages/AppartementPage";
import About from "../pages/About";
import ErrorPageNotFound from "../pages/ErrorPageNotFound";

const AppRouter = createBrowserRouter([
  {
    element: <HeaderFooterLayout />,
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
      {
        path: "/*",
        element: <ErrorPageNotFound />,
        showFooter: false,
      }
    ],
  },
]);

export default AppRouter;