import { Point } from "./type";

export type ArcOptions = {
  center: Point;
  radius: number;
  startAngle?: number;
  endAngle?: number;
};

export class Arc {
  _options: ArcOptions;
  constructor(options: ArcOptions) {
    this._options = { startAngle: 0, endAngle: 2 * Math.PI, ...options };
  }

  draw(ctx: CanvasRenderingContext2D) {
    const { center, radius, startAngle, endAngle } = this._options;
    ctx.arc(
      center.x,
      center.y,
      radius,
      startAngle ?? 0,
      endAngle ?? 2 * Math.PI
    );
    ctx.stroke();
  }
}
