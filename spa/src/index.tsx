import React from "react";
import { render } from "react-dom";
const App = () => {
  return <h1>Hello, world!</h1>;
};
try {
  render(<App />, document.getElementById("app"));
} catch (err) {
  console.error(err); // TODO: redirect to global error page
}
