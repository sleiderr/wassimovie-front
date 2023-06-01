import React from 'react';
import ActorCard from '../actorCard/actorCard.component';

const ActorGrid = ({ items }) => {
  return (
    <div className="item-grid">
      {items.map((item, index) => (
        <ActorCard item={item} key={index}/>
      ))}
    </div>
  );
};

export default ActorGrid;