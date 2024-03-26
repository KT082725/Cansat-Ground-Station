import "./App.css";
import React, {useState} from "react";
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
    </>
  );
};

export default App;
