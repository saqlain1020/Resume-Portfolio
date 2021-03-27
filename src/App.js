import React from "react";
import "./App.css";
import Routes from "./Routes";
import theme from "src/Theme/Theme";
import { ThemeProvider } from "@material-ui/styles";
import { connect } from "react-redux";
import ColorBar from "./Components/ColorBar/ColorBar";
import { Container } from "@material-ui/core";
import { useWindowSize } from "src/Hooks/Hooks";

function App(props) {
  const size = useWindowSize();

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
        <Container
          maxWidth="xl"
          disableGutters
          style={{ position: "relative", maxHeight: 1080, height: size.height }}
        >
          <Routes />
          <ColorBar />
        </Container>
      </ThemeProvider>
    </>
  );
}

const mapState = (state) => ({
  color: state.theme.color,
});

export default connect(mapState)(App);
