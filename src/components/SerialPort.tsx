import { useEffect, useState } from "react";

function SerialPortComponent() {
  const [webSerialSupported, setWebSerialSupported] = useState(true); // Initially assume Web Serial is supported

  useEffect(() => {
    // Feature detection for Web Serial support
    const isWebSerialSupported = "serial" in navigator;
    setWebSerialSupported(isWebSerialSupported);
  }, []);
  return (
    <>
      {webSerialSupported ? (
        <p>Web Serial is supported!</p>
      ) : (
        <p>Web Serial is not supported in this browser.</p>
      )}
    </>
  );
}

export default SerialPortComponent;
