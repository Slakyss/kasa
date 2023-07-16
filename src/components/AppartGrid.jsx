// import React, { useEffect, useState } from 'react';
// import "./AppartGrid.css";
// import AppartementCard from "./AppartementCard.jsx";

// function AppartGrid() {
//   const [appartement, setAppartement] = useState([]);

//   useEffect(fetchAppartement, []);

//   function fetchAppartement() {
//     fetch("logements.json")
//       .then((res) => res.json())
//       .then((res) => setAppartement(res))
//       .catch(console.error);
//   }

//   return (
//     <div className='AppartGrid'>
//       {appartement.map((appartement) => (
//         <AppartementCard 
//           key={appartement.id}
//           title={appartement.title} 
//           imageUrl={appartement.cover}
//           id={appartement.id}
//         />
//       ))}
//     </div>
//   );
// }

// export default AppartGrid;

// AppartementPage.jsx

import React, { useEffect, useState } from 'react';
import { useAppartementNavigate } from '../routes/router.jsx';
import "./AppartGrid.css";
import AppartementCard from "./AppartementCard.jsx";

function AppartGrid() {
  const navigateToAppartement = useAppartementNavigate();
  const [appartement, setAppartement] = useState([]);

  useEffect(fetchAppartement, []);

  function fetchAppartement() {
    fetch("logements.json")
      .then((res) => res.json())
      .then((res) => setAppartement(res))
      .catch(console.error);
  }

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