import React, { useState } from "react";
import { Button, InputNumber, Table } from "antd";
import { StateGuess, NumberRange } from "../types";
import { History, GuessValue } from "./history";
import { Indicator } from "./indicator";

export type GuessProps = StateGuess & {
  win: () => void;
  lose: () => void;
};

export const Guess = (props: GuessProps) => {
  const {
    data: { min, max, expect },
    showHints,
    win,
    lose,
  } = props;
  const [userInput, setUserInput] = useState<number | undefined>();
  const [btnEnabled, setBtnEnabled] = useState(false);
  const [historyValues, setHistoryValues] = useState<GuessValue[]>([]);
  const [activeRange, setActiveRange] = useState<NumberRange>({ min, max });
  const changeNumber = (toValue: number) => {
    setUserInput(toValue);
    setBtnEnabled(toValue !== undefined && toValue !== null);
  };
  const guess = () => {
    if (userInput === undefined || userInput === null) {
      return;
    }
    if (userInput === expect) {
      win();
      return;
    }
    if (userInput < expect) {
      setHistoryValues([
        ...historyValues,
        { type: "tooSmall", value: userInput },
      ]);
      setActiveRange({ ...activeRange, min: Math.max(userInput + 1, min) });
      return;
    }
    if (userInput > expect) {
      setHistoryValues([
        ...historyValues,
        { type: "tooLarge", value: userInput },
      ]);
      setActiveRange({ ...activeRange, max: Math.min(userInput - 1, max) });
      return;
    }
  };
  return (
    <div>
      {showHints && (
        <Indicator activeRange={activeRange} totalRange={{ min, max }} />
      )}
      <InputNumber
        size="large"
        controls={false}
        value={userInput}
        onChange={changeNumber}
        onPressEnter={guess}
      ></InputNumber>
      <Button type="primary" onClick={guess} disabled={!btnEnabled}>
        Guess
      </Button>
      {showHints && <History values={historyValues} />}
    </div>
  );
};
