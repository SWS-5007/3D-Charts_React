import { Html, OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";
import React, { useEffect, useState } from "react";

import { handleCreateVertices } from "../../services/utils";
import Axis from "../axes/Axis";

const Line = ({ fontSize, showVertices, lineChart }) => {
  const { scene } = useThree();
  const [points, setPoints] = useState([]);

  useEffect(() => {
    const points = [];
    for (let plot of lineChart.plots) {
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
  }, []);

  return (
    <>
      <OrbitControls />
      <Axis />
      {showVertices && (
        <>
          {points.map((vertex) => (
            <Html
              key={`${vertex.x}, ${vertex.y}, ${vertex.z}`}
              position={vertex}
            >
              <p
                style={{
                  color: "black",
                  fontSize: `${fontSize}rem`,
                  width: "50px",
                  width: "100%",
                  minWidth: "300px",
                  transform: "translate(0, -200%)",
                }}
              >
                ({vertex[0]}, {vertex[1]}, {vertex[2]})
              </p>
            </Html>
          ))}
        </>
      )}
    </>
  );
};

export default Line;
