import React from "react";
import Axis from "./Axis";
import { Html, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { useThree } from "@react-three/fiber";

const Line = ({ fontSize, showVertices }) => {
  const { scene } = useThree();
  const vertices = [
    new THREE.Vector3(0, 0, 2),
    new THREE.Vector3(1, 1, 2),
    new THREE.Vector3(2, 3, 2),
    new THREE.Vector3(3, 1, 2),
    new THREE.Vector3(4, 5, 2),
    new THREE.Vector3(5, 2, 2),
  ];
  const vertices2 = [
    new THREE.Vector3(0, 0, 2 + 2),
    new THREE.Vector3(1, 2, 2 + 2),
    new THREE.Vector3(2, 1, 2 + 2),
    new THREE.Vector3(3, 4, 2 + 2),
    new THREE.Vector3(4, 3, 2 + 2),
    new THREE.Vector3(5, 6, 2 + 2),
  ];

  const curve = new THREE.CatmullRomCurve3(vertices);
  const curve2 = new THREE.CatmullRomCurve3(vertices2);
  const geometry = new THREE.BufferGeometry().setFromPoints(
    curve.getPoints(100)
  );
  const geometry2 = new THREE.BufferGeometry().setFromPoints(
    curve2.getPoints(200)
  );
  const material = new THREE.LineBasicMaterial({ color: "red", linewidth: 5 });
  const material2 = new THREE.LineBasicMaterial({
    color: "blue",
    linewidth: 5,
  });
  const line = new THREE.Line(geometry, material);
  const line2 = new THREE.Line(geometry2, material2);
  scene.add(line);
  scene.add(line2);

  return (
    <>
      <OrbitControls />
      <Axis />
      {showVertices && (
        <>
          {vertices.map((vertex) => (
            <Html
              key={`${vertex.x}, ${vertex.y}, ${vertex.z}`}
              position={vertex}
            >
              <p
                style={{
                  color: "black",
                  fontSize: `${fontSize}rem`,
                  width: "100%",
                  minWidth: "300px",
                  transform: "translate(-5%, -200%)",
                }}
              >
                ({vertex.x}, {vertex.y}, {vertex.z})
              </p>
            </Html>
          ))}

          {vertices2.map((vertex) => (
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
                ({vertex.x}, {vertex.y}, {vertex.z})
              </p>
            </Html>
          ))}
        </>
      )}
    </>
  );
};

export default Line;
