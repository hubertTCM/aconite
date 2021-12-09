import React from "react";
import { render } from "react-dom";

import { App } from "./app";

import "antd/dist/antd.css";

try {
  render(<App />, document.getElementById("app"));
} catch (err) {
  console.error(err); // TODO: redirect to global error page
}
