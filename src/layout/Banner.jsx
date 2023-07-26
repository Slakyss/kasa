import React from "react";
import "./Banner.css";

const Banner = ({ image, text, descriptionText, showOverlay }) => {
  return (
    <div className='banner'>
      <img src={image} className='bannerImg' alt={descriptionText} />
      {showOverlay && <div className="overlay"></div>}
      <div className="content">
        {text && <h3>{text}</h3>}
        {descriptionText && <p>{descriptionText}</p>}
      </div>
    </div>
  );
};

export default Banner;

// import React from "react";
// import './Banner.css'

// function Banner({children}) { 
//     return (
//         <div>
//             {children}
//         </div>
//     )
// }

// export default Banner