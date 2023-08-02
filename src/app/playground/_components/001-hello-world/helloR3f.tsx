"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export const HelloR3f = () => {
  return (
    <Canvas
      camera={{ fov: 75, near: 0.1, far: 500, position: [0, 0, 100] }}
      style={{ height: "400px" }}
    >
      <OrbitControls makeDefault />
      <ambientLight intensity={0.1} />
      <directionalLight color="white" position={[100, 100, 100]} />
      <mesh>
        <torusGeometry args={[30, 10, 64, 64]} />
        <meshToonMaterial args={[{ color: 0x00ff00 }]} />
      </mesh>
    </Canvas>
  );
};
