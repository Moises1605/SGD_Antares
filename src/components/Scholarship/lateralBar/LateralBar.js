import React, { Component } from "react";
import {
  Button,
  Container,
  Col,
  Row,
  Image,
  Navbar,
  Nav,
  NavDropdown
} from "react-bootstrap";
import "./style.css";
import ConfirmBack from "../../../pages/components/header/confirmBack/confirmBack";

export default class LateralBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ""
    };
  }

  render() {
    console.log();
    return (
      <div id="a">
        <div style={{ height: "22vh" }}></div>
        <div>
          <Navbar>
            <Navbar.Brand>
              <Image src="" />
            </Navbar.Brand>
            <Nav className="flex-column">
              <Nav.Item>Menu</Nav.Item>
              <Nav.Link className="0" onClick={this.props.onClick}>
                Meu Horário
              </Nav.Link>
              <Nav.Link className="4" disabled onClick={this.props.onClick}>
                Visitas agendadas
              </Nav.Link>
              <Nav.Link className="4" disabled href="/editarBolsista">
                Meus dados
              </Nav.Link>
            </Nav>
          </Navbar>
        </div>
        <div>
          {/* <ConfirmBack id = 'endSession'/> */}
          <Button href="/login" id="endSession" variant="outline-dark" block>
            Encerrar Sessão
          </Button>
        </div>
      </div>
    );
  }
}
