import React from "react";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import "./NavBar.scss";
import logo from "../../assets/logoV2.png";
import MoveTo from "moveto";

export default class NavBar extends React.Component {
  handleScrollToStats = a => {
    window.scrollTo({
      top: 500,
      behavior: "smooth"
    });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar
          fixed="top"
          id="navbar_home"
          collapseOnSelect
          expand="lg"
          style={{}}
        >
          <Container>
            <Navbar.Brand>
              <img
                alt=""
                id="logo"
                src={logo}
                className="d-inline-block align-top"
              />{" "}
            </Navbar.Brand>
            <Navbar.Brand id="titulo" href="/">
              Observatório Astronômico Antares
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto"></Nav>
              <Nav>
                <Nav.Link href="#div_atracoes">Atrações</Nav.Link>
                <Nav.Link href="#div_maps">Informações</Nav.Link>
                <NavDropdown title="Agendamento" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/Login">Escolar</NavDropdown.Item>
                  <NavDropdown.Item>Pessoa</NavDropdown.Item>
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
