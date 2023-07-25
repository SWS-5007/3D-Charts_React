import { Html, OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";
import React, { useEffect, useState } from "react";

import { handleCreateVertices } from "../../services/utils";
import Axis from "../axes/Axis";

const Line = ({
  cameraPosition,
  fontSize,
  lineChart,
  showAxisLabel,
  showVertices,
}) => {
  const [points, setPoints] = useState([]);
  const { scene, camera } = useThree();

  useEffect(() => {
    camera.position.set(...cameraPosition);
  }, [cameraPosition, camera.position]);

  useEffect(() => {
    const points = [];
    for (let plot of lineChart.lines) {
      const verticesArray = handleCreateVertices(plot.vertices);
      const vertices = [];

      for (let i = 0; i < verticesArray.length; i++) {
        points.push(verticesArray[i]);
        vertices.push(
          new THREE.Vector3(
            verticesArray[i][0],
            verticesArray[i][1],
            verticesArray[i][2]
          )
        );
      }

      const curve = new THREE.CatmullRomCurve3(vertices);
      const geometry = new THREE.BufferGeometry().setFromPoints(
        curve.getPoints(100)
      );
      const material = new THREE.LineBasicMaterial({
        color: plot.color,
        linewidth: 5,
      });
      const line = new THREE.Line(geometry, material);
      scene.add(line);
    }

    setPoints(points);
  }, [lineChart, scene]);

  return (
    <>
      <OrbitControls />
      <Axis />
      {showAxisLabel && (
        <>
          {" "}
          <Html position-x={10}>
            <p
              style={{
                color: "#858585",
                fontSize: `${fontSize}rem`,
                width: "300px",
              }}
            >
              {lineChart.labelX}
            </p>
          </Html>
          <Html position-y={10}>
            <p
              style={{
                color: "#858585",
                fontSize: `${fontSize}rem`,
                width: "300px",
              }}
            >
              {lineChart.labelY}
            </p>
          </Html>
          <Html position-z={10}>
            <p
              style={{
                color: "#858585",
                fontSize: `${fontSize}rem`,
                width: "300px",
              }}
            >
              {lineChart.labelZ}
            </p>
          </Html>
        </>
      )}
      <>
        {points.map((vertex, index) => (
          <>
            <mesh position={[vertex[0], vertex[1], vertex[2]]}>
              <sphereGeometry args={[0.04]} />
              <meshBasicMaterial color={"black"} />
            </mesh>
            {showVertices && (
              <Html key={index} position={vertex}>
                <p
                  style={{
                    color: "black",
                    fontSize: `${fontSize}rem`,
                    width: "100%",
                    minWidth: "300px",
                    transform: "translate(0, -200%)",
                  }}
                >
                  ({vertex[0]}, {vertex[1]}, {vertex[2]})
                </p>
              </Html>
            )}
          </>
        ))}
      </>
    </>
  );
};

export default Line;
