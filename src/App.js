import React from "react";
import "./App.css";
import Routes from "./Routes";
import theme from "src/Theme/Theme";
import { ThemeProvider } from "@material-ui/styles";
import { connect } from "react-redux";
import ColorBar from "./Components/ColorBar/ColorBar";
import { useWindowSize } from "src/Hooks/Hooks";
import ReactGA from "react-ga4";

const TRACKING_ID = "G-EQ4801JGM0"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App(props) {
  const size = useWindowSize();

  return (
    <>
      <ThemeProvider
        theme={{
          ...theme,
          palette: {
            ...theme.palette,
            primary: { main: props.color ? props.color : "#001414", light: props.lightColor?props.lightColor:"#e1e7ed4a" },
          },
        }}
      >
        <div style={{ position: "relative", maxHeight: "auto", height: size.height }}>
          <Routes />
          <ColorBar />
        </div>
      </ThemeProvider>
    </>
  );
}

const mapState = (state) => ({
  color: state.theme.color,
  lightColor: state.theme.lightColor,
});

export default connect(mapState)(App);
