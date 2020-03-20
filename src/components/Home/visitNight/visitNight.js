import React from "react";
import { Button, Form, Modal, Container, Col, Row } from "react-bootstrap";
//import api from "../../services/api"
import "./style.css";
import TextField from "@material-ui/core/TextField";
import Climate from "./climate/climate";
import api from "../../../services/api";

export default class VisitNight extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      control: false,
      students: "",
      date: "",
      email: "",
      disable: true
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

  handleSubmit = async event => {
    console.log(this.state.students);
    console.log(this.state.email);
    console.log(this.state.date);
  };

  disableButton = () => {
    return this.state.students > 20 ? true : false;
  };

  send(event) {
    //envia os dados para o banco
    //const response = await api.get("/visitaNoturna", this.state);
  }

  render() {
    return (
      <div>
        {/*Botão que aciona o modal para o agendamento noturno */}

        <Button
          id="teste2"
          size="md"
          variant="primary"
          className="mr-2"
          onClick={this.setControl}
          block
        >
          {" "}
          <b>Agendamento Noturno</b>
        </Button>

        <Modal
          show={this.state.control}
          onHide={() => this.setState({ control: false })}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title>Agendamento Noturno</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div id="leftSide">
              <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="formBasicNumber">
                  <Form.Label>
                    <h6>Informe o número de visitantes</h6>
                  </Form.Label>
                  <div noValidate autoComplete="off">
                    <TextField
                      fullWidth="true"
                      label="N° Visitantes"
                      variant="outlined"
                      size="small"
                      required
                      type="number"
                      error={this.state.students > 20}
                      helperText={
                        this.state.students > 20 == true
                          ? "Máximo de 20 Pessoas"
                          : " "
                      }
                      onChange={this.handleChangeStudents}
                    ></TextField>
                  </div>

                  <Form.Text className="text-muted">
                    *informe quantas pessoas irão acompanhar você nessa
                    visita(Max: 20 pessoas)
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicDay">
                  <Form.Label>
                    <h6>Dia da visita</h6>
                  </Form.Label>
                  <div Validate autoComplete="off">
                    <TextField
                      fullWidth="true"
                      variant="outlined"
                      size="small"
                      required
                      type="date"
                      onChange={this.handleChangeStudents}
                      max="2100-12-30"
                      min="2020-03-20"
                    ></TextField>
                  </div>
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label>
                    <h6>
                      Informe o seu email, para atualizar as informações da sua
                      visita.
                    </h6>
                  </Form.Label>
                  <div noValidate autoComplete="off">
                    <TextField
                      fullWidth="true"
                      label="Email"
                      variant="outlined"
                      size="small"
                      required
                      type="email"
                      onChange={this.handleChangeStudents}
                    ></TextField>
                  </div>
                </Form.Group>
                <Form.Row>
                  <Button
                    variant="primary"
                    size="sm"
                    //onClick={() => this.setState({ control: false })}
                    type="submit"
                    disabled={this.disableButton}
                  >
                    Agendar visita
                  </Button>
                  <br />
                  {/*Componente responsável por avisar ao usuário sobre as condições climaticas */}
                  <Climate />
                </Form.Row>
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
