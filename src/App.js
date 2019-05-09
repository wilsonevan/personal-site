import React from "react";
import { Switch, Route } from "react-router-dom";
import { GlobalStyles } from "./styles/GlobalStyles";
import Home from "./components/home/Home";
import NoMatch from "./components/NoMatch";
import Footer from "./components/Footer";
// import { MyTheme } from "./styles/MyTheme";

function App() {
  return (
    <>
      <GlobalStyles />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NoMatch} />
      </Switch>
      {/* <Footer /> */}
    </>
  );
}

export default App;
