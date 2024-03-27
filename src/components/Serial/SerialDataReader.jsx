import React, { useState } from "react";

const SerialDataReader = ({ onDataReceived, baudRate }) => {
  const [port, setPort] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  const connectToSerial = async () => {
    try {
      if (!isConnected) {
        const newPort = await navigator.serial.requestPort();
        await newPort.open({ baudRate: baudRate });
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

  return (
    <div>
      <button onClick={connectToSerial}>
        {isConnected ? "Disconnect" : "Connect"}
      </button>
    </div>
  );
};

export default SerialDataReader;
