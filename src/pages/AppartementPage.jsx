// import React, { useEffect, useState } from 'react';
// import BlocDescription from "../components/BlocDescription";
// import ImageBanner from '../components/ImageBanner';
// import AppartementHeader from '../components/AppartementHeader';
// import "./AppartementPage.css";
// import { useLocation } from 'react-router-dom';

// function AppartementPage() {
//   const location = useLocation();
//   const [appartementData, setAppartementData] = useState(null);

//   function fetchAppartementData() {
//     fetch("logements.json")
//       .then((res) => res.json())
//       .then((appartement) => {
//         const appartementData = appartement.find((appartement) => appartement.id === location.state.appartementId);
//         setAppartementData(appartementData);
//       })
//       .catch(console.error);
//   }
//   useEffect(() => {

//     fetchAppartementData();
//   }, [location.state.appartementId]);

//   if (appartementData == null) return <div>...Loading</div>;
//   return (
//     <div className='appartement__page'>
//       <ImageBanner pictures={appartementData.pictures} />
//       <AppartementHeader appartementData={appartementData} />
//       <div className='appartement__description__bloc'>
//         <BlocDescription title="Description" content={appartementData.description} />
//         <BlocDescription title="Equipements"
//           content={appartementData.equipments.map((equipment, index) => (
//               <li key={index}>{equipment}</li>
//             ))}
//           />
//       </div>
//     </div>
//   );
// }

// export default AppartementPage;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BlocDescription from '../components/BlocDescription';
import ImageBanner from '../components/ImageBanner';
import AppartementHeader from '../components/AppartementHeader';
import './AppartementPage.css';

function AppartementPage() {
  const { id } = useParams();
  const [appartementData, setAppartementData] = useState(null);

  useEffect(() => {
    async function fetchAppartementData() {
      try {
        const response = await fetch("/logements.json");
        const data = await response.json();
        const appartement = data.find((appartement) => appartement.id === id);
        setAppartementData(appartement);
      } catch (error) {
        console.error(error);
      }
    }
  
    fetchAppartementData();
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