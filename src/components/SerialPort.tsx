import React, { useState } from 'react';

function SerialPortComponent() {
  const [serialPort, setSerialPort] = useState(null);
  const [receivedData, setReceivedData] = useState('');

  async function requestSerialPortAccess() {
    try {
      const port = await navigator.serial.requestPort();
      await port.open({ baudRate: 9600 });
      setSerialPort(port);
      listenForData(port);
    } catch (error) {
      console.error('Error requesting serial port access:', error);
    }
  }

  async function listenForData(port) {
    const reader = port.readable.getReader();

    while (true) {
      try {
        const { value, done } = await reader.read();
        if (done) {
          console.log('Serial port closed');
          break;
        }
        setReceivedData(value);
      } catch (error) {
        console.error('Error reading data from serial port:', error);
        break;
      }
    }
  }

  async function writeToSerialPort(data) {
    try {
      await serialPort.write(data);
    } catch (error) {
      console.error('Error writing data to serial port:', error);
    }
  }

  return (
    <div>
      <button onClick={requestSerialPortAccess}>Request Serial Port Access</button>
      <p>Received Data: {receivedData}</p>
      <button onClick={() => writeToSerialPort('Hello from the web!')}>Send Data</button>
    </div>
  );
}

export default SerialPortComponent;