// App.jsx
import React from 'react';
import ParentComponent from './components/ParentComponent';
import SerialDataReader from './components/SerialDataReader';
// import TelemetryDisplay from './components/TelemetryDisplay';
const App = () => {
  return (
    <><div>
      <SerialDataReader/>
    </div>
    <div className="App">
      <ParentComponent />
    </div>
    </>
    // <TelemetryDisplay/>
  );
};

export default App;
