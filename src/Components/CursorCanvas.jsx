"use client";
import useCanvasCursor from "../Hooks/useCanvasCursor";
const CanvasCursor = () => {
  useCanvasCursor();
  return <canvas className="pointer-events-none fixed inset-0" style={{backgroundColor:'transparent',height:"100vh",position:"fixed",pointerEvents: "none" }} id="canvas" />;
};
export default CanvasCursor;
