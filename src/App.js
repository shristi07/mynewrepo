import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from "./Components/Dashboard/Dashboard";

const Routes = () => {
 
  return (
    <Router>
      <Switch>
    <Route exact path="/">
    <Dashboard />
    </Route>
      </Switch>
    </Router>
  );
};

function App() {

  return (
    <>
      <Routes />
    </>
  );
}

export default App;
