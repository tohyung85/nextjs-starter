import { createTheme, Theme } from "@material-ui/core/styles";

const dayTheme = createTheme({
  typography: {
    fontFamily: "Lato",
  },
  palette: {
    primary: {
      main: "#01539c",
      dark: "#002b6d",
      light: "#4f7fcd",
    },
    secondary: {
      main: "#c9a531",
      dark: "#957700",
      light: "#ffd662",
    },
    type: "light",
  },
});

const nightTheme = createTheme({
  palette: {
    primary: {
      main: "#01539c",
    },
    secondary: {
      main: "#c9a531",
    },
    type: "dark",
  },
});

export { dayTheme, nightTheme };
