import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import Bolsistas from "./Bolsistas";
import Funcionario from "./Funcionario";
import Relatorio from "./Relatorio";
import Escolas from "./Escolas";
import Navbar from "./NavBar";
import SimpleList from "./List";
import "./Admin.css";

export default class Admin extends React.Component {
  constructor() {
    super();
    this.state = {
      screens: [
        <Relatorio />,
        <Funcionario />,
        <Bolsistas />,
        <Escolas />,
        null
      ],
      active: null
    };
  }
  componentDidMount = screen => {
    this.setState({ active: this.state.screens[screen] });
  };

  render() {
    return (
      <div id="div_admin">
        <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
          <Row>
            <Col>
              <Container fluid>
                <Navbar />
              </Container>
            </Col>
          </Row>
          <Row>
            <Col>
              <div id="div_sidebar">
                <SimpleList
                  screens={this.state.screen}
                  onClick={this.componentDidMount}
                />
              </div>
            </Col>
            <Col>
              <div id="div_adminContent">
                <Container fluid>
                  <Row>
                    <Col>
                      <div style={{ height: "5vh" }}></div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>{this.state.active}</Col>
                  </Row>
                </Container>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
