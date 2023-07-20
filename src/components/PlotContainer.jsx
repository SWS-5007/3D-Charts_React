import { Canvas } from "@react-three/fiber";
import React, { useState } from "react";
import Line from "./Line";
import SideBar from "./SideBar";

const PlotContainer = () => {
  const [fontSize, setFontSize] = useState(0.15);

  return (
    <>
      <section class="plot-container">
        <Canvas camera={{ position: [5, 6, 10] }}>
          <Line fontSize={fontSize} />
        </Canvas>
        <SideBar fontSize={fontSize} />
      </section>
    </>
  );
};

export default PlotContainer;
