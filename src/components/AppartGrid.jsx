import React, { useEffect, useState } from 'react';
import fetchAppartementData from '../api/FetchAppData.jsx'; 
import "../styles/AppartGrid.css";
import AppartementCard from "./AppartementCard.jsx";

function AppartGrid() {
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

  return (
    <div className='AppartGrid'>
      {appartement.map((appartement) => (
        <div key={appartement.id} className="appartement__card">
          <AppartementCard 
            title={appartement.title} 
            imageUrl={appartement.cover}
            id={appartement.id}
          />
        </div>
      ))}
    </div>
  );
}

export default AppartGrid;