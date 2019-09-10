import React from 'react';

const NumberCard = ({ num }) => {
  return (
    <div>
      <p>D:CS #</p>
      <h2>{`${num.toString().padStart(3,0)}`}</h2>
    </div>
  );
}

export default NumberCard;
