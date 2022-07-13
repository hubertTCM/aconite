import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";
import { initTranslation } from "./translations";
import { GuessNumber } from "./components/guess-number";
import { Fraction } from "./components/fraction";

initTranslation();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="guess-number" element={<GuessNumber />} />
          <Route path="fraction" element={<Fraction />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("app")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
