import React from 'react';

const InfoDetail = ({ info, type, attribute }) => {
  return (
    <div className="ui container">
      <div className="ui medium header">{type.toString().toLocaleUpperCase()} TYPE</div>
      <div className="ui divider"></div> 
      <p style={{ fontSize: '1.5em' }}>{info}</p>
      <div className="ui sub header">ATTRIBUTE {attribute}</div>
    </div>
  );
} 

export default InfoDetail;
