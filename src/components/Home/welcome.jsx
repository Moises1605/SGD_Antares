import React, { Component } from "react";
import VisitNight from "./visitNight/visitNight";
import { Container, Button, ButtonToolbar, Row, Col } from "react-bootstrap";
import "./welcome.scss";

class Welcome extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <div
            style={{
              paddingTop: "80px"
            }}
          >
            <h2 id="welcome">
              BEM-VINDO AO
              <span
                style={{
                  color: "#007bff"
                }}
              >
                {" "}
                SISTEMA DE AGENDAMENTO
              </span>
            </h2>
            <h4 id="texto_welcome">Do Observátorio Astronômico Antares</h4>
          </div>
          <Row id="row_button">
            <Col md={4} xs={2}></Col>
            <Col md={4} xs={8}>
              <Button id="teste" variant="primary" block className="mr-2">
                Realizar Agendamento
              </Button>
            </Col>
            <Col md={4} xs={2}></Col>
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
