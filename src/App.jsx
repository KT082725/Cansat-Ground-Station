import "./App.css";
import React, {useState} from "react";
import SerialDataReader from "./components/Serial/SerialDataReader";
import GraphComponent from "./components/GrpahComponent";
import ParentComponent from "./components/ParentComponent";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  const [receivedData, setReceivedData] = useState([]);

  const onDataReceived = (data) => {
    setReceivedData((prevData) => [...prevData, data]);
  };
  return (
    <>
      <Navbar />
      {/* <SerialDataReader onDataReceived={onDataReceived} /> */}
    </>
  );
};

export default App;
