import React from "react";
import { Alert, Button } from "antd";
import { useTranslation } from "react-i18next";

import { ToConfigureState } from "../types";

import styles from "./index.module.css";

export type EndProps = {
  restart: ToConfigureState;
};

const End = (props: { children: React.ReactNode } & EndProps) => {
  const { children, restart } = props;
  const { t } = useTranslation();
  return (
    <div className={styles.root}>
      {children}
      <div>
        <Button className={styles.action} type="primary" onClick={restart}>
          {t("guessNumber.startNewGame", { ns: "common" })}
        </Button>
      </div>
    </div>
  );
};

export const Win = (props: EndProps) => {
  const { t } = useTranslation();
  const text = t("guessNumber.messageWin", { ns: "common" });
  return (
    <End {...props}>
      <Alert message={text} type="success" />
    </End>
  );
};

export const Lose = (props: EndProps) => {
  const { t } = useTranslation();
  const text = t("guessNumber.messageGameOver", { ns: "common" });
  return (
    <End {...props}>
      <Alert message={text} type="error" />
    </End>
  );
};
