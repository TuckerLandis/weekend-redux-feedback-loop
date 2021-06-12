import React from "react";
import axios from "axios";

import { Route, HashRouter as Router, Switch } from "react-router-dom";

//local import
import Header from "../Header/Header";
import Page0Start from "../Page0Start/Page0Start";
import Page1Feeling from "../Page1Feeling/Page1Feeling.jsx";
import Page2Understanding from "../Page2Understanding/Page2Understanding.jsx";

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

        <Route path="/">
          <Page0Start />
        </Route>


        </Switch>

        
      </div>
    </Router>
  );
}

export default App;
