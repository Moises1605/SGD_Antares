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
      students: "",
      date: "",
      email: "",
      disable: true,
    };
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeStudents = this.handleChangeStudents.bind(this);
    this.send = this.send.bind(this);
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
    event.preventDefault();
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
            <div id="leftSide">
              <Form onSubmit={this.send}>
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
                      onChange={this.handleChangeDate}
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
                      onChange={this.handleChangeEmail}
                    ></TextField>
                  </div>
                </Form.Group>                  
                <Form.Row>
                  <Button
                    variant="primary"
                    size="sm"
                    type="submit"
                    disabled={this.disableButton()}
                  >
                    Agendar visita
                  </Button>
                  {/*Componente responsável por avisar ao usuário sobre as condições climaticas */}
                  
                  <Climate />
                </Form.Row>
                
              </Form>
            </div>
            {/*Só para manter a formatação */}          
            <div id="rightSide"></div>
      </div>
    );
  }
}
