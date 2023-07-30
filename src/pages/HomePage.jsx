import React from "react";
import Banner from "../components/Banner";
import "../styles/App.css";
import HomeBannerImg from "../images/bannerHome.png";
import AppartGrid from "../components/AppartGrid.jsx";

function HomePage() {
  return (
    <>
        <main>
          <Banner className="home__banner"
            image={HomeBannerImg}
            text= "Chez vous, partout et ailleurs"
            descriptionImg="Image de la bannière d'accueil"
            showOverlay={true}
            />
          <AppartGrid /> 
        </main>    
    </>
  );
}

export default HomePage;
