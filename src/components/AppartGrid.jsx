import React, { useEffect, useState } from 'react';
import { useAppartementNavigate } from '../routes/router.jsx';
import fetchAppartementData from '../api/FetchAppData.jsx'; 
import "./AppartGrid.css";
import AppartementCard from "./AppartementCard.jsx";

function AppartGrid() {
  const navigateToAppartement = useAppartementNavigate();
  const [appartement, setAppartement] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchAppartementData();
        setAppartement(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  function handleAppartementClick(id) {
    navigateToAppartement(id);
  }

  return (
    <div className='AppartGrid'>
      {appartement.map((appartement) => (
        <AppartementCard 
          key={appartement.id}
          title={appartement.title} 
          imageUrl={appartement.cover}
          id={appartement.id}
          onClick={handleAppartementClick}
        />
      ))}
    </div>
  );
}

export default AppartGrid;