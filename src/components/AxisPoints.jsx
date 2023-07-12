import { useThree } from "@react-three/fiber";
import * as THREE from "three";
import React from "react";

const AxisPoints = () => {
  const { scene } = useThree();
  const particlesCount = 50;

  const verticesX = new Float32Array(particlesCount * 3 * 2);
  const verticesZ = new Float32Array(particlesCount * 3 * 2);
  const verticesY = new Float32Array(particlesCount * 3 * 2);

  for (
    let i = -particlesCount, j = 0;
    i < particlesCount, j < particlesCount * 3 * 2;
    i++, j += 3
  ) {
    verticesX[j] = i;
    verticesX[j + 1] = 0;
    verticesX[j + 2] = 0;
    verticesY[j] = 0;
    verticesY[j + 1] = i;
    verticesY[j + 2] = 0;
    verticesZ[j] = 0;
    verticesZ[j + 1] = 0;
    verticesZ[j + 2] = i;
  }

  console.log(verticesX);

  const geometryX = new THREE.BufferGeometry();
  geometryX.setAttribute("position", new THREE.BufferAttribute(verticesX, 3));
  const geometryY = new THREE.BufferGeometry();
  geometryY.setAttribute("position", new THREE.BufferAttribute(verticesY, 3));
  const geometryZ = new THREE.BufferGeometry();
  geometryZ.setAttribute("position", new THREE.BufferAttribute(verticesZ, 3));
  const pointsMaterial = new THREE.PointsMaterial({
    color: "black",
    size: 0.05,
    transparent: true,
    opacity: 0.2,
  });
  const pointsX = new THREE.Points(geometryX, pointsMaterial);
  const pointsY = new THREE.Points(geometryY, pointsMaterial);
  const pointsZ = new THREE.Points(geometryZ, pointsMaterial);

  scene.add(pointsX);
  scene.add(pointsY);
  scene.add(pointsZ);

  return <></>;
};

export default AxisPoints;
