import React, { Component } from "react";
import VisitNight from "./visitNight/visitNight";
import { Container, Button, ButtonToolbar, Row, Col } from "react-bootstrap";

class Welcome extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <h2
            style={{
              padding: "115px 100px 0 100px"
            }}
          >
            BEM-VINDO AO
            <span
              style={{
                color: "#d86c00"
              }}
            >
              {" "}
              SISTEMA DE AGENDAMENTO
            </span>
          </h2>
          <div id="div_content">
            <h4
              style={{
                padding: "0 100px  0 100px"
              }}
            >
              DO OBSERVATÓRIO ASTRONÔMICO ANTARES
            </h4>
            <br />
            <h4
              style={{
                padding: "0 100px  0 100px"
              }}
            >
              O Observatório Astronômico Antares foi inaugurado em{" "}
              <i
                style={{
                  color: "#d86c00"
                }}
              >
                25 de Setembro de 1971 e incorporado à UEFS em 27 de Março de
                1992
              </i>{" "}
              como uma Unidade de Desenvolvimento Organizacional, passando a
              realizar e a colaborarar com os cursos de graduação e de
              pós-graduação da UEFS em{" "}
              <i
                style={{
                  color: "#d86c00"
                }}
              >
                atividades de ensino, pesquisa e extensão universitária.
              </i>
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
      </React.Fragment>
    );
  }
}

export default Welcome;
