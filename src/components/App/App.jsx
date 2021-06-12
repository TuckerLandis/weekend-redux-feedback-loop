import React from "react";

import { Route, HashRouter as Router, Switch } from "react-router-dom";

//local import
import Header from "../Header/Header";
import Page0Start from "../Page0Start/Page0Start";
import Page1Feeling from "../Page1Feeling/Page1Feeling.jsx";
import Page2Understanding from "../Page2Understanding/Page2Understanding.jsx";
import Page3Support from "../Page3Supported/Page3Supported";
import Page4Comments from "../Page4Comments/Page4Comments";
import Page5Review from "../Page5Review/Page5Review";

import "./App.css";

function App() {

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>

        <Route path="/feeling" exact>
          <Page1Feeling />
        </Route>

        <Route path="/understanding" exact>
          <Page2Understanding />
        </Route>

        <Route path="/support" exact>
          <Page3Support />
        </Route>

        <Route path="/comments" exact>
          <Page4Comments />
        </Route>

        <Route path="/review" exact>
          <Page5Review />
        </Route>

        {/* <Route path="/thanks" exact>
          <Page6Thanks />
        </Route> */}

        <Route path="/">
          <Page0Start />
        </Route>

        </Switch>

        
      </div>
    </Router>
  );
}

export default App;
