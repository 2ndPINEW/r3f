"use client";

import { WebGLCompatibility } from "@/app/_core/WebGLCompatibility/WebGLCompatibility";
import { RotateBox } from "./_components/rotateBox";

export default function Page() {
  return (
    <main>
      <WebGLCompatibility canvas={<RotateBox></RotateBox>} />
    </main>
  );
}
