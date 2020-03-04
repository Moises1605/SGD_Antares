import React, { Component } from "react";
import LateralBar from "../../components/Funcionario/lateral_bar";
import Cadastro from "../../components/Funcionario/form_cadastro";
import GerirFun from "../../components/Funcionario/gerir_funcionarios";
import GenRelatorio from "../../components/Funcionario/gerar_relatorio";
import TelaAgendamentos from "../../components/Funcionario/tela_agendamentos";
import HoraBol from "../../components/Funcionario/horario_bolsista";
import GerirBol from "../../components/Funcionario/gerir_bolsista";
import Calendar from "../../components/Funcionario/Calendar";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";

class App extends Component {
  constructor() {
    super();
    this.state = {
      screens: [
        <TelaAgendamentos />,
        <Cadastro />,
        <GerirBol />,
        null,
        <GerirFun />,
        <Calendar />,
        null,
        <GenRelatorio />
      ],
      active: null
    };
    this.handleClickLink = this.handleClickLink.bind(this);
  }

  handleClickLink(eventKey) {
    this.setState({
      active: this.state.screens[eventKey - 1]
    });
  }

  render() {
    return (
      <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
        <Row style={{ marginLeft: 0, marginRight: 0 }}>
          <Col
            style={{
              backgroundColor: "#20232a",
              float: "top",
              height: "10vh",
              position: "fixed",
              width: "100vw",
              zIndex: 3
            }}
          >
            <Row>
              <Col xs={11}>
                <h3
                  style={{
                    color: "#6d6d6d",
                    marginTop: "10px",
                    marginLeft: "10px"
                  }}
                >
                  Sistema de Agendamento Observatório Antares
                </h3>
              </Col>
              <Col>
                <h5
                  style={{
                    color: "#6d6d6d",
                    marginTop: "15px",
                    marginRight: "10px"
                  }}
                >
                  <a href="">Help</a>
                </h5>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <div
              style={{
                height: "100vh",
                width: "18vw",
                position: "fixed",
                float: "left",
                borderStyle: "solid",
                borderWidth: " 0px 1px 0px 0px",
                borderColor: "#ececec",
                backgroundColor: "#f8f9fa",
                paddingTop: "30vh"
              }}
            >
              <LateralBar onClick={this.handleClickLink} />
            </div>
          </Col>
          <Col>
            <div
              style={{
                float: "right",
                height: "100vh",
                width: "82vw",
                paddingTop: "15vh",
                paddingLeft: "2vw"
              }}
            >
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
    );
  }
}

export default App;
