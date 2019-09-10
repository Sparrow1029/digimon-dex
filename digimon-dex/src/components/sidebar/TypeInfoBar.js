import React from 'react';

const selectedStyle = {
  color: 'white',
  padding: '2px',
  margin: '2px',
  textAlign: 'center',
  backgroundColor: '#595959'
}

const regularStyle = {
  backgroundColor: '#cccccc',
  padding: '2px',
  margin: '2px',
  textAlign: 'center',
  color: '#595959'
}

const selectType = (type) => {
  let types = ['free', 'data', 'virus', 'vaccine']
  let row = []

  let t;
  for (t=0; t<types.length; t++) { 
    console.log(types[t]);
    if (types[t] === type) {
      row.push(<div key={t} className="column"
                    style={selectedStyle}>{`${type.toString().slice(0,3).toLocaleUpperCase()}`}</div>)
    } else {
      row.push(<div key={t} className="column"
      style={regularStyle}>{`${types[t].toString().slice(0,3).toLocaleUpperCase()}`}</div>)
    } 
  }

  return (
    <div className="ui four column grid">
      <div className="row">
        {row}
      </div>
    </div>
  );
}

const TypeInfoBar = ({ type }) => {
  const typeBar = selectType(type);
  
  return (
    <>
      {typeBar}
    </>
  );
}

export default TypeInfoBar;
