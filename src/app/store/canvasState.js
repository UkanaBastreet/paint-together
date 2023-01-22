import { getCursorPosition } from "../../utils/canvas-functions"
import Drawer from "../tools/Drawer"

class CanvasState {
  history = []
  index = 0
  currFigure = []
  toolName = "Brush"
  drawer = null
  constructor() {
    this.clear = this.clear.bind(this)
    this.drawImage = this.drawImage.bind(this)
    this.setCanvas = this.setCanvas.bind(this)
  }
  setCanvas(canvas) {
    this.canvas = canvas
    this.ctx = canvas.getContext("2d")

    this.drawer = new Drawer(canvas)
    this.drawer.state = this
    this.listen()
  }
  listen() {
    this.canvas.onmousedown = this.onMouseDown.bind(this)
  }
  onMouseDown(e) {
    if (this.toolName !== null) {
      this.canvas.onmousemove = this.onMouseMove.bind(this)
      this.canvas.onmouseup = this.onMouseUp.bind(this)
      this.canvas.onmousedown = null

      this.isMouseDown = true
      this.currFigure = {
        toolName: this.toolName,
        coords: [getCursorPosition(this.ctx, e)],
      }
      this.url = this.canvas.toDataURL()
      this.ctx.beginPath()
      this.prev = getCursorPosition(this.ctx, e)
    }
  }
  onMouseMove(e) {
    if (this.isMouseDown) {
      this.currFigure.coords.push(getCursorPosition(this.canvas, e))

      let prev = getCursorPosition(this.ctx, e)
      this.ctx.moveTo(...this.prev)
      this.ctx.lineTo(...prev)
      this.ctx.stroke()
      this.prev = prev

      // this.drawer.draw(this.currFigure)
      // this.drawer.draw(
      //   this.currFigure.coords,
      //   getCursorPosition(this.canvas, e)
      // )
    }
  }
  onMouseUp() {
    this.ctx.closePath()
    this.isMouseDown = false
    this.history.push(this.currFigure)
    this.currFigure = []
    this.redraw()

    this.canvas.onmousemove = null
    this.canvas.onmouseup = null
    this.canvas.onmousedown = this.onMouseDown.bind(this)
  }
  useWS(ws){
    
  }
  redraw() {
    this.clear()
    // this.drawImage(this.url)
    this.history.forEach(this.drawer.drawFigure)
  }
  drawFigure() {
    this.drawer.drawFigure(this.currFigure)
  }
  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }
  drawImage(url) {
    let img = new Image()
    img.src = url
    img.onload = () => {
      this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
    }
  }
  destroy() {
    this.canvas.onmousedown = null
    // this.canvas.onmousemove = null
    // this.canvas.onmouseup = null
  }
  onCanvasResize() {}
  undo() {}
  redo() {}
}

const canvasState = new CanvasState()
export default canvasState
