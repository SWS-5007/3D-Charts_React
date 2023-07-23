import { Canvas } from "@react-three/fiber";
import React, { useState } from "react";

import Line from "./Line";
import Pie from "./Pie";
import SideBar from "./SideBar";
import ClosedCylinder from "./ClosedCylinder";

const PlotContainer = () => {
  const [fontSize, setFontSize] = useState(0.15);

  return (
    <>
      <section class="plot-container">
        <Canvas camera={{ position: [5, 6, 10] }}>
          <Pie fontSize={fontSize} />
        </Canvas>
        <SideBar fontSize={fontSize} />
      </section>
    </>
  );
};

export default PlotContainer;
