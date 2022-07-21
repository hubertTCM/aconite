import React, { useEffect, useRef, useState } from "react";
import { Arc } from "./shapes/arc";
import { Line } from "./shapes/line";
import { Point } from "./shapes/type";

import { FractionValue } from "./type";

export type PieProps = {
  value: FractionValue;
  width: number;
  height: number;
};

export const Pie = (props: PieProps) => {
  const { value, height, width } = props;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }
    const ctx = canvasRef.current.getContext("2d");
    if (ctx) {
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      ctx.beginPath();
      ctx.strokeStyle = "black";
      const center: Point = { x: width / 2, y: height / 2 };
      const radius: number = Math.min(width, height) / 3;
      const circle = new Arc({ center, radius });
      circle.draw(ctx);

      const { numerator, denominator } = value;
      const alpha = (2 * Math.PI) / Number(denominator);
      for (var i = 0; i < value.denominator; i++) {
        const angle = i * alpha + (Math.PI * 3) / 2;
        const toX = radius * Math.cos(angle) + center.x;
        const toY = radius * Math.sin(angle) + center.y;
        const line = new Line({ start: center, end: { x: toX, y: toY } });
        line.draw(ctx);
      }
    }
  }, [canvasRef]);

  return <canvas ref={canvasRef} height={height} width={width} />;
};
