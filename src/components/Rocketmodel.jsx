import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { MeshStandardMaterial, Euler } from 'three';

const Rocketmodel = ({ orientation }) => {
  // Load GLTF model
  const { scene } = useGLTF('rocket.gltf');

  // Create material
  const material = new MeshStandardMaterial({ color: 0xff0000 });

  // Convert orientation to radians
  const euler = new Euler(
    (orientation.x || 0) * (Math.PI / 180),
    (orientation.y || 0) * (Math.PI / 180),
    (orientation.z || 0) * (Math.PI / 180)
  );

  return (
    <div style={{ width: '440px', height: '440px'}}>
      <Canvas className="cursor-pointer" frameloop="demand" camera={{ position: [0, 0, 10], fov: 45 }}>
        <OrbitControls />
        <primitive object={scene} scale={[0.01, 0.01, 0.01]} material={material} rotation={euler} />
      </Canvas>
    </div>
  );
};

export default Rocketmodel;
