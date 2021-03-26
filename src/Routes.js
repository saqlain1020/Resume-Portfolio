import React from "react";
import { Route, Switch } from "react-router";
import Home from "src/Screens/Home/Home";
import MainBg from "src/Components/MainBg/MainBg";
import Menu from "src/Screens/Menu/Menu";
import About from "./Screens/About/About";

const Routes = () => {
  return (
    <MainBg>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/home" component={Home} exact />
        <Route path="/menu" component={Menu} exact />
        <Route path="/about" component={About} exact />
      </Switch>
    </MainBg>
  );
};

export default Routes;
