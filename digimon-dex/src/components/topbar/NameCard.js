import React from 'react';

const NameCard = ({ name, stage }) => {
  return (
    <div>
      <div className="ui huge header">{name.toString().toLocaleUpperCase()}</div>
      <div className="ui sub header">{stage}</div> 
    </div>
  );
};

export default NameCard;
