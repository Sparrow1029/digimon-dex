import React from 'react';

const emptyPowerBlock = {
  margin: '2px',
  padding: '2px',
  width: '55px',
  height: '2px',
  backgroundColor: 'gray',
}

const powerBlock = {
  margin: '2px',
  padding: '2px',
  width: '55px',
  height: '2px',
  backgroundColor: 'yellow',
}

const create_blocks = (empty_blocks, normalized_plvl) => {
  var html = [];
  for (var i=0; i<empty_blocks; i++) {
    html.push(<div key={`i${i}`} style={emptyPowerBlock}></div>);
  }
  for (var j=0; j<normalized_plvl; j++) {
    html.push(<div key={`j${j}`} style={ powerBlock }></div>);
  }
  return (
    <div>
      {html}
    </div>
  )
}

// Currently taking in "memory" attribute from JSON server to
// calculate relative power lvl
const PowerLVL = ({ power }) => {
  var normalized_plvl = Math.floor( power / 25 * 10) // Round percent
  var empty_blocks = 10 - normalized_plvl
  const blocks = create_blocks(empty_blocks, normalized_plvl)

  return (
    <div>
      <div className="ui medium header">PWR LVL</div>
      {blocks}
    </div>
  );
};

export default PowerLVL;
