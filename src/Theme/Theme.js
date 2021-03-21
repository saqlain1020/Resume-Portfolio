import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "rgb(100,100,30)",
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
  overrides: {},
});

export default theme;
