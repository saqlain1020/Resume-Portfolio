import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "rgb(100,100,30)",
    },
    text: {
      light: "#333333",
      primary: "#333333",
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
  overrides: {
    MuiTypography: {
      root: {
        color: "rgba(0,0,0,.45)",
      },
      h1: {
        color: "#333333",
      },
      h2: {
        color: "#333333",
      },
      h3: {
        color: "#333333",
      },
      h4: {
        color: "#333333",
      },
    },
    MuiLinearProgress: {
      root: {
        height: 10,
        boxShadow: "0px 1px 5px rgba(0,0,0,0.3)",
      },
    },
    MuiOutlinedInput: {
      root: {
        background: "#e1e7ed4a",
        borderRadius: 30,
        fontSize:14,
        letterSpacing:1,
        fontWeight:500,
        color: "grey",
        "& fieldset": {
          borderWidth: "0px !important",
        },
      },
      notchedOutline: {
        // boxShadow: "0 0 10px rgb(0 0 0 / 10%)",
      },
    },
  },
});

export default theme;
