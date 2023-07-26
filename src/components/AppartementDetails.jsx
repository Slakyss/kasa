import React, { useEffect, useState } from 'react';
import Collapse from './Collapse';
import ImageBanner from './CarrouselBanner';
import AppartementDetailsHeader from '../components/AppartementDetailsHeader';
import { Navigate } from 'react-router-dom';
import fetchAppartementData from '../api/FetchAppData';

function AppartementDetails({ id }) {
  const [appartementData, setAppartementData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchAppartementData();
        const appartement = data.find((appartement) => appartement.id === id);
        setAppartementData(appartement);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [id]);

  if (appartementData === null) return <div>...Chargement</div>;

  if (appartementData === undefined) return <Navigate to="/error" replace />;

  return (
    <>
      <ImageBanner pictures={appartementData.pictures} />
      <AppartementDetailsHeader appartementData={appartementData} />
      <div className="collapse__appartement__description">
        <Collapse title="Description" content={appartementData.description} />
        <Collapse
          title="Équipements"
          content={appartementData.equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>
          ))}
        />
      </div>
    </>
  );
}

export default AppartementDetails;