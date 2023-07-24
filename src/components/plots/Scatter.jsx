import { useThree, extend } from "@react-three/fiber";
import React from "react";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";
import Axis from "../axes/Axis";

extend({ OrbitControls });

function Scatter() {
  const { scene } = useThree();

  const sphereGeometry = new THREE.SphereGeometry(0.07);
  const sphereMaterial = new THREE.MeshBasicMaterial({
    color: Math.random() > 0.5 ? "black" : "red",
  });

  for (let i = 0; i < 20; i++) {
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.set(
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10
    );
    scene.add(sphere);
  }

  return (
    <>
      <Axis />
      <OrbitControls />
    </>
  );
}

export default Scatter;
