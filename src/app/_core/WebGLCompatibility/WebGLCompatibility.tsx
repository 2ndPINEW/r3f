import { ReactElement } from "react";
import { useWebGLCompatibility } from "./useWebGLCompatibility";

type WebGLCompatibilityProps = {
  loading?: ReactElement;
  canvas: ReactElement;
  fallback?: ReactElement;
};

export const WebGLCompatibility = ({
  loading,
  canvas,
  fallback,
}: WebGLCompatibilityProps) => {
  const { compatibilityState, errorMessage } = useWebGLCompatibility();
  return (
    <>
      {compatibilityState === "checking" && loading}
      {compatibilityState === "available" && canvas}
      {compatibilityState === "unavailable" &&
        (fallback ?? ErrorDialog({ errorMessage }))}
    </>
  );
};

const ErrorDialog = ({ errorMessage }: { errorMessage: HTMLElement }) => {
  return (
    <main>
      <h1>WebGL is not available</h1>
      <div dangerouslySetInnerHTML={{ __html: errorMessage.outerHTML }}></div>
    </main>
  );
};
