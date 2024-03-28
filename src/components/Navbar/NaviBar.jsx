import React from 'react';
import SerialDataReader from '../Serial/SerialDataReader';
import BaudSelector from '../Serial/BaudSelector';

const NaviBar = ({ onDataReceived }) => {
  return (
    <nav>
      <BaudSelector />
      <SerialDataReader onDataReceived={onDataReceived} />
    </nav>
  );
};

export default NaviBar;
