// import React, { useState } from 'react';
// import './CarrouselBanner.css';

// function ImageBanner(props) {
//   const pictures = props.pictures;
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const goToPreviousSlide = () => {
//     const newIndex = currentIndex === 0 ? pictures.length - 1 : currentIndex - 1;
//     setCurrentIndex(newIndex);
//   };

//   const goToNextSlide = () => {
//     const newIndex = currentIndex === pictures.length - 1 ? 0 : currentIndex + 1;
//     setCurrentIndex(newIndex);
//   };

//   return (
//     <div className='image__banner'>
//       <div className='slider'>
//         {pictures.map((pic, index) => (
//           <div
//             key={pic}
//             className={`slide ${index === currentIndex ? 'active' : ''}`}
//             style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//           >
//             <img src={pic} alt="" />
//             <div className="slide__indicator">
//               {currentIndex + 1}/{pictures.length}
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="carrousel__navigation">
//         <div className="carrousel__prev" onClick={goToPreviousSlide}>
//           <i className="fa-solid fa-chevron-left"></i>
//         </div>
//         <div className="carrousel__next" onClick={goToNextSlide}>
//           <i className="fa-solid fa-chevron-right"></i>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ImageBanner;

import React, { useState, useEffect } from 'react';
import './CarrouselBanner.css';

function ImageBanner(props) {
  const pictures = props.pictures;
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPreviousSlide = () => {
    const newIndex = currentIndex === 0 ? pictures.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNextSlide = () => {
    const newIndex = currentIndex === pictures.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const isSinglePicture = pictures.length === 1;

  return (
    <div className='image__banner'>
      {isSinglePicture ? (
        <img src={pictures[0]} alt="" />
      ) : (
        <div className='slider'>
          {pictures.map((pic, index) => (
            <div
              key={pic}
              className={`slide ${index === currentIndex ? 'active' : ''}`}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              <img src={pic} alt="" />
              <div className="slide__indicator">
                {currentIndex + 1}/{pictures.length}
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="carrousel__navigation">
        {isSinglePicture ? null : (
          <>
            <div className="carrousel__prev" onClick={goToPreviousSlide}>
              <i className="fa-solid fa-chevron-left"></i>
            </div>
            <div className="carrousel__next" onClick={goToNextSlide}>
              <i className="fa-solid fa-chevron-right"></i>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ImageBanner;