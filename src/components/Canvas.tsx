import React, { useEffect, useRef } from "react";
import useWindowDimensions from "../app/hooks/useDimensions.ts";
import canvasState from "../app/store/canvasState.ts";

const Canvas = () => {
  const canvasRef = useRef(null);
  const { width, height } = useWindowDimensions(canvasState.onCanvasResize);

  useEffect(() => {
    if (canvasRef.current) {
      canvasState.setCanvas(canvasRef.current);
    }
    // window.canvasState = canvasState;
    if (!canvasState.drawer) return;
    // canvasState.drawer.lineWidth = 50;
    // canvasState.drawer.fillStyle = "red";
    // canvasState.drawer.strokeStyle = "rgba(13, 48, 102, 0.1)";
    // canvasState.drawer.lineCap = "round";

    return () => {
      clean(canvasRef, canvasState);
    };
  }, []);

  return (
    <div className="Canvas">
      <canvas id="canvas" ref={canvasRef} width={width} height={height} />
    </div>
  );
};

function clean(canvasRef, canvasState) {
  canvasState.destroy();
  canvasRef.current.onmousedown = null;
  canvasRef.current.onmousemove = null;
  canvasRef.current.onmouseup = null;
}
export default Canvas;
