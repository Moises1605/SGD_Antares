import React from "react";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import "./NavBar.scss";
import { configureAnchors } from "react-scrollable-anchor";
import logo from "../../assets/logoV2.png";

configureAnchors({
  offset: -115,
  scrollDuration: 500
});

export default class NavBar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar fixed="top" id="navbar_home" collapseOnSelect expand="lg">
          <Container>
            <Navbar.Brand>
              <img
                alt=""
                id="logo"
                src={logo}
                className="d-inline-block align-top"
              />{" "}
            </Navbar.Brand>
            <Nav>
              <Nav.Link id="titulo" href="#inicio">
                Observatório Astronômico Antares
              </Nav.Link>
            </Nav>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto"></Nav>
              <Nav>
                <Nav.Link href="#atracoes" onClick={this.handleClick}>
                  Atrações
                </Nav.Link>
                <Nav.Link href="#informacoes" onClick={this.handleClick}>
                  Informações
                </Nav.Link>
                <Nav.Link href="#contato" onClick={this.handleClick}>
                  Contato
                </Nav.Link>
                <NavDropdown
                  title="Agendamento"
                  id="basic-nav-dropdown"
                  className="dropnav"
                >
                  <NavDropdown.Item className="dropnav" href="/Login">
                    Escolar
                  </NavDropdown.Item>
                  <NavDropdown.Item className="dropnav">
                    Pessoa
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/login">Login</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </React.Fragment>
    );
  }
}
