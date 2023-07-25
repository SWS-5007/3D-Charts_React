import { Html, OrbitControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import React, { useEffect, useState } from "react";

import { handleCreateVertices } from "../../services/utils";
import Axis from "../axes/Axis";

const Line = ({ fontSize, showVertices, lineChart, cameraPosition }) => {
  const { scene, camera } = useThree();
  const [points, setPoints] = useState([]);

  useEffect(() => {
    console.log("hello");
    camera.position.set(...cameraPosition);
  }, [cameraPosition]);

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
  }, []);

  return (
    <>
      <OrbitControls />
      <Axis />
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
                    width: "50px",
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
