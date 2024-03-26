import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const RotatingCube = ({ transparentBackground }) => {
  const containerRef = useRef();

  useEffect(() => {
    // Create a scene
    const scene = new THREE.Scene();

    // Create a camera
    const aspectRatio = 1; // Aspect ratio of the viewport
    const camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);
    camera.position.z = 5;

    // Create a renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Create a cube geometry
    const geometry = new THREE.BoxGeometry();
    // Create a material
    const material = transparentBackground
      ? new THREE.MeshBasicMaterial({ color: 0x00ff00, transparent: true, opacity: 0.5 })
      : new THREE.MeshBasicMaterial({ color: 0xffffff });
    // Create a mesh
    const cube = new THREE.Mesh(geometry, material);
    // Add the mesh to the scene
    scene.add(cube);

    // Function to adjust camera and render scene
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the cube
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      // Adjust camera aspect ratio to match container dimensions
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      // Render the scene
      renderer.setSize(width, height);
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup function
    return () => {
      // Remove the renderer dom element
      containerRef.current.removeChild(renderer.domElement);
    };
  }, [transparentBackground]);

  return (
    <div
      ref={containerRef}
      style={{
        border: '2px solid black', // Add a border around the component
        width: '300px', // Set the width of the component
        height: '300px', // Set the height of the component
      }}
    />
  );
};

export default RotatingCube;
