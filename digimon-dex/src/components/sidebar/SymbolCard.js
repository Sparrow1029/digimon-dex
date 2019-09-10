import React from 'react';
import zero_unit from '../images/crests/zero-unit.jpg'

const symbol_map = {
  zeroUnit: { string: 'ZERO UNIT', image: zero_unit },
}

const SymbolCard = ({ symbol }) => {
  let { string, image } = symbol_map[symbol];
  console.log(string)
  console.log(image)

  return (
    <div>
      <div style={{ position: 'relative', float: 'left' }}>
        <h3>SYMBOL OF</h3>
        <h1>{string}</h1>
      </div>
      <img src={image} style={{ float: 'right', position: 'relative' }} alt={`${string} symbol`} />
    </div>
  );
}

export default SymbolCard;
