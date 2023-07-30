import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import fetchAppartementData from '../api/FetchAppData';
import Collapse from '../components/Collapse';
import ImageBanner from '../components/CarrouselBanner';
import AppartementDetailsHeader from '../components/AppartementDetailsHeader';

function AppartementPage() {
  const { id } = useParams();
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
    <main>
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
    </main>
  );
}

export default AppartementPage;