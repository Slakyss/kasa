import React from 'react';
import "../styles/AppartementCard.css";
import { Link } from "react-router-dom";

function AppartementCard(props) {

  return (
    <Link to = {`appartement/`+ props.id} className='link__style'>
    <div className='appartement__card'>
      <img src={props.imageUrl} alt="" />
      <div className='appartement__subtitle'>{props.title}</div>
    </div>
    </Link>
  );
}

export default AppartementCard;