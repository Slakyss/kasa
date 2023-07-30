import React from "react";
import Banner from "../components/Banner";
import "../styles/App.css";
import HomeBannerImg from "../images/bannerHome.png";
import Main from "../components/Main";
import AppartGrid from "../components/AppartGrid.jsx";

function HomePage() {
  return (
    <>
      <Main>
        <Banner className="home__banner"
          image={HomeBannerImg}
          text= "Chez vous, partout et ailleurs"
          descriptionImg="Image de la bannière d'accueil"
          showOverlay={true}
        />
        <AppartGrid /> 
      </Main>
    </>
  );
}

export default HomePage;
