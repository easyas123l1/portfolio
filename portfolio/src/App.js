import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";
import "./styles/global.scss";

function App() {
    return (
        <>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/AboutMe" component={AboutMe} />
                <Route exact path="/Projects" component={Projects} />
                {/* default route incase route doesn't exist */}
                <Route component={Home} />
            </Switch>
        </>
    );
}

export default App;
