import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const RotatingCube = ({ transparentBackground }) => {
  const containerRef = useRef();

  useEffect(() => {
    // Create a scene
    const scene = new THREE.Scene();

    // Create a camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Create a renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); // Set alpha to true for transparent background
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Create a cube geometry
    const geometry = new THREE.BoxGeometry();
    // Create a material
    const material = transparentBackground
      ? new THREE.MeshBasicMaterial({ color: 0x00ff00, transparent: true, opacity: 0.5 }) // Transparent background
      : new THREE.MeshBasicMaterial({ color: 0xffffff }); // White background
    // Create a mesh
    const cube = new THREE.Mesh(geometry, material);
    // Add the mesh to the scene
    scene.add(cube);

    // Function to animate the cube
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the cube
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      // Render the scene
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup function
    return () => {
      // Remove the renderer dom element
      containerRef.current.removeChild(renderer.domElement);
    };
  }, [transparentBackground]);

  return <div ref={containerRef} />;
};

export default RotatingCube;
