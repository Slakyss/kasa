import React, { useEffect, useState } from 'react';
import BlocDescription from "../components/BlocDescription";
import ImageBanner from '../components/ImageBanner';
import AppartementHeader from '../components/AppartementHeader';
import "./AppartementPage.css";

function AppartementPage() {
  const [appartementData, setAppartementData] = useState(null);

  function fetchAppartementData() {
    const urlParams = new URLSearchParams(window.location.search);
    const appartementId = urlParams.get("appartementId");

    fetch("logements.json")
      .then((res) => res.json())
      .then((appartement) => {
        const appartementData = appartement.find((appartement) => appartement.id === appartementId);
        setAppartementData(appartementData);
      })
      .catch(console.error);
  }

  useEffect(() => {
    fetchAppartementData();
  }, []);

  if (appartementData == null) return <div>...Chargement</div>;
  return (
    <div className='appartement__page'>
      <ImageBanner pictures={appartementData.pictures} />
      <AppartementHeader appartementData={appartementData} />
      <div className='appartement__description__bloc'>
        <BlocDescription title="Description" content={appartementData.description} />
        <BlocDescription title="Equipements"
          content={appartementData.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          />
      </div>
    </div>
  );
}

export default AppartementPage;


