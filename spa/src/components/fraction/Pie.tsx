import React, { useEffect, useRef, useState } from "react";

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
      const center = { x: width / 2, y: height / 2 };
      const radius = Math.min(width, height) / 3;
      ctx.arc(center.x, center.y, radius, 0, 2 * Math.PI);
      ctx.strokeStyle = "black";
      ctx.stroke();

      const { numerator, denominator } = value;
      const alpha = (2 * Math.PI) / Number(denominator);
      for (var i = 0; i < value.denominator; i++) {
        ctx.moveTo(center.x, center.y);
        const angle = i * alpha + (Math.PI * 3) / 2;
        const toX = radius * Math.cos(angle) + center.x;
        const toY = radius * Math.sin(angle) + center.y;
        ctx.lineTo(toX, toY);
        ctx.stroke();
      }
    }
  }, [canvasRef]);

  return <canvas ref={canvasRef} height={height} width={width} />;
};
