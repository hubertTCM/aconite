import React, { useState } from "react";

import { State, StateGuess, ToConfigureState, ToGuessState } from "./types";
import { Configure } from "./configure";
import { Guess } from "./guess";
import { Lose, Win } from "./end";

export const GuessNumber = () => {
  const [state, setState] = useState<State>({ state: "configure" });
  const toGuess: ToGuessState = (stateGuess: StateGuess) => {
    setState({ ...stateGuess });
  };

  const toConfigure: ToConfigureState = () => {
    setState({ state: "configure" });
  };

  const win = () => {
    setState({ state: "win" });
  };
  const lose = () => {
    setState({ state: "lose" });
  };

  return (
    <div>
      {state.state === "configure" && (
        <Configure switchToGuess={toGuess}></Configure>
      )}
      {state.state === "guessing" && (
        <Guess win={win} lose={lose} {...state}></Guess>
      )}
      {state.state === "win" && <Win restart={toConfigure} />}
      {state.state === "lose" && <Lose restart={toConfigure} />}
    </div>
  );
};
