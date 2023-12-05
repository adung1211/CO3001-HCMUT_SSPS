import { createTheme } from "@mui/material/styles";
import "@fontsource/roboto";
import "@fontsource/be-vietnam-pro";
import "@fontsource/akaya-telivigala";

export const CustomTheme = createTheme({
  typography: {
    fontFamily: "Be Vietnam Pro, Akaya Telivigala",
  },
  palette: {
    primary: {
      main: "#1B3764",
    },

    secondary: {
      main: "#6e5623",
    },
  },
});
