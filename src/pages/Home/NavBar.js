import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import "./NavBar.css";
import logo from "../../assets/logo2.png";

export default class NavBar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar fixed="top" expand="lg" id="navbar_home">
          <Container>
            <Navbar.Brand>
              <img alt="" src={logo} className="d-inline-block align-top" />{" "}
            </Navbar.Brand>
            <Navbar.Brand href="/">
              Observatório Astronômico Antares
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

            <Nav className="mr-auto"></Nav>
            <Nav>
              <Nav.Link>Horários e Atrações</Nav.Link>
              <Nav.Link>Agendamento</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </React.Fragment>
    );
  }
}
