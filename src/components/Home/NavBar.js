import React from "react";
import {
  Nav,
  Navbar,
  Container,
  NavDropdown,
  Modal,
  Row,
  Col,
  Button
} from "react-bootstrap";
import "./NavBar.scss";
import { configureAnchors } from "react-scrollable-anchor";
import VisitNight from "./visitNight/visitNight";
import logo from "../../assets/logoV2.png";
import {Link} from 'react-router-dom';
import Login from '../../pages/login/login';

configureAnchors({
  offset: -115,
  scrollDuration: 500
});

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { control: false };
  }
  setControl = () => this.setState({ control: true });
  handleClose = () => this.setState({ control: false });

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
                  <NavDropdown.Item className="dropnav">
                    <Link to="/login" className="dropnav">
                      Escolar
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className="dropnav"
                    onClick={this.setControl}
                  >
                    Individual
                  </NavDropdown.Item>
                </NavDropdown>
                  <Link to="/login" className="nav-link">Login</Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Modal
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={this.state.control}
          onHide={this.handleClose}
          style={{ textAlign: "justify" }}
        >
          <Modal.Header closeButton>
            <Modal.Title>Agendamento Individual</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col md={12}>
                <h6>
                  O agendamento individual pode ser realizado por uma ou um
                  grupo de pessoas. <br />
                  Durante o período{" "}
                  <span style={{ color: "red" }}>
                    <b>diurno</b>
                  </span>{" "}
                  não há necessidade de agendar a visita. O observátorio
                  atenderá em seu horário de funcionamento.
                  <br />
                  Para agendamentos{" "}
                  <span style={{ color: "red" }}>
                    <b>noturnos</b>
                  </span>
                  , serão solicitados dados dos visitantes.
                </h6>
                <VisitNight onClick={this.setControl} />
              </Col>
            </Row>
          </Modal.Body>
        </Modal>
      </React.Fragment>
    );
  }
}
