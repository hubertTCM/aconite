import React from "react";
import { NumberRange } from "../types";

export type IndicatorProps = {
  totalRange: NumberRange;
  activeRange: NumberRange;
};
export const Indicator = (props: IndicatorProps) => {
  const { activeRange } = props;
  return <div>{`[${activeRange.min}, ${activeRange.max}]`}</div>;
};
