import React, { useState } from "react";
import { Alert, Button, InputNumber } from "antd";
import { useTranslation } from "react-i18next";

import { StateGuess, NumberRange } from "../types";

import { History, GuessValue } from "./history";
import { Indicator } from "./indicator";
import styles from "./index.module.css";

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
  const { t } = useTranslation();
  const [userInput, setUserInput] = useState<number | undefined>();
  const [btnEnabled, setBtnEnabled] = useState(false);
  const [historyValues, setHistoryValues] = useState<GuessValue[]>([]);
  const [activeRange, setActiveRange] = useState<NumberRange>({ min, max });
  const [messageKey, setMessageKey] = useState<string | undefined>();
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
      setMessageKey("guessNumber.messageTooLow");
      return;
    }
    if (userInput > expect) {
      setHistoryValues([
        ...historyValues,
        { type: "tooLarge", value: userInput },
      ]);
      setActiveRange({ ...activeRange, max: Math.min(userInput - 1, max) });
      setMessageKey("guessNumber.messageTooHigh");
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
      <div>
        <div className={styles.actions}>
          <Button type="primary" onClick={guess} disabled={!btnEnabled}>
            {t("guessNumber.guess", { ns: "common" })}
          </Button>
          <Button type="primary" danger={true} onClick={lose}>
            {t("guessNumber.giveUp", { ns: "common" })}
          </Button>
        </div>
      </div>
      {messageKey && messageKey.length && (
        <Alert message={t(messageKey, { ns: "common" })} type="error" />
      )}
      {showHints && <History values={historyValues} />}
    </div>
  );
};
