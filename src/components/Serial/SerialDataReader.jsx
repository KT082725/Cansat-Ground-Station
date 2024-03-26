import "./SerialDataReader.css"
import React, { useState, useEffect } from "react";

const SerialDataReader = ({ onDataReceived }) => {
  const [port, setPort] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  const connectToSerial = async () => {
    try {
      if (!isConnected) {
        const newPort = await navigator.serial.requestPort();
        await newPort.open({ baudRate: 115200 });
        setPort(newPort);
        setIsConnected(true);
      } else {
        if (port) {
          await port.close();
          setPort(null);
        }
        setIsConnected(false);
      }
    } catch (err) {
      window.alert(err.message);
    }
  };

  useEffect(() => {
    const readData = async () => {
      if (port) {
        let accumulatedData = "";
        const reader = port.readable.getReader();
        try {
          while (true) {
            const { value, done } = await reader.read();
            if (done) {
              console.log("Read operation complete");
              break;
            }
            if (value) {
              const textDecoder = new TextDecoder();
              const decodedData = textDecoder.decode(value);
              accumulatedData += decodedData;
              if (accumulatedData.includes("\n")) {
                const lines = accumulatedData.split("\n");
                for (let i = 0; i < lines.length - 1; i++) {
                  const integerData = parseInt(lines[i], 10);
                  if (!isNaN(integerData)) {
                    onDataReceived({ x: new Date(), y: integerData });
                  }
                }
                accumulatedData = lines[lines.length - 1];
              }
            }
          }
        } catch (err) {
          window.alert(err.message);
          reader.releaseLock();
        }
      }
    };

    if (port) {
      readData();
    }

    // Cleanup function
    return () => {
      if (port) {
        port.close();
      }
    };
  }, [port, onDataReceived]);

  return (
    <div>
      <button onClick={connectToSerial}>
        {isConnected ? "Disconnect" : "Connect"}
      </button>
    </div>
  );
};

export default SerialDataReader;
