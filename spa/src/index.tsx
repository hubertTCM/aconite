import React from "react";
import { render } from "react-dom";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { enUS } from "@mui/material/locale";

import { App } from "./app";

// l10n: https://mui.com/guides/localization/
const theme = createTheme(enUS);

try {
  render(
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>,
    document.getElementById("app")
  );
} catch (err) {
  console.error(err); // TODO: redirect to global error page
}
