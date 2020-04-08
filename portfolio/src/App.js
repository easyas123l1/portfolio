import React from "react";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" />
        {/* default route incase route doesn't exist */}
        {/* <Route component={Home} /> */}
      </Switch>
    </>
  );
}

export default App;
