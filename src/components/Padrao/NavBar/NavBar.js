import React from "react";
import { Navbar } from "react-bootstrap";
import "./NavBar.scss";
import logo from "../../../assets/logoV2.png";

export default class NavBar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar
          className="navbar-dark"
          collapseOnSelect
          expand="lg"
          fixed="top"
          id="navbar_padrao"
        >
          <Navbar.Brand>
            <img
              alt=""
              id="logo_padrao"
              src={logo}
              className="d-inline-block align-center"
            />{" "}
          </Navbar.Brand>
          {/*<Navbar.Brand href="/" id="titulo_padrao">
            Observatório Astronômico Antares
    </Navbar.Brand>*/}
        </Navbar>
      </React.Fragment>
    );
  }
}
