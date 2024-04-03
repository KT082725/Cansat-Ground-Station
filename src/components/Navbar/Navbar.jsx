import { useState } from "react";
import "./Navbar.css";
import SerialDataReader from "../Serial/SerialDataReader";
import BaudSelector from "../Serial/BaudSelector";

const Navbar = () => {
  const [baudRate, setBaudRate] = useState(115200);
  const handleSelectChange = (event) => {
    setBaudRate(parseInt(event.target.value));
  }
  const [data, setData] = useState([]);

  const handleDataReceived = (newData) => {
    // Update the data state with the new data
    setData(prevData => [...prevData, newData]);
  };
  return (
      <div className="container">
          <img className = "logo-container" src="gagan.png" />
        <div className="baud-container">
          <BaudSelector value={baudRate} onChange={handleSelectChange} />
        </div>
        <div className="button-container">
        <SerialDataReader baudRate={baudRate} onDataReceived={handleDataReceived}/>

        </div>
      </div>
  );
};

export default Navbar;
