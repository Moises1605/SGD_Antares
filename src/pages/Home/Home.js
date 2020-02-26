import React from "react";

import NavBar from "./NavBar";
import Contact from "./Contato";
import { Container, Button, ButtonToolbar, Row, Col } from "react-bootstrap";
import Calendario from "./Calendar";
import VisitNight from "./visitNight/visitNight";
import Atracoes from "./Atracoes";
import GoogleApiWrapper from "./maps";
import "./Home.css";

export default class home extends React.Component {
  constructor() {
    super();
    this.state = {
      horarios: [], //Array com os horários dos bolsistas
      contato: {
        //Objeto para contato do usuário
        name: "", //Nome
        email: "", //Email
        assunto: "", //Assunto referente ao contato
        msg: "" //Mensagem
      }
    };
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div id="div_home">
          <div id="div_inicio">
            <Container>
              <h1
                style={{
                  padding: "100px 100px 0 100px"
                }}
              >
                <b>BEM-VINDO AO</b>
                <span
                  style={{
                    color: "#d86c00a7"
                  }}
                >
                  {" "}
                  <b> SISTEMA DE AGENDAMENTO</b>
                </span>
              </h1>
              <div id="div_content">
                <h3
                  style={{
                    padding: "0 100px  0 100px"
                  }}
                >
                  <u>DO OBSERVATÓRIO ASTRONÔMICO ANTARES</u>
                </h3>
                <br />
                <h5>Universidade Estadual de Feira de Santana - UEFS</h5>
                <br />
                <h4
                  style={{
                    padding: "0 100px  0 100px"
                  }}
                >
                  No Observatório Astronômico Antares, são realizadas visitas a
                  exposições, observações com telescópios automatizados, cursos,
                  palestras, laboratórios, projeções de vídeo, sessões no
                  planetário, etc.
                </h4>
              </div>
              <br />
              <Row
                style={{
                  marginTop: "30px"
                }}
              >
                <Col md={3}></Col>
                <Col md={6}>
                  <Button id="teste" className="mr-2">
                    Agendamento Escolar
                  </Button>
                </Col>
                <Col md={3}></Col>
              </Row>
              <Row>
                <Col md={3}></Col>
                <Col md={6}>
                  <VisitNight />
                </Col>
                <Col md={3}></Col>
              </Row>
              <h6
                style={{
                  marginTop: "15px"
                }}
              >
                <i>
                  <u>
                    O atendimento é gratuito. Não cobramos qualquer taxa pela
                    visitação.
                  </u>
                </i>
              </h6>

              {/* <Button  variant="outline-success" className="mr-2">Agendamento Noturno</Button> */}
            </Container>
          </div>

          <div id="div_atracoes">
            <Atracoes />
          </div>

          <div id="div_calendar">
            <Container>
              <Calendario />
            </Container>
          </div>
          <div id="div_maps">
            <Container fluid>
              <GoogleApiWrapper />
            </Container>
          </div>

          <div id="div_contato">
            <Contact />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
