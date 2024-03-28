import { useState } from "react";
import "./Navbar.css";
import SerialDataReader from "../Serial/SerialDataReader";
import BaudSelector from "../Serial/BaudSelector";

const Navbar = () => {
  const [baudRate, setBaudRate] = useState(115200);
  const handleSelectChange = (event) => {
    setBaudRate(parseInt(event.target.value));
  };
  return (
    <>
      <div className="Container">
        <div className="baud-container">
          <BaudSelector value={baudRate} onChange={handleSelectChange} />
        </div>
        <div className="button-container">
          <SerialDataReader baudRate={baudRate}/>
        </div>
      </div>
    </>
  );
};

export default Navbar;
