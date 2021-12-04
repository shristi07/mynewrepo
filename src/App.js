import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Dashboard from "./Components/Dashboard/Dashboard";
import WarehouseDescription from "./Components/Dashboard/WarehouseDescription/WarehouseDescription";
import { Navbar } from "react-bootstrap";
import BreadCrumb from "./Components/Dashboard/BreadCrumb/BreadCrumb";
import DashBody from "./Components/Dashboard/DashBody/DashBody";
import Logo from "../src/assets/t.jpg";
import "./App.css";

const routes = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/warehouse",
    name: "Warehouse",
  },
];



const Routes = () => {
 
  return (
    <Router>
      <Navbar className="nav">
        <Navbar.Brand href="/">
          <img width="150px" className="toddle-logo" src={Logo} alt="logo" />
        </Navbar.Brand>
        <BreadCrumb breadcrumbs={routes} />
      </Navbar>
      <Switch>
        <Route exact path="/">
        <DashBody />
        </Route>
        <Route path="/description">
          <WarehouseDescription />
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
