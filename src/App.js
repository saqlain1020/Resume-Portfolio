import React from "react";
import "./App.css";
import Routes from "./Routes";
import theme from "src/Theme/Theme";
import { ThemeProvider } from "@material-ui/styles";
import { connect } from "react-redux";
import ColorBar from "./Components/ColorBar/ColorBar";

function App(props) {
  return (
    <>
      <ThemeProvider
        theme={{
          ...theme,
          palette: {
            ...theme.palette,
            primary: { main: props.color ? props.color : "rgb(50,50,50)" },
          },
        }}
      >
        <Routes />
        <ColorBar/>
      </ThemeProvider>
    </>
  );
}

const mapState = (state) => ({
  color: state.theme.color,
});

export default connect(mapState)(App);
