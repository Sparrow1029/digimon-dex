import React, { useState } from 'react';
import Topbar from './topbar/Topbar';
import SideBar from './sidebar/SideBar';

const mainDiv = {
  width: '100vw',
}

const App = () => {
  return (
    <div style={mainDiv}>
      <div className="ui grid">
        <div className="row">
          <Topbar power={8} name={'guilmon'} stage={'rookie'} num={5} />
        </div>
        <div className="row" style={{ height: '75vw', position: 'relative', top:'25px' }}>
          <div className="ten wide column">
            <div className="ui container"> </div>
          </div>
          <div className="six wide column">
            <SideBar
              symbol={'zeroUnit'}
              info={'Lorem ipsum dolor sit amet'}
              type={'virus'}
              attribute={'fire'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
