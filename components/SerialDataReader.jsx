import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';


const SerialDataReader = () => {
  const [port, setPort] = useState(null);
  const [receivedData, setReceivedData] = useState([]);
  const [error, setError] = useState(null);

  const connectToSerial = async () => {
    try {
      const newPort = await navigator.serial.requestPort();
      await newPort.open({ baudRate: 115200 });
      setPort(newPort);
    } catch (err) {
      setError('Error connecting to serial port: ' + err.message);
    }
  };

  useEffect(() => {
    return () => {
      if (port) {
        port.close();
      }
    };
  }, [port]);

  useEffect(() => {
    const readData = async () => {
        if (port) {
          let accumulatedData = '';
          const reader = port.readable.getReader();
          try {
            while (true) {
              const { value, done } = await reader.read();
              if (done) {
                console.log('Read operation complete');
                break;
              }
              if (value) {
                const textDecoder = new TextDecoder();
                const decodedData = textDecoder.decode(value);
                accumulatedData += decodedData;
                if (accumulatedData.includes('\n')) {
                  const lines = accumulatedData.split('\n');
                  for (let i = 0; i < lines.length - 1; i++) {
                    const integerData = parseInt(lines[i], 10);
                    if (!isNaN(integerData)) {
                      setReceivedData((prevData) => [...prevData, {x: new Date(), y: integerData}]);
                    }
                  }
                  accumulatedData = lines[lines.length - 1];
                }
              }
            }
          } catch (err) {
            setError('Error reading data from serial port: ' + err.message);
            reader.releaseLock();
          }
        }
      };
      
      

    if (port) {
      readData();
    }
  }, [port]);

  return (
    <div>
      <button onClick={connectToSerial}>Connect to Serial Port</button>
      {error && <div>Error: {error}</div>}
      <h2>GAGAN</h2>
      <Plot
        data={[
          {
            x: receivedData.map(d => d.x),
            y: receivedData.map(d => d.y),
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
          }
        ]}
        layout={{
            width: 720,
            height: 440,
            title: 'ALTITUDE',
            yaxis: {
              range: [0, 100]
            }
          }}
      
      />
    </div>
  );
};

export default SerialDataReader;
