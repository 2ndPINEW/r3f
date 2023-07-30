"use client";

import { WebGLCompatibility } from "@/app/_core/WebGLCompatibility/WebGLCompatibility";
import { RotateBox } from "./_components/001-hello-world/rotateBox";
import { DrawLine } from "./_components/001-hello-world/drawLine";

export default function Page() {
  return (
    <main>
      <WebGLCompatibility
        canvas={
          <>
            <div>RotateBox</div>
            <RotateBox />
            <div>DrawLine</div>
            <DrawLine />
          </>
        }
      />
    </main>
  );
}
