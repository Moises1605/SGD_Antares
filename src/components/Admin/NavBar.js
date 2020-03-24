import React from "react";
import { Navbar } from "react-bootstrap";
import "./NavBarAdmin.scss";
import logo from "../../assets/logo2.png";

export default class NavBar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar
          fixed="top"
          id="navbar_admin"
          collapseOnSelect
          expand="lg"
          bg="light"
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
