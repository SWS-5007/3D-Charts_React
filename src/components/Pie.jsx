import { OrbitControls } from "@react-three/drei";
import React from "react";
import * as THREE from "three";

const Pie = () => {
  const geometry = new THREE.CylinderGeometry(
    2,
    2,
    1,
    60,
    10,
    false,
    0,
    Math.PI / 2
  );
  const geometry2 = new THREE.CylinderGeometry(
    2,
    2,
    1,
    60,
    10,
    false,
    Math.PI / 2,
    Math.PI / 6
  );
  const geometry3 = new THREE.CylinderGeometry(
    2,
    2,
    1,
    60,
    10,
    false,
    (2 * Math.PI) / 3,
    Math.PI / 2
  );
  const geometry4 = new THREE.CylinderGeometry(
    2,
    2,
    1,
    60,
    10,
    false,
    (2 * Math.PI) / 3 + Math.PI / 2,
    Math.PI / 2
  );
  const geometry5 = new THREE.CylinderGeometry(
    2,
    2,
    1,
    60,
    10,
    false,
    (2 * Math.PI) / 3 + Math.PI,
    Math.PI / 3
  );

  return (
    <>
      <OrbitControls />
      <ambientLight />
      <directionalLight position={(2, 3, 4)} intensity={0.1} />
      {/* <Axis /> */}
      <mesh geometry={geometry}>
        <meshStandardMaterial
          roughness={0.5}
          side={THREE.DoubleSide}
          color="red"
        />
      </mesh>
      <mesh geometry={geometry2}>
        <meshStandardMaterial
          roughness={0.5}
          side={THREE.DoubleSide}
          color="dodgerblue"
        />
      </mesh>
      <mesh geometry={geometry3}>
        <meshStandardMaterial
          roughness={0.5}
          side={THREE.DoubleSide}
          color="orange"
        />
      </mesh>
      <mesh geometry={geometry4}>
        <meshStandardMaterial
          roughness={0.5}
          side={THREE.DoubleSide}
          color="GREEN"
        />
      </mesh>
      <mesh geometry={geometry5}>
        <meshStandardMaterial
          roughness={0.5}
          side={THREE.DoubleSide}
          color="YELLOW"
        />
      </mesh>
    </>
  );
};

export default Pie;
