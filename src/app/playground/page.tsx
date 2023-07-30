"use client";

import { WebGLCompatibility } from "@/app/_core/WebGLCompatibility/WebGLCompatibility";
import { RotateBox } from "./_components/001-hello-world/rotateBox";

export default function Page() {
  return (
    <main>
      <WebGLCompatibility
        canvas={
          <>
            <div>RotateBox</div>
            <RotateBox />
          </>
        }
      />
    </main>
  );
}
