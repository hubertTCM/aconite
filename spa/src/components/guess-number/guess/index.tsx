import React, { useState } from "react";
import { Button, InputNumber } from "antd";
import { StateGuess } from "../types";

export type GuessProps = StateGuess;

export const Guess = (props: GuessProps) => {
  const {
    data: { min, max, expect },
  } = props;
  // const { min } = data;
  const [userInput, setUserInput] = useState<number | undefined>();
  const [btnEnabled, setBtnEnabled] = useState(false);
  const changeNumber = (toValue: number) => {
    setUserInput(toValue);
    setBtnEnabled(toValue !== undefined);
  };
  const guess = () => {};
  return (
    <div>
      <InputNumber<number>
        size="large"
        value={userInput}
        onChange={changeNumber}
        onPressEnter={guess}
      ></InputNumber>
      <Button type="primary" onClick={guess} disabled={!btnEnabled}>
        Guess
      </Button>
    </div>
  );
};
