import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/main";
import Sidebar from "./components/Sidebar/index";

class App extends Component {
  render() {
    return (
     <Router>
       <Sidebar
       title = "Sidebar"
       
       ></Sidebar>
       <Switch>
         <Route exact path="/" component={Main} />
       </Switch>
     </Router>
    );
  }
}

export default App;
