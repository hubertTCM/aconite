export type StateConfigure = {
  state: "configure";
};
export type NumberRange = {
  min: number;
  max: number;
};
export type StateGuess = {
  state: "guessing";
  data: { min: number; max: number; expect: number };
  showHints: boolean;
};
export type StateWin = {
  state: "win";
};
export type StateLose = {
  state: "lose";
};

export type State = StateConfigure | StateGuess | StateWin | StateLose;

export type ToGuessState = (state: StateGuess) => void;

export type ToConfigureState = () => void;
