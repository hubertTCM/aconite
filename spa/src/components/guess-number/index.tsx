import React from "react";
import { Item } from "./item";

// example: https://stackoverflow.com/questions/52042691/custom-component-does-not-accept-styles-react-material-ui
export const GuessNumber = () => {
  return <Item max={100} min={10} displayNumber={true} />;
};
