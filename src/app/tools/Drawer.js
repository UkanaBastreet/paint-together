class Drawer {
  constructor(canvas) {
    this.canvas = canvas
    this.ctx = canvas.getContext("2d")
    this.draw = this.draw.bind(this)
    this.drawFigure = this.drawFigure.bind(this)
  }
  drawFigure({ toolName, coords }) {
    this.ctx.beginPath()
    console.log("draw")
    switch (toolName) {
      case "Brush":
        coords.reduce((start, next) => {
          this.ctx.moveTo(...start)
          this.ctx.lineTo(...next)
          return next
        })
        break
      default:
        break
    }
    this.ctx.stroke()
    this.ctx.closePath()
  }
  draw([start, next]) {
    this.ctx.beginPath()
    // coords.reduce((start, next) => {
    this.ctx.moveTo(...start)
    this.ctx.lineTo(...next)
    //   return next
    // })
    this.ctx.stroke()
    this.ctx.closePath()
  }
  set lineWidth(width) {
    this.ctx.lineWidth = width
    this.ctx.save()
  }
  set fillStyle(color) {
    this.ctx.fillStyle = color
    this.ctx.save()
  }
  set strokeStyle(color) {
    this.ctx.strokeStyle = color
    this.ctx.save()
  }
  set lineCap(cap) {
    this.ctx.lineCap = cap
    this.ctx.save()
  }
  set lineJoin(join) {
    this.ctx.lineJoin = join
    this.ctx.save()
  }
}

export default Drawer
