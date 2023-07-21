import React from "react";
import Banner from "../layout/Banner";
import "./HomePage.css";
import AppartGrid from "../components/AppartGrid.jsx";
import Main from "../layout/Main";
import HomeBannerImg from "../images/BannerHome.png"

function HomePage() {
  return (
    <>
      <Main>
        <Banner 
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
