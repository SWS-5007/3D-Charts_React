import { AiOutlineArrowLeft } from "react-icons/ai";
import { Canvas } from "@react-three/fiber";
import { Link, useParams } from "react-router-dom";
import queryString from "query-string";
import React, { useCallback, useEffect, useState } from "react";

import Line from "./Line";
import Pie from "../plots/Pie";
import SideBar from "./SideBar";

import {
  getLineChart,
  initialData as lineChartInitialData,
} from "../../services/line-chart";
import {
  getPieChart,
  initialData as pieChartInitialData,
} from "../../services/pie-chart";

const PlotContainer = () => {
  const [cameraPosition, setCameraPosition] = useState([5, 6, 10]);
  const [fontSize, setFontSize] = useState(1.4);
  const [lineChart, setLineChart] = useState(lineChartInitialData);
  const [pieChart, setPieChart] = useState(pieChartInitialData);
  const [showAxisLabel, setShowAxisLabels] = useState(false);
  const [showVertices, setShowVertices] = useState(true);
  const { id } = useParams();
  const { type } = queryString.parse(window.location.search);

  const handleAlignAxis = (e) => {
    const value = e.target.value;
    if (!value) return;
    if (value === "-X") setCameraPosition([-15, 0, 0]);
    if (value === "-Y") setCameraPosition([0, -15, 0]);
    if (value === "-Z") setCameraPosition([0, 0, -15]);
    if (value === "X") setCameraPosition([15, 0, 0]);
    if (value === "Y") setCameraPosition([0, 15, 0]);
    if (value === "Z") setCameraPosition([0, 0, 15]);
  };

  const fetchLineChart = useCallback(async () => {
    try {
      const { data: chart } = await getLineChart(id);
      setLineChart(chart);
      console.log(chart);
    } catch (error) {
      window.location = "/not-found";
    }
  }, [id]);

  const fetchPieChart = useCallback(async () => {
    try {
      const { data: chart } = await getPieChart(id);
      setPieChart(chart);
    } catch (error) {
      window.location = "/not-found";
    }
  }, [id]);

  useEffect(() => {
    if (type === "line") fetchLineChart();
    else if (type === "pie") fetchPieChart();
    else window.location = "/not-found";
  }, [fetchLineChart, fetchPieChart, type]);

  const handleShowVertices = (event) => {
    setShowVertices(event.target.checked);
  };

  const handleShowAxisLabel = (event) => {
    setShowAxisLabels(event.target.checked);
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
        <Link to="/plots" className="return">
          <AiOutlineArrowLeft size={20} color="black" />
        </Link>
        <Canvas camera={{ position: cameraPosition }}>
          {type === "line" && (
            <Line
              cameraPosition={cameraPosition}
              fontSize={fontSize}
              lineChart={lineChart}
              showAxisLabel={showAxisLabel}
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
          fontSize={fontSize}
          lineChart={lineChart}
          onAlignAxis={handleAlignAxis}
          onCaptureImage={handleCaptureImage}
          onFontSizeChange={handleFontSize}
          onShowAxisLabel={handleShowAxisLabel}
          onShowVertices={handleShowVertices}
          pieChart={pieChart}
          showAxisLabel={showAxisLabel}
          showVertices={showVertices}
          type={type}
        />
      </section>
    </>
  );
};

export default PlotContainer;
