// import React from "react";
// import { createBrowserRouter, Outlet } from "react-router-dom";
// import Main from "../layout/Main"
// import Footer from "../layout/Footer";
// import HomePage from "../pages/HomePage"
// import AppartementPage from "../pages/AppartementPage";
// import Navbar from "../components/Navbar";
// import About from "../pages/About";
// import ErrorPageNotFound from "../pages/ErrorPageNotFound";

// const HeaderFooterLayout = () => {
//   return (
//     <>
//       <Navbar />
//       <Main>
//         <Outlet />
//       </Main>
//       <Footer />
//     </>
//   );
// };

// export const router = createBrowserRouter([
//   {
//     element: <HeaderFooterLayout />,
//     errorElement: <ErrorPageNotFound />,
//     children: [
//       {
//         path: "/",
//         element: <HomePage />,
//       },
//       {
//         path: "/appartement",
//         element: <AppartementPage/>,
//       },
//       {
//         path: "/about",
//         element: <About/>,
//       },

//     ],
//   },
// ]);

import React from "react";
import { createBrowserRouter, Outlet, useNavigate } from "react-router-dom";
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
]);

export const useAppartementNavigate = () => {
  const navigate = useNavigate();

  function navigateToAppartement(id) {
    navigate(`/appartement/${id}`);
  }

  return navigateToAppartement;
};

export const router = AppartementRouter;