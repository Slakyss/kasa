// import React from "react";
// import Banner from "../layout/Banner";
// import "./HomePage.css";
// import AppartGrid from "../components/AppartGrid.jsx";
// import Main from "../layout/Main";
// import HomeBannerImg from "../images/BannerHome.png"

// function HomePage() {
//   return (
//     <>
//       <Main>
//         <Banner 
//           image={HomeBannerImg}
//           text= "Chez vous, partout et ailleurs"
//           descriptionImg="Image de la bannière d'accueil"
//           showOverlay={true}
//         />          
//         <AppartGrid />
//       </Main>
//     </>
//   );
// }

// export default HomePage;

import React from "react";
import Banner from "../layout/Banner";
import "./HomePage.css";
import AppartGrid from "../components/AppartGrid.jsx";
import Main from "../layout/Main";

function HomePage() {
  return (
    <>
      <Main>
        <Banner>
          <div className="banner__home banner__all">
            <h1>Chez vous, partout et ailleurs</h1>
          </div>
        </Banner>         
        <AppartGrid />
      </Main>
    </>
  );
}

export default HomePage;
