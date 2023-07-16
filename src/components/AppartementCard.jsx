// import React from 'react'
// import "./AppartementCard.css"
// import { Link } from 'react-router-dom'

// function AppartementCard(props) {
//   return (
//     <Link to="/appartement" 
//     state={{appartementId: props.id}}>
//       <div className='appartement__card'>
//         <img src = {props.imageUrl} alt="" />
//         <div className='appartement__subtitle'>{props.title}</div>
//       </div>
//     </Link>
//   )
// }

// export default AppartementCard


import React from 'react';
import { useAppartementNavigate } from '../routes/router.jsx';
import "./AppartementCard.css";

function AppartementCard(props) {
  const navigateToAppartement = useAppartementNavigate();

  function handleAppartementClick() {
    navigateToAppartement(props.id);
  }

  return (
    <div className='appartement__card' onClick={handleAppartementClick}>
      <img src={props.imageUrl} alt="" />
      <div className='appartement__subtitle'>{props.title}</div>
    </div>
  );
}

export default AppartementCard;