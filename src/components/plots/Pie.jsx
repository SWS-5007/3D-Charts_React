import { OrbitControls } from "@react-three/drei";
import React from "react";
import * as THREE from "three";
import { extend } from "@react-three/fiber";
import ClosedCylinder from "../common/ClosedCylinder";

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
      <directionalLight position={(4, 3, 10)} intensity={1} />

      {data.map((pie) => {
        const theta = (pie.value * 2 * Math.PI) / total;
        const start = thetaStart;
        const height = (pie.value / total) * 5;
        thetaStart += theta;

        return (
          <>
            <ClosedCylinder
              color={pie.color}
              thetaLength={theta}
              thetaStart={start}
              height={height}
            />
          </>
        );
      })}
    </>
  );
};

export default Pie;
