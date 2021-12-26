import React, { useState } from "react";
import { Alert, Button, InputNumber } from "antd";
import { StateGuess, NumberRange } from "../types";
import { History, GuessValue } from "./history";
import { Indicator } from "./indicator";

import styles from "./index.less";

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
  const [message, setMessage] = useState<string | undefined>();
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
      setMessage("Your guess is too low!");
      return;
    }
    if (userInput > expect) {
      setHistoryValues([
        ...historyValues,
        { type: "tooLarge", value: userInput },
      ]);
      setActiveRange({ ...activeRange, max: Math.min(userInput - 1, max) });
      setMessage("Your guess is too high!");
      return;
    }
  };
  return (
    <div className={styles.container}>
      {showHints && (
        <Indicator activeRange={activeRange} totalRange={{ min, max }} />
      )}
      <InputNumber
        className={styles.number}
        controls={false}
        value={userInput}
        onChange={changeNumber}
        onPressEnter={guess}
      />
      <div className={styles.actions}>
        <Button type="primary" onClick={guess} disabled={!btnEnabled}>
          Guess
        </Button>
        <Button type="primary" danger={true} onClick={lose}>
          Give Up
        </Button>
      </div>
      {message && message.length && <Alert message={message} type="error" />}
      {showHints && <History values={historyValues} />}
    </div>
  );
};
