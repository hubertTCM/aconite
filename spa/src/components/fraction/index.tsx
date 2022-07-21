import React, { useState } from "react";
import { Pie } from "./Pie";
import { FractionValue } from "./type";

type FractionProps = React.CanvasHTMLAttributes<{}> & {
  uiType?: "Circle" | "Square";
};
export const Fraction = (props: FractionProps) => {
  const { width = 600, height = 600 } = props;
  const value: FractionValue = { numerator: BigInt(3), denominator: BigInt(5) };
  return <Pie value={value} width={Number(width)} height={Number(height)} />;
};
