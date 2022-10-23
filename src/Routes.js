import React from "react";
import { Route, Switch } from "react-router";
import Home from "src/Screens/Home/Home";
import MainBg from "src/Components/MainBg/MainBg";
import Menu from "src/Screens/Menu/Menu";
import About from "./Screens/About/About";
import Resume from "./Screens/Resume/Resume";
import Contact from "./Screens/Contact/Contact";
import Portfolio from "./Screens/Portfolio/Portfolio";
import ReactGA from "react-ga4";

const Routes = () => {

  React.useEffect(() => {
    ReactGA.send("pageview");
  }, []);

  return (
    <MainBg>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/home" component={Home} exact />
        <Route path="/menu" component={Menu} exact />
        <Route path="/about" component={About} exact />
        <Route path="/resume" component={Resume} exact />
        <Route path="/contact" component={Contact} exact />
        <Route path="/portfolio" component={Portfolio} exact />
      </Switch>
    </MainBg>
  );
};

export default Routes;
