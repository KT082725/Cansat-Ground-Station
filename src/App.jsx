import "./App.css";
import React, { useState, useEffect } from "react";
import GraphComponent from "./components/GrpahComponent";
import Rocketmodel from "./components/Rocketmodel";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  const [orientation, setOrientation] = useState({ x: 0, y: 0, z: 0 });

  // Simulate receiving data
  useEffect(() => {
    const interval = setInterval(() => {
      setOrientation({
        x: Math.random() * 360,
        y: Math.random() * 360,
        z: Math.random() * 360,
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />
      <div className="rocket-container">
        <Rocketmodel orientation={orientation} />
      </div>
    </>
  );
};

export default App;
