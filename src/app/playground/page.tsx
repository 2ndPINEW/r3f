import { WebGLCompatibility } from "@/app/_core/WebGLCompatibility/WebGLCompatibility";
import { RotateBox } from "./_components/001-hello-world/rotateBox";
import { DrawLine } from "./_components/001-hello-world/drawLine";

export default function Page() {
  return (
    <main>
      <WebGLCompatibility
        loading={<div>loading</div>}
        fallback={<div>fallback</div>}
      >
        <div>RotateBox</div>
        <RotateBox />
        <div>DrawLine</div>
        <DrawLine />
      </WebGLCompatibility>
      <p>heloo</p>
    </main>
  );
}
