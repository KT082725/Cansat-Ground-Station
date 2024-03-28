import React from 'react';
import NaviBar from './components/Navbar/NaviBar';


const App = () => {
  const handleDataReceived = (data) => {
    // handle the data received from the serial port
  };

  return (
    <div>
      <NaviBar onDataReceived={handleDataReceived} />
      {/* other components */}
    </div>
  );
};

export default App;
