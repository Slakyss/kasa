// import React from 'react'
// import "./Banner.css"

// function banner() {
//   return (
//     <div className='banner'>
//         <h2>Chez vous, partout et ailleurs</h2>
//     </div>
//   )
// }

// export default banner

import React from "react";
import "./Banner.css";

const Banner = ({ image, text, descriptionImg, showOverlay }) => {
  return (
    <div className='banner'>
      <img src={image} className='bannerImg' alt={descriptionImg} />
      {showOverlay && <div className="overlay"></div>}
      {text && <h3>{text}</h3>}
      {descriptionImg && <p>{descriptionImg}</p>}
    </div>
  );
};

export default Banner;