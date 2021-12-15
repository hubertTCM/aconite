import React, { useState } from "react";

import { State, StateGuess, ToGuessState } from "./types";
import { Configure } from "./configure";
import { Guess } from "./guess";

export const GuessNumber = () => {
  const [state, setState] = useState<State>({ state: "configure" });
  const toGuess: ToGuessState = (stateGuess: StateGuess) => {
    setState({ ...stateGuess });
  };

  return (
    <div>
      {state.state === "configure" && (
        <Configure switchToGuess={toGuess}></Configure>
      )}
      {state.state === "guessing" && <Guess {...state}></Guess>}
    </div>
  );
};
