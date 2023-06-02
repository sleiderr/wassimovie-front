import React, { useState } from 'react';
import './actorCard.component.css';

const ActorCard = ({ item }) => {
  return (
    <div className="info-container">
      {item.profile_path && <img
        src={process.env.imdbPhotoURL + item.profile_path}
        alt={item.name}
        className="info-poster"
      />}
      <div className="info-overlay">
        <h3 className="info-title">{item.name}</h3>
        <p className='info-desc'>{item.character}</p>
      </div>
    </div>
  );
};

export default ActorCard;