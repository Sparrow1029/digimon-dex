import React from 'react';
import SymbolCard from './SymbolCard';
import SizeChart from './SizeChart';
import InfoDetail from './InfoDetail';
import TypeInfoBar from './TypeInfoBar';

const gridStyle = {
  position: 'absolute',
  top: '90px'
}

const SideBar = ({ symbol, info, type, attribute }) => {
  return (
    <div className="ui one column grid" style={gridStyle}>
      <div className="row">
        <SymbolCard symbol={symbol} />
      </div>
      <div className="row">
        <SizeChart />
      </div>
      <div className="row" style={{ height: '30vh' }}>
        <InfoDetail info={info} type={type} attribute={attribute} />
      </div>
      <div className="row">
        <TypeInfoBar type={type} />
      </div>
    </div>
  );
}

export default SideBar;
