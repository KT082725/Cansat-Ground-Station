import { useState } from "react";

import "./App.css";
import SerialDataReader from "./components/SerialDataReader";
import RotatingCube from "./components/Rocketmodel";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div style={{ display: "flex" }}>
        <SerialDataReader />
        <div style={{ marginLeft: "20px" }}>
          {" "}
          {/* Adjust margin as needed */}
          <RotatingCube transparentBackground />
        </div>
      </div>
    </>
  );
}

export default App;
