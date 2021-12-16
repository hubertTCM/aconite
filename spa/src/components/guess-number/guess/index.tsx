import React, { useState } from "react";
import { Button, InputNumber, Table } from "antd";
import { StateGuess } from "../types";
import { History, GuessValue } from "./history";

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
      return;
    }
    if (userInput > expect) {
      setHistoryValues([
        ...historyValues,
        { type: "tooLarge", value: userInput },
      ]);
      return;
    }
  };
  return (
    <div>
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
      {showHints && <History values={historyValues}></History>}
    </div>
  );
};
