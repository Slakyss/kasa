import React from "react";
import Banner from "../layout/Banner";
import "./HomePage.css";
import AppartGrid from "../components/AppartGrid.jsx";
import Main from "../layout/Main";

function HomePage() {
  return (
    <div>
      <Main>
        <Banner />
        <AppartGrid />
      </Main>
    </div>
  );
}

export default HomePage;
