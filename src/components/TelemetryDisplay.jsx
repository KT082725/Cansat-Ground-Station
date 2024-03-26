// import React, { useState, useEffect } from 'react';

// // Initial structure for demonstration, replace with your actual initial structure
// const initialTelemetryData = {
//   packetCount: 0,
//   mode: 0,
//   state: 0,
//   altitude: 0,
//   temperature: 0,
//   pressure: 0,
//   voltage: 0,
//   gpsTime: 0,
//   gpsLatitude: 0,
//   gpsLongitude: 0,
//   gpsSats: 0,
//   tiltX: 0,
//   tiltY: 0,
//   rotZ: 0,
// };

// const TelemetryDisplay = () => {
//   const [telemetryData, setTelemetryData] = useState(initialTelemetryData);

//   useEffect(() => {
//     const updateInterval = setInterval(() => {
//       // Generate new telemetry data with random values
//       const newData = {
//         packetCount: Math.random(),
//         mode: Math.floor(Math.random() * 256),
//         state: Math.floor(Math.random() * 256),
//         altitude: Math.random() * 10000,
//         temperature: Math.random() * 100,
//         pressure: Math.random() * 1000,
//         voltage: Math.random() * 10,
//         gpsTime: Date.now(),
//         gpsLatitude: (Math.random() * 180) - 90,
//         gpsLongitude: (Math.random() * 360) - 180,
//         gpsSats: Math.floor(Math.random() * 20),
//         tiltX: Math.random() * 360,
//         tiltY: Math.random() * 360,
//         rotZ: Math.random() * 360,
//       };
//       setTelemetryData(newData);
//     }, 1000); // Update every 1000 milliseconds (1 second)

//     // Cleanup function to clear the interval when the component is unmounted
//     return () => clearInterval(updateInterval);
//   }, []);

//   return (
//     <div>
//       <h2>Telemetry Data</h2>
//       <div>
//         {Object.entries(telemetryData).map(([key, value]) => (
//           <div key={key}>
//             <strong>{key.replace(/([A-Z])/g, ' $1').trim()}: </strong>{value.toFixed ? value.toFixed(2) : value}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TelemetryDisplay;
