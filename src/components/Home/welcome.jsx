import React, { Component } from "react";
import VisitNight from "./visitNight/visitNight";
import {Link} from 'react-router-dom';
import {
  Container,
  Button,
  ButtonToolbar,
  Row,
  Col,
  Modal
} from "react-bootstrap";
import "./welcome.scss";

class Welcome extends Component {
  constructor() {
    super();
    this.state = {
      Agendamento: false,
      controlNoturno: false,
      teste: true
    };
    this.setControlNoturno = this.setControlNoturno.bind(this)
  }
  setControlAgendamento = () => this.setState({ Agendamento: true });
  setControlNoturno(event) {
    this.setState({ controlNoturno: true });
  }
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
              <Button
                id="teste"
                variant="primary"
                block
                className="mr-2"
                onClick={this.setControlAgendamento}
              >
                Realizar Agendamento
              </Button>
            </Col>
            <Modal

              aria-labelledby="contained-modal-title-vcenter"
              centered
              show={this.state.Agendamento}
              onHide={() => this.setState({ Agendamento: false })}
              style={{ textAlign: "justify" }}
            >
              <Modal.Header closeButton>
                <Modal.Title>Agendamentos</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Row>
                  <Col md={12}>
                    <h5>Agendamento Escolar</h5>
                    <h6>
                      Para realizar um agendamento escolar, é necessário
                      realizar um cadastro no sistema, para que a escola seja
                      validada. Dessa forma, será possível agendar e monitorar
                      os agendamentos.
                    </h6>
                    <Button block>
                      <Link to="/login" className="btn_link">
                      <b>Agendamento Escolar</b>
                        </Link>
                    </Button>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col md={12}>
                    <h5>Individual</h5>
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
                    <Button
                      id="teste2"
                      size="md"
                      variant="primary"
                      className="mr-2"
                      onClick={this.setControlNoturno}
                      block
                    >
                      {" "}
                      <b>Agendamento Noturno</b>
                    </Button>

                    <Modal
                      show={this.state.controlNoturno}
                      onHide={() => this.setState({controlNoturno: false})}
                      aria-labelledby="example-modal-sizes-title-lg"
                    >
                      <Modal.Header closeButton>
                        <Modal.Title>Agendamento Noturno</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                          <VisitNight/>
                      </Modal.Body>
                    </Modal>
                      
                  </Col>
                </Row>
              </Modal.Body>
            </Modal>
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
