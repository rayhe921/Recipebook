import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Main from "./pages/main";

class App extends Component {
  render() {
    return (
     <Router>
       <Switch>
         <Route exact path= "/" Component={Main}></Route>
       </Switch>
     </Router>
    );
  }
}

export default App;
