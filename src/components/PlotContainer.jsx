import { Canvas } from "@react-three/fiber";
import React, { useState } from "react";
import { saveAs } from "file-saver";

import Line from "./Line";
import Pie from "./Pie";
import SideBar from "./SideBar";

const PlotContainer = () => {
  const [fontSize, setFontSize] = useState(0.4);
  const [showVertices, setShowVertices] = useState(true);

  const handleShowVertices = (event) => {
    setShowVertices(event.target.checked);
  };

  const handleFontSize = (event) => {
    setFontSize(event.target.value);
  };

  const handleCaptureImage = () => {
    const canvas = document.querySelector("canvas");

    const tempCanvas = document.createElement("canvas");
    tempCanvas.width = canvas.width;
    tempCanvas.height = canvas.height;

    const ctx = tempCanvas.getContext("2d");
    ctx.drawImage(canvas, 0, 0);

    const dataURL = canvas.toDataURL();
    console.log(dataURL);

    // saveAs(dataURL, "chart.png");
  };

  return (
    <>
      <section className="plot-container">
        <Canvas camera={{ position: [5, 6, 10] }}>
          <Line fontSize={fontSize} showVertices={showVertices} />
        </Canvas>
        <SideBar
          fontSize={fontSize}
          onFontSizeChange={handleFontSize}
          onShowVertices={handleShowVertices}
          showVertices={showVertices}
          onCaptureImage={handleCaptureImage}
        />
      </section>
    </>
  );
};

export default PlotContainer;
