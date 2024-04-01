import React, { useState, useEffect } from "react";

const SerialDataReader = ({ onDataReceived, baudRate }) => {
  const [port, setPort] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [data, setData] = useState(null);
 

  
  const readData = async () => {
    console.log('readData called'); // Debug log
    if (port && port.readable) {
      console.log('Port is readable'); // Debug log
      const reader = port.readable.getReader();
      try {
        while (true) {
          const { value, done } = await reader.read();
          if (done) {
            console.log('Serial port closed.');
            break;
          }
          // Print the received data as a string
          const receivedData = new TextDecoder().decode(value);
          console.log('Received data:', receivedData);
          setData(receivedData);
        }
      } catch (error) {
        console.error('Error reading data:', error);
      } finally {
        reader.releaseLock();
      }
    } else {
      console.log('Port is not readable'); // Debug log
    }
  };
  

  

  useEffect(() => {
    if (data) {
      onDataReceived(data);
    }
  }, [data]);

  const connectToSerial = async () => {
    try {
      if (!isConnected) {
        const newPort = await navigator.serial.requestPort();
        if (!newPort) {
          console.error('No port found'); // Debug log
          return;
        }
        await newPort.open({ baudRate: 115200 });
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
  
  useEffect(() => {
    if (isConnected && port) {
      readData();
    }
  }, [isConnected, port]);
  

  return (
    <div>
      <button onClick={connectToSerial}>
        {isConnected ? "Disconnect" : "Connect"}
      </button>
    </div>
  );
};

export default SerialDataReader;
