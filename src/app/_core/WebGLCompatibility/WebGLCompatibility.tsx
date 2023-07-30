"use client";

import { ReactElement } from "react";
import { useWebGLCompatibility } from "./useWebGLCompatibility";

type WebGLCompatibilityProps = {
  loading?: ReactElement;
  fallback?: ReactElement;
  children: ReactElement | ReactElement[];
};

export const WebGLCompatibility = ({
  loading,
  fallback,
  children,
}: WebGLCompatibilityProps) => {
  const { compatibilityState, errorMessage } = useWebGLCompatibility();
  return (
    <>
      {compatibilityState === "checking" && loading}
      {compatibilityState === "available" && children}
      {compatibilityState === "unavailable" &&
        (fallback ?? ErrorDialog({ errorMessage: errorMessage! }))}
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
