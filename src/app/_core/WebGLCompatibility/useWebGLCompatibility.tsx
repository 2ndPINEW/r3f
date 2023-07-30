import WebGL from "three/examples/jsm/capabilities/WebGL.js";
import { useEffect, useState } from "react";

type WebGLCompatibilityState = "checking" | "available" | "unavailable";

export const useWebGLCompatibility = () => {
  const [compatibilityState, setCompatibilityState] =
    useState<WebGLCompatibilityState>("checking");

  const [errorMessage, setErrorMessage] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const isWebGLAvailable = WebGL.isWebGLAvailable();
    setCompatibilityState(isWebGLAvailable ? "available" : "unavailable");

    if (!isWebGLAvailable) {
      setErrorMessage(WebGL.getWebGLErrorMessage());
    }
  }, []);

  return {
    compatibilityState,
    errorMessage,
  };
};
