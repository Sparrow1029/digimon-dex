import React from 'react';

const sizeChartStyle = {
  backgroundColor: 'gray',
  height: '25vh',
}

// const SizeChart = ({ size }) => {
const SizeChart = () => {
  return (
    <div className="ui container" style={sizeChartStyle}>
      <h1 style={{ fontSize: '3em', color: 'white' }}>SIZE GOES HERE</h1>
    </div>
  );
}

export default SizeChart;
