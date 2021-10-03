import React from "react";
import { Navbar } from "react-bootstrap";
import Logo from "../../assets/t.jpg";
import backIcon from "../../assets/Path.png";
import "./Dashboard.css";
import DashBody from "./DashBody/DashBody";
import BreadCrumb from "./BreadCrumb/BreadCrumb";

const routes = [
  {
    path: "/",
    name: "My Documents",
  },
  {
    path: "/trainings",
    name: "Trainings",
  },
  {
    path: "/trainings/sunshine-academy",
    name: "Sunshine Academy",
  },
];

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Navbar className="nav">
        <img className="backIcon" src={backIcon} alt="" />
        <Navbar.Brand href="#home">
          <img width="50px" className="toddle-logo" src={Logo} alt="logo" />
        </Navbar.Brand>
        <BreadCrumb breadcrumbs={routes} />
      </Navbar>
      <div className="dash-body">
        <DashBody />
      </div>
    </div>
  );
};

export default Dashboard;
