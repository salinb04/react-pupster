import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import About from "./components/pages/About";
import Discover from "./components/pages/Discover";
import Search from "./components/pages/Search";
import "bootstrap/dist/css/bootstrap.min.css";



const App = () => {
  return (
      <HashRouter>
        <Switch>
          <NavTabs />
          <Route exact path="/" component={About} />
          <Route exact path="/Discover" component={Discover} />
          <Route exact path="/Search" component={Search} />
        </Switch>
      </HashRouter>
  );
};

export default App;
