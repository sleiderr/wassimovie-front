import React from 'react';
import RatingCard from '../ratingCard/ratingCard.component';

const RatingGrid = ({ items }) => {
  console.log(items)
  return (
    <div className="item-grid" style={{position: 'absolute',left: "5%", right: "5%", margin: "20px"}}>
      {items.map((item, index) => (
        <RatingCard key={index} item={item} />
      ))}
    </div>
  );
};

export default RatingGrid;