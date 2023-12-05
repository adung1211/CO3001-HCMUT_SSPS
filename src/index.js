import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { ThemeProvider } from "@mui/material/styles";
import { CustomTheme } from "./CustomTheme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={CustomTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
