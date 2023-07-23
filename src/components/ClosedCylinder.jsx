import { useThree } from "@react-three/fiber";
import * as THREE from "three";
import React from "react";

const ClosedCylinder = ({
  thetaStart = 0,
  thetaLength = 0,
  height = 1,
  color = "white",
}) => {
  const { scene } = useThree();

  const hinge = new THREE.Object3D();
  scene.add(hinge);

  const planeGeometry = new THREE.PlaneGeometry(2, height);
  const planeMaterial = new THREE.MeshStandardMaterial({
    color,
    side: THREE.DoubleSide,
  }); // Set your desired material
  const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
  planeMesh.position.z = 1;
  planeMesh.position.y = height / 2;
  planeMesh.rotation.y = Math.PI / 2;
  hinge.add(planeMesh);

  const hinge2 = new THREE.Object3D();
  scene.add(hinge2);

  const planeGeometry2 = new THREE.PlaneGeometry(2, height);
  const planeMaterial2 = new THREE.MeshStandardMaterial({
    color,
    side: THREE.DoubleSide,
  }); // Set your desired material
  const planeMesh2 = new THREE.Mesh(planeGeometry2, planeMaterial2);
  planeMesh2.position.z = 1;
  planeMesh2.position.y = height / 2;
  planeMesh2.rotation.y = Math.PI / 2;
  hinge2.add(planeMesh2);

  hinge.setRotationFromAxisAngle(new THREE.Vector3(0, 1, 0), thetaStart);

  hinge2.setRotationFromAxisAngle(
    new THREE.Vector3(0, 1, 0),
    thetaLength + thetaStart
  );

  return (
    <>
      <mesh position-y={height / 2}>
        <cylinderGeometry
          args={[2, 2, height, 30, 30, false, thetaStart, thetaLength]}
        />
        <meshStandardMaterial roughness={0.5} color={color} />
      </mesh>
    </>
  );
};

export default ClosedCylinder;
