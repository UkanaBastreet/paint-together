import { useEffect, useRef, useState } from "react"
import { io } from "socket.io-client"
import useWindowDimensions from "../app/hooks/useDemensions"
import canvasState from "../app/store/canvasState"

const Canvas = () => {
  const canvasRef = useRef(null)
  const { width, height } = useWindowDimensions(canvasState.onCanvasResize)

  useEffect(() => {
    if (canvasRef.current) {
      canvasState.setCanvas(canvasRef.current)
    }
    window.canvasState = canvasState
    canvasState.drawer.lineWidth = 50
    canvasState.drawer.fillStyle = "red"
    canvasState.drawer.strokeStyle = "rgba(13, 48, 102, 0.1)"
    canvasState.drawer.lineCap = "round"
    // const socket = io("http://localhost:3001")

    return () => {
      canvasState.destroy()
      canvasRef.current.onmousedown = null
      canvasRef.current.onmousemove = null
      canvasRef.current.onmouseup = null
    }
  }, [])

  return (
    <div className="Canvas">
      <canvas id="canvas" ref={canvasRef} width={width} height={height} />
    </div>
  )
}
export default Canvas
