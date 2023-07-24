import React, { useState } from "react";
import "./BlocDescription.css";

function BlocDescription(props) {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const showContent = () => {
    setIsContentVisible(!isContentVisible);
  };

  return (
    <div className='appartement__description'>
      <p className={`description__header ${isContentVisible ? "active" : ""}`} onClick={showContent}>
        <span>{props.title}</span>
        <i className={`fa-solid fa-chevron-up ${isContentVisible ? "rotate" : ""}`}></i>
      </p>

      <p
        className={`description__content ${isContentVisible ? "" : "hide"}`}
      >
        {props.content}
      </p>
    </div>
  );
}

export default BlocDescription;