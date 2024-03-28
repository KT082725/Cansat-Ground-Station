import React, { useState, useEffect } from "react";
import GraphComponent from "../GraphComponent"; // Import the GraphComponent
import BaudSelector from "./BaudSelector"; // Import the BaudSelector

const SerialDataReader = ({ onDataReceived }) => {
  const [port, setPort] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [data, setData] = useState([]); // State to store the data
  const [baudRate, setBaudRate] = useState(''); // State to store the selected baud rate

  const connectToSerial = async () => {
    try {
      if (!isConnected) {
        const newPort = await navigator.serial.requestPort();
        await newPort.open({ baudRate: parseInt(baudRate) });
        setPort(newPort);
        setIsConnected(true);
      } else {
        if (port) {
          await port.close();
          setPort(null);
          setIsConnected(false);
        }
      }
    } catch (err) {
      window.alert(err.message);
    }
  };

  // Effect to call onDataReceived and update the data state
  useEffect(() => {
    if (typeof onDataReceived === 'function') {
      const newData = onDataReceived();
      setData(newData);
    }
  }, [onDataReceived]);

  // Handler for the baud rate selection
  const handleBaudRateChange = (event) => {
    setBaudRate(event.target.value);
  };

  return (
    <div>
      <BaudSelector value={baudRate} onChange={handleBaudRateChange} /> {/* Use the BaudSelector here */}
      <button onClick={connectToSerial}>
        {isConnected ? "Disconnect" : "Connect"}
      </button>
      <GraphComponent data={data} /> {/* Use the GraphComponent here */}
    </div>
  );
};

export default SerialDataReader;
