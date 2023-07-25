import { Canvas, useThree } from "@react-three/fiber";
import { useParams } from "react-router-dom";
import Line from "./Line";
import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import queryString from "query-string";
import {
  getLineChart,
  initialData as lineChartInitialData,
} from "../../services/line-chart";
import {
  getPieChart,
  initialData as pieChartInitialData,
} from "../../services/pie-chart";
import Pie from "../plots/Pie";

const PlotContainer = () => {
  const [fontSize, setFontSize] = useState(1.4);
  const [showVertices, setShowVertices] = useState(true);
  const { id } = useParams();
  const [lineChart, setLineChart] = useState(lineChartInitialData);
  const [pieChart, setPieChart] = useState(pieChartInitialData);
  const { type } = queryString.parse(window.location.search);
  const { alignAxis, setAlignAxis } = useState("");
  const [cameraPosition, setCameraPosition] = useState([5, 6, 10]);

  const handleAlignAxis = (e) => {
    const value = e.target.value;
    if (!value) return;
    if (value === "X") setCameraPosition([15, 0, 0]);
    if (value === "Y") setCameraPosition([0, 15, 0]);
    if (value === "Z") setCameraPosition([0, 0, 15]);
    if (value === "-X") setCameraPosition([-15, 0, 0]);
    if (value === "-Y") setCameraPosition([0, -15, 0]);
    if (value === "-Z") setCameraPosition([0, 0, -15]);
  };

  const fetchLineChart = async () => {
    try {
      const { data: chart } = await getLineChart(id);
      setLineChart(chart);
      console.log(chart);
    } catch (error) {
      window.location = "/not-found";
    }
  };

  const fetchPieChart = async () => {
    try {
      const { data: chart } = await getPieChart(id);
      setPieChart(chart);
    } catch (error) {
      window.location = "/not-found";
    }
  };

  useEffect(() => {
    if (type === "line") fetchLineChart();
    if (type === "pie") fetchPieChart();
  }, []);

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
        <Canvas camera={{ position: cameraPosition }}>
          {type === "line" && (
            <Line
              cameraPosition={cameraPosition}
              lineChart={lineChart}
              fontSize={fontSize}
              showVertices={showVertices}
            />
          )}
          {type === "pie" && (
            <Pie
              cameraPosition={cameraPosition}
              data={pieChart}
              fontSize={fontSize}
              showVertices={showVertices}
            />
          )}
        </Canvas>
        <SideBar
          type={type}
          pieChart={pieChart}
          lineChart={lineChart}
          fontSize={fontSize}
          onFontSizeChange={handleFontSize}
          onShowVertices={handleShowVertices}
          showVertices={showVertices}
          onCaptureImage={handleCaptureImage}
          onAlignAxis={handleAlignAxis}
        />
      </section>
    </>
  );
};

export default PlotContainer;
