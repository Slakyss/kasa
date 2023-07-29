import React, { useEffect, useState } from 'react';
import fetchAppartementData from '../api/FetchAppData.jsx'; 
import "../styles/AppartGrid.css";
import AppartementCard from "./AppartementCard.jsx";

// L'utilisation combinée de useEffect et useState permet de récupérer et d'afficher dynamiquement
// la liste des appartements des que les données sont disponibles, tout en évitant les problèmes
// de synchronisation liés à l'opération asynchrone de récupération des données.

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