import React from 'react';

const Fighter = ({ name, odds }) => {
  return (
    <div className="fighter">
      <h2>{name}</h2>
      <p>Odds: {odds}</p>
    </div>
  );
};

export default Fighter;