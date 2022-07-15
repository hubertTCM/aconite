import { Point } from "./type";

export type LineOptions = {
  start: Point;
  end: Point;
};
export class Line {
  _options: LineOptions;
  constructor(options: LineOptions) {
    this._options = { ...options };
  }

  draw(ctx: CanvasRenderingContext2D) {
    const { start, end } = this._options;
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(end.x, end.y);
    ctx.stroke();
  }
}
