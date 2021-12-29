import React from "react";
import { Alert, Button } from "antd";

import styles from "./index.module.css";
import { ToConfigureState } from "../types";

export type EndProps = {
  restart: ToConfigureState;
};

const End = (props: { children: React.ReactNode } & EndProps) => {
  const { children, restart } = props;
  return (
    <div className={styles.root}>
      {children}
      <div>
        <Button className={styles.action} type="primary" onClick={restart}>
          Start new game
        </Button>
      </div>
    </div>
  );
};

export const Win = (props: EndProps) => {
  const text = "Congratulations! You got it right!";
  return (
    <End {...props}>
      <Alert message={text} type="success" />
    </End>
  );
};

export const Lose = (props: EndProps) => {
  const text = "GAME OVER";
  return (
    <End {...props}>
      <Alert message={text} type="error" />
    </End>
  );
};
