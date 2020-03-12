import React from "react";
import { Button, Form, Modal, Container, Col, Row } from "react-bootstrap";
//import api from "../../services/api"
import "./style.css";
import Climate from "./climate/climate";
import api from '../../../services/api';

export default class VisitNight extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      control: false,
      students: "",
      date: "",
      email: ""
    };
    this.setControl = this.setControl.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeStudents = this.handleChangeStudents.bind(this);
    this.send = this.send.bind(this);
  }
  setControl(event) {
    this.setState({ control: true });
  }

  handleChangeEmail(event) {
    this.setState({ email: event.target.value });
  }

  handleChangeStudents(event) {
    this.setState({ students: event.target.value });
  }

  handleChangeDate(event) {
    this.setState({ date: event.target.value });
  }

  send(event) {
    //envia os dados para o banco
    //const response = await api.get("/visitaNoturna", this.state);
  }

  render() {
    return (
      <div>
        {/*Botão que aciona o modal para o agendamento norturno */}

        <Button
          id="teste2"
          size="md"
          variant="success"
          className="mr-2"
          block
          onClick={this.setControl}
        >
          {" "}
          <b>Agendamento Noturno</b>
        </Button>

        <Modal
          size="lg"
          show={this.state.control}
          onHide={() => this.setState({ control: false })}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton id="header">
            <Modal.Title id="example-modal-sizes-title-lg">
              Agendamento Noturno
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div id="leftSide">
              <Form>
                <Form.Group controlId="formBasicNumber">
                  <Form.Label>Informe o número de visitantes</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    id="ccf"
                    value={this.state.students}
                    onChange={this.handleChangeStudents}
                  />
                  <Form.Text className="text-muted">
                    *informe quantas pessoas irão acompanhar você nessa
                    visita(Ex: 1,2...)
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicDay">
                  <Form.Label>Dia da visita</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="DD/MM/AAAA"
                    value={this.state.date}
                    onChange={this.handleChangeDate}
                  />
                  <Form.Text className="text-muted">
                    *Coloque a data no formato indicado
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label>
                    Informe o seu email, para atualizar as informações da sua
                    visita
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleChangeEmail}
                  />
                </Form.Group>
                <Button variant="primary" onClick={this.send}>
                  Agendar visita
                </Button>
                {/*Componente responsável por avisar ao usuário sobre as condições climaticas */}
                <Climate />
              </Form>
            </div>
            {/*Só para manter a formatação */}
            <div id="rightSide"></div>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
