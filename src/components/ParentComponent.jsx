// ParentComponent.js
import React, { useState, useEffect } from 'react';
import Rocketmodel from './Rocketmodel';

const ParentComponent = () => {
  const [orientation, setOrientation] = useState({ x: 0, y: 0, z: 0 });

  // Simulate receiving data
  useEffect(() => {
    const interval = setInterval(() => {
      setOrientation({
        x: Math.random() * 360,
        y: Math.random() * 360,
        z: Math.random() * 360,
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <Rocketmodel orientation={orientation} />;
};

export default ParentComponent;
