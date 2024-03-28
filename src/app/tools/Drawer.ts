export class Drawer {
  static drawFigure(drawFigure) {
    throw new Error("Method not implemented.");
  }
  constructor(
    private canvas: HTMLCanvasElement,
    private ctx: CanvasRenderingContext2D
  ) {
    this.draw = this.draw.bind(this);
    this.drawFigure = this.drawFigure.bind(this);
  }
  drawFigure({
    toolName,
    coords,
  }: {
    toolName: string;
    coords: [ICoords, ICoords];
  }) {
    this.ctx.beginPath();
    console.log("draw");
    switch (toolName) {
      case "Brush":
        coords.reduce((start, next) => {
          this.ctx.moveTo(...start);
          this.ctx.lineTo(...next);
          return next;
        });
        break;
      default:
        break;
    }
    this.ctx.stroke();
    this.ctx.closePath();
  }
  drawWithBrush(start: ICoords[], end: ICoords) {
    
  }
  draw = ([start, next]) => {
    this.ctx.beginPath();
    // coords.reduce((start, next) => {
    this.ctx.moveTo(...start);
    this.ctx.lineTo(...next);
    //   return next
    // })
    this.ctx.stroke();
    this.ctx.closePath();
  };
  set lineWidth(width) {
    this.ctx.lineWidth = width;
    this.ctx.save();
  }
  set fillStyle(color) {
    this.ctx.fillStyle = color;
    this.ctx.save();
  }
  set strokeStyle(color) {
    this.ctx.strokeStyle = color;
    this.ctx.save();
  }
  set lineCap(cap) {
    this.ctx.lineCap = cap;
    this.ctx.save();
  }
  set lineJoin(join) {
    this.ctx.lineJoin = join;
    this.ctx.save();
  }
}

interface ICoords {
  x: number;
  y: number;
}

interface drawFigureParams {
  toolName: string;
}

const tool: drawFigureParams = {
  toolName: "Brush",
};
