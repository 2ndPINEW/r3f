import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

function Line() {
  const ref = useRef<Mesh>();

  return (
    <mesh ref={ref as any}>
      <bufferGeometry />
      <meshStandardMaterial color={"orange"} />
    </mesh>
  );
}

export const DrawLine = () => {
  return (
    <Canvas>
      <Line />
    </Canvas>
  );
};
