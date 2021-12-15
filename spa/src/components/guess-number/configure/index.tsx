import React, { useState } from "react";
import { Button, Checkbox } from "antd";
import { ToGuessState } from "../types";

export type ConfigureProps = {
  switchToGuess: ToGuessState;
};

export const Configure = (props: ConfigureProps) => {
  const [showHints, setShowHints] = useState<boolean>(true);
  const { switchToGuess } = props;
  const easy = () => {
    switchToGuess({
      state: "guessing",
      data: { min: 1, max: 10, expect: 3 },
      showHints,
    });
  };
  return (
    <div>
      <Checkbox
        checked={showHints}
        onChange={(e) => setShowHints(e.target.checked)}
      >
        show Hint
      </Checkbox>
      <Button type="primary" onClick={easy}>
        Easy 1-10
      </Button>
    </div>
  );
};
