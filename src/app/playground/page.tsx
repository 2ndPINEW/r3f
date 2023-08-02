import { WebGLCompatibility } from "@/app/_core/WebGLCompatibility/WebGLCompatibility";
import { RotateBox } from "./_components/001-hello-world/rotateBox";
import { DrawLine } from "./_components/001-hello-world/drawLine";
import { HelloR3f } from "./_components/001-hello-world/helloR3f";

export default function Page() {
  return (
    <main>
      <WebGLCompatibility loading={<div>Checking...</div>}>
        <h2>RotateBox</h2>
        <RotateBox />

        <h2>HelloR3f</h2>
        <HelloR3f></HelloR3f>

        <h2>DrawLine</h2>
        <DrawLine />
      </WebGLCompatibility>
    </main>
  );
}
