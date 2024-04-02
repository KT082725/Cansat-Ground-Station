import "./App.css";
import React, { useState, useEffect } from "react";
import GraphComponent from "./components/GraphComponent";
import Rocketmodel from "./components/Rocketmodel";
import Navbar from "./components/Navbar/Navbar"
import SerialDataReader from "./components/Serial/SerialDataReader";
const App = () => {
  const [data, setData] = useState([]);

  const handleDataReceived = (newData) => {
    // Update the data state with the new data
    setData(prevData => [...prevData, newData]);
  };

  return (
    <div>
      <SerialDataReader onDataReceived={handleDataReceived} />
      {/* <GraphComponent data={data} /> */}
    </div>
  );
};

export default App;
