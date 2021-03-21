import React from "react";
import { Route, Switch } from "react-router";
import Home from "./Screens/Home/Home";
import MainBg from "./Components/MainBg/MainBg";

const Routes = () => {
  return (
    <MainBg>
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
    </MainBg>
  );
};

export default Routes;
