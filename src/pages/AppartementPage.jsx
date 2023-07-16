import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BlocDescription from '../components/BlocDescription';
import ImageBanner from '../components/ImageBanner';
import AppartementHeader from '../components/AppartementHeader';
import './AppartementPage.css';
import  fetchAppartementData  from '../api/FetchAppData';

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

  return (
    <div className="appartement__page">
      <ImageBanner pictures={appartementData.pictures} />
      <AppartementHeader appartementData={appartementData} />
      <div className="appartement__description__bloc">
        <BlocDescription title="Description" content={appartementData.description} />
        <BlocDescription
          title="Équipements"
          content={appartementData.equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>
          ))}
        />
      </div>
    </div>
  );
}

export default AppartementPage;