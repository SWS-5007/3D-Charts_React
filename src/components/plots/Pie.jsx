import { useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import React, { useEffect } from "react";

import ClosedCylinder from "../common/ClosedCylinder";

const Pie = ({ data, cameraPosition }) => {
  const { camera } = useThree();
  let thetaStart = 0;

  useEffect(() => {
    camera.position.set(...cameraPosition);
  }, [cameraPosition, camera.position]);

  const total = data.values.reduce((a, b) => (a += b.value), 0);

  return (
    <>
      <OrbitControls />
      <ambientLight />
      <directionalLight position={(4, 3, 10)} intensity={1} />

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
    </>
  );
};

export default Pie;
