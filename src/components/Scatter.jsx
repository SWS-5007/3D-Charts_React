import { useThree, extend } from "@react-three/fiber";
import React from "react";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";

extend({ OrbitControls });

function Scatter() {
  const { scene } = useThree();
  const pointsX = [];
  const pointsY = [];
  const pointsZ = [];

  pointsX.push(new THREE.Vector3(-10, 0, 0));
  pointsX.push(new THREE.Vector3(10, 0, 0));
  pointsY.push(new THREE.Vector3(0, -10, 0));
  pointsY.push(new THREE.Vector3(0, 10, 0));
  pointsZ.push(new THREE.Vector3(0, 0, -10));
  pointsZ.push(new THREE.Vector3(0, 0, 10));

  const geometryX = new THREE.BufferGeometry().setFromPoints(pointsX);
  const geometryY = new THREE.BufferGeometry().setFromPoints(pointsY);
  const geometryZ = new THREE.BufferGeometry().setFromPoints(pointsZ);
  const material = new THREE.LineBasicMaterial({ color: "black" });
  const lineX = new THREE.Line(geometryX, material);
  const lineY = new THREE.Line(geometryY, material);
  const lineZ = new THREE.Line(geometryZ, material);
  scene.add(lineX);
  scene.add(lineY);
  scene.add(lineZ);

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
      <OrbitControls />
    </>
  );
}

export default Scatter;
