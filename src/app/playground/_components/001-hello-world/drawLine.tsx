"use client";
import * as THREE from "three";
import { useMemo } from "react";
import { Canvas } from "@react-three/fiber";

const Particles = () => {
  const planePositions = useMemo(() => {
    const points = [];
    points.push(new THREE.Vector3(-10, 0, 0));
    points.push(new THREE.Vector3(0, 10, 0));
    points.push(new THREE.Vector3(10, 0, 0));
    return points;
  }, []);

  return (
    <line>
      {/* <geometry attach="geometry" vertices={planePositions} /> */}
      <lineBasicMaterial attach="material" color="red" />
    </line>
  );
};

export const DrawLine = () => {
  return (
    <Canvas dpr={2}>
      <Particles />
    </Canvas>
  );
};
