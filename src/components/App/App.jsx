import React from "react";
import axios from "axios";

import { Route, HashRouter as Router } from "react-router-dom";


//local import
import Header from '../Header/Header'

import "./App.css";

function App() {
  return (
    <Router>
    
      <div className="App">
     <Header />
      </div>

    </Router>
  );
}

export default App;
