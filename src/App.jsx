import "./App.css";
import React, { useState, useEffect } from "react";
import GraphComponent from "./components/GraphComponent";
import Rocketmodel from "./components/Rocketmodel";
import Navbar from "./components/Navbar/Navbar"

const App = () => {
  const data = [
    { x: new Date('2022-01-01'), y: 10 },
    { x: new Date('2022-01-02'), y: 20 },
    { x: new Date('2022-01-03'), y: 30 },
    { x: new Date('2022-01-04'), y: 25 },
    { x: new Date('2022-01-05'), y: 35 },
  ];

  return (
    <>
      <Navbar />
      <div className="graph-container">
        <GraphComponent data={data} />
      </div>
    </>
  );
};

export default App;
