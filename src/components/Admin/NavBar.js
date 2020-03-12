import React from "react";
import { Navbar } from "react-bootstrap";
import "./NavBarAdmin.css";
import logo from "../../assets/logo2.png";

export default class NavBar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar
          id="navbaradmin"
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
          fixed="top"
        >
          <Navbar.Brand>
            <img alt="" src={logo} className="d-inline-block align-top" />{" "}
          </Navbar.Brand>
          <Navbar.Brand href="/">
            Sistema de agendamento de visitas
          </Navbar.Brand>
        </Navbar>
      </React.Fragment>
    );
  }
}
