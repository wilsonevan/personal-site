import React from "react";
import { Switch, Route } from "react-router-dom";
import { GlobalStyles } from "./styles/GlobalStyles";
import Home from "./components/Home";
import NoMatch from "./components/NoMatch";
import PrototypeDev from './components/philosophy/PrototypeDev'
// import { MyTheme } from "./styles/MyTheme";

function App() {
  return (
    <>
      <GlobalStyles />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/development" component={PrototypeDev} />
        <Route component={NoMatch} />
      </Switch>
    </>
  );
}

export default App;
