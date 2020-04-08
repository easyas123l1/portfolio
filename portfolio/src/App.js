import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import "./styles/global.scss";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* default route incase route doesn't exist */}
        <Route component={Home} />
      </Switch>
    </>
  );
}

export default App;
