import "./App.css";
import React, { useState, useEffect } from "react";
import GraphComponent from "./components/GraphComponent";
import Rocketmodel from "./components/Rocketmodel";
import Navbar from "./components/Navbar/Navbar"
import SerialDataReader from "./components/Serial/SerialDataReader";
const App = () => {
  const [data, setData] = useState([]);

  return (
    <div>
     <SerialDataReader onDataReceived={data => console.log(data)} />

      {/* <GraphComponent data={data} /> */}
    </div>
  );
};

export default App;
