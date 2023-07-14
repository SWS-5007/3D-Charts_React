import { OrbitControls } from "@react-three/drei";
import React from "react";
import * as THREE from "three";

const ClosedCylinder = () => {
  const thetaStart = Math.PI / 6;
  const thetaLength = Math.PI / 4;
  return (
    <>
      <axesHelper scale={10} />
      <OrbitControls />
      <mesh position-x={1} rotation-y={thetaStart + Math.PI / 2}>
        <planeGeometry args={[2, 5]} />
        <meshNormalMaterial side={THREE.DoubleSide} />
      </mesh>
      <mesh position-z={0} rotation-y={thetaLength + Math.PI / 2}>
        <planeGeometry args={[2, 5]} />
        <meshNormalMaterial side={THREE.DoubleSide} />
      </mesh>
      <mesh>
        <cylinderGeometry
          args={[2, 2, 5, 10, 10, false, thetaStart, thetaLength]}
        />
        <meshNormalMaterial side={THREE.DoubleSide} />
      </mesh>
    </>
  );
};

export default ClosedCylinder;
