import React, { useState } from "react";
import { Button, Checkbox, Image } from "antd";

import { useTranslation } from "react-i18next";

import { ToGuessState } from "../types";

import styles from "./index.module.css";
import guessNumberImage from "./guess-number.png";

export type ConfigureProps = {
  switchToGuess: ToGuessState;
};

function getRandomIntInclusive(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

export const Configure = (props: ConfigureProps) => {
  const { t } = useTranslation();
  const [showHints, setShowHints] = useState<boolean>(true);
  const { switchToGuess } = props;

  const start = (min: number, max: number) => {
    const expect = getRandomIntInclusive(min, max);
    switchToGuess({ state: "guessing", data: { min, max, expect }, showHints });
  };

  const easy = () => {
    start(1, 10);
  };
  const medium = () => {
    start(1, 100);
  };
  const hard = () => {
    start(1, 1000);
  };
  return (
    <div>
      <div>
        <Image src={guessNumberImage} preview={false} />
      </div>
      <div className={styles.actions}>
        <Button type="primary" onClick={easy}>
          1-10
        </Button>
        <Button type="primary" onClick={medium}>
          1-100
        </Button>
        <Button type="primary" onClick={hard}>
          1-1000
        </Button>
        <Checkbox
          checked={showHints}
          onChange={(e) => setShowHints(e.target.checked)}
        >
          {t("guessNumber.showHint", { ns: "common" })}
        </Checkbox>
      </div>
    </div>
  );
};
