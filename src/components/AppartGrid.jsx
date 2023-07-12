import React, { useEffect, useState } from 'react';
import "./AppartGrid.css";
import AppartementCard from "./AppartementCard.jsx";

function AppartGrid() {
  const [appartement, setAppartement] = useState([]);

  useEffect(fetchAppartement, []);

  function fetchAppartement() {
    fetch("logements.json")
      .then((res) => res.json())
      .then((res) => setAppartement(res))
      .catch(console.error);
  }

  return (
    <div className='AppartGrid'>
      {appartement.map((appartement) => (
        <AppartementCard 
          key={appartement.id}
          title={appartement.title} 
          imageUrl={appartement.cover}
          id={appartement.id}
        />
      ))}
    </div>
  );
}

export default AppartGrid;