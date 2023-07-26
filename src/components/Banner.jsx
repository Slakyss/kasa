import React from "react";
import "../styles/Banner.css";

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