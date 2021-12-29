import React from "react";
import { NumberRange } from "../types";

import styles from "./indicator.module.css";

export type IndicatorProps = {
  totalRange: NumberRange;
  activeRange: NumberRange;
};
export const Indicator = (props: IndicatorProps) => {
  const { activeRange, totalRange } = props;
  const calculateWidth = (min: number, max: number) => {
    const length = totalRange.max - totalRange.min + 1;
    const result = ((max - min + 1) * 100) / length;
    return result;
  };
  return (
    <div>
      <div className={styles.container}>
        {activeRange.min > totalRange.min && (
          <span
            style={{
              width: `${calculateWidth(totalRange.min, activeRange.min)}%`,
            }}
          />
        )}
        {
          <div
            className={styles.active}
            style={{
              width: `${calculateWidth(activeRange.min, activeRange.max)}%`,
            }}
          />
        }
        {activeRange.max < totalRange.max && (
          <span
            style={{
              width: `${calculateWidth(activeRange.max, totalRange.max)}%`,
            }}
          />
        )}
      </div>
      <div>{`[${activeRange.min}, ${activeRange.max}]`}</div>
    </div>
  );
};
