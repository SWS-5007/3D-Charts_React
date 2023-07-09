import { Html } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import React from "react";
import * as THREE from "three";

const Axis = () => {
  const { scene } = useThree();

  const pointsY = [];

  pointsY.push(new THREE.Vector3(0, -50, 0));
  pointsY.push(new THREE.Vector3(0, 50, 0));

  const geometryY = new THREE.BufferGeometry().setFromPoints(pointsY);
  const material = new THREE.LineBasicMaterial({
    color: "rgba(255, 255, 255)",
  });
  const lineY = new THREE.Line(geometryY, material);

  for (let i = 0; i < 1; i++) {
    const pointsX = [];
    const pointsZ = [];
    pointsX.push(new THREE.Vector3(-50, 0, i));
    pointsX.push(new THREE.Vector3(50, 0, i));

    pointsZ.push(new THREE.Vector3(i, 0, 50));
    pointsZ.push(new THREE.Vector3(i, 0, -50));
    const geometryX = new THREE.BufferGeometry().setFromPoints(pointsX);
    const geometryZ = new THREE.BufferGeometry().setFromPoints(pointsZ);
    const lineX = new THREE.Line(geometryX, material);
    const lineZ = new THREE.Line(geometryZ, material);
    scene.add(lineX);
    scene.add(lineZ);
  }

  scene.add(lineY);
  return (
    <>
      <Html>
        <p
          style={{
            color: "black",
            fontSize: ".4rem",
            width: "50px",
            transform: "translate(-25%, -25%)",
          }}
        >
          (0, 0, 0)
        </p>
      </Html>
    </>
  );
};

export default Axis;
