import React from 'react';
import NameCard from './NameCard';
import PowerLVL from './PowerLVL';
import NumberCard from './NumberCard';

const tobBarStyle = {
  position: 'absolute',
  top: '0px',
}

const Topbar = ({ power, name, stage, num }) => {
  return (
    <div style={tobBarStyle}>
      <div className="ui celled grid" style={{ width: '100vw' }}>
        <div className="three wide column">
          <PowerLVL power={power} />
        </div>
        <div className="ten wide column">
          <NameCard name={name} stage={stage} />  
        </div>
        <div className="three wide column">
          <NumberCard num={num} />  
        </div>
      </div>
    </div>
  );
};

export default Topbar;
