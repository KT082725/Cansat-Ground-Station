import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { MeshStandardMaterial } from 'three';

const Rocketmodel = () => {
  const earth = useGLTF('rocket.gltf');

  const material = new MeshStandardMaterial({ color: 0xff0000 });

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas className="cursor-pointer" frameloop="demand" camera={{ position: [0, 0, 10], fov: 45 }}>
        <OrbitControls autoRotate enableZoom={true} enablePan={true} />
        <primitive object={earth.scene} scale={[0.01, 0.01, 0.01]} material={material} />
      </Canvas>
    </div>
  );
};

export default Rocketmodel;
