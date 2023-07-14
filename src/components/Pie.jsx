import { OrbitControls } from "@react-three/drei";
import React, { useState } from "react";
import * as THREE from "three";
import { extend } from "@react-three/fiber";

extend(THREE.CylinderGeometry);

const Pie = () => {
  let thetaStart = 0;

  const data = [
    {
      value: 10,
      label: "Football",
      color: "orange",
    },
    {
      value: 5,
      label: "Hockey",
      color: "red",
    },
    {
      value: 10,
      label: "Cricket",
      color: "yellow",
    },
    {
      value: 15,
      label: "Baseball",
      color: "green",
    },
    {
      value: 20,
      label: "Badminton",
      color: "blue",
    },
  ];

  const total = data.reduce((a, b) => (a += b.value), 0);
  console.log(total);

  return (
    <>
      <OrbitControls />
      <ambientLight />
      <directionalLight position={(2, 3, 4)} intensity={0.1} />

      {data.map((pie) => {
        const theta = (pie.value * 2 * Math.PI) / total;
        const start = thetaStart;
        const height = (pie.value / total) * 5;
        thetaStart += theta;

        return (
          <>
            <mesh position-y={height / 2} key={pie.label}>
              <cylinderGeometry
                args={[3, 3, height, 20, 20, false, start, theta]}
              />
              <meshBasicMaterial color={pie.color} side={THREE.DoubleSide} />
            </mesh>
          </>
        );
      })}
    </>
  );
};

export default Pie;
