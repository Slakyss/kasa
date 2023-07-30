import React from 'react';
import "../styles/Rating.css"

const Rating = ({ rating }) => {
  return (
    <div className='appartement__owner__stars'>
      {[1, 2, 3, 4, 5].map((number) => (
        <span key={number} className={rating >= number ? 'on' : ''}>
          <i className='fa-solid fa-star'></i>
        </span>
      ))}
    </div>
  );
};

export default Rating;