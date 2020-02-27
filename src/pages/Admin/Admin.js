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
      <div>
        <Container
          fluid
          style={{
            paddingLeft: 0
          }}
        >
          <Row>
            <Col md={12}>
              <Navbar />
            </Col>
          </Row>
          <div id="div_sidearea">
            <div id="div_sidebar">
              <SimpleList
                screens={this.state.screen}
                onClick={this.componentDidMount}
              />
            </div>
            <Container fluid>
              <div id="div_screen">{this.state.active}</div>
            </Container>
          </div>
        </Container>
      </div>
    );
  }
}
