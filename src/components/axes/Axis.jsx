import { Html } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";
import React from "react";

import AxisPoints from "./AxisPoints";

const Axis = () => {
  const { scene } = useThree();
  const axisColors = { x: "#7d0000", y: "#61f75c", z: "#1f5de0" };

  const points = [];

  points.push(new THREE.Vector3(0, -50, 0));
  points.push(new THREE.Vector3(0, 50, 0));

  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  const material = new THREE.LineBasicMaterial({ color: axisColors.y });
  const lineY = new THREE.Line(geometry, material);

  for (let i = 0; i < 1; i++) {
    const pointsX = [];
    const pointsZ = [];
    pointsX.push(new THREE.Vector3(-50, 0, i));
    pointsX.push(new THREE.Vector3(50, 0, i));

    pointsZ.push(new THREE.Vector3(i, 0, 50));
    pointsZ.push(new THREE.Vector3(i, 0, -50));
    const geometryX = new THREE.BufferGeometry().setFromPoints(pointsX);
    const materialX = new THREE.LineBasicMaterial({ color: axisColors.x });
    const geometryZ = new THREE.BufferGeometry().setFromPoints(pointsZ);
    const materialY = new THREE.LineBasicMaterial({ color: axisColors.z });
    const lineX = new THREE.Line(geometryX, materialX);
    const lineZ = new THREE.Line(geometryZ, materialY);
    scene.add(lineX);
    scene.add(lineZ);
  }

  scene.add(lineY);
  return (
    <>
      <AxisPoints />
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
