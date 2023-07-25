import { Html, OrbitControls } from "@react-three/drei";
import React, { useEffect } from "react";
import * as THREE from "three";
import { extend, useThree } from "@react-three/fiber";
import ClosedCylinder from "../common/ClosedCylinder";
import Axis from "../axes/Axis";

extend(THREE.CylinderGeometry);

const Pie = ({ data, fontSize, cameraPosition }) => {
  const { scene, camera } = useThree();
  let thetaStart = 0;

  useEffect(() => {
    camera.position.set(...cameraPosition);
  }, [cameraPosition]);

  const total = data.values.reduce((a, b) => (a += b.value), 0);

  return (
    <>
      <OrbitControls />
      <ambientLight />
      <directionalLight position={(4, 3, 10)} intensity={1} />

      <group>
        {data.values.map((pie) => {
          const theta = (pie.value * 2 * Math.PI) / total;
          const start = thetaStart;
          const height = (pie.value / total) * 5;
          thetaStart += theta;
          return (
            <React.Fragment key={pie.label}>
              <ClosedCylinder
                color={pie.color}
                thetaLength={theta}
                thetaStart={start}
                height={height}
              />
            </React.Fragment>
          );
        })}
      </group>
    </>
  );
};

export default Pie;
