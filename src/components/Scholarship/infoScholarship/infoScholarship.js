import React, { Component } from "react";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import api from "../../../services/api";
import './style.css'
import SweetAlert from 'sweetalert2-react';
export default class info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      IDScholarship: this.props.idScholarship,
      login: "", //login
      name: "", //nome
      surname: "", //sobrenome
      address: "", //endereço
      email: "", //email
      enrollment: "", //matrícula
      cpf: "", //cpf
      phone: "", //telefone
      password: "", //senha
      show: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  /** NOTE Método para registrar dados do form quando alterado*/
  handleChange(event) {
    let { className, value } = event.target;
    this.setState({ [className.split(" ")[0]]: value });
  }

  /*async*/ componentDidMount() {
    /*const response = await api.post("/adicionarBolsista", this.state);
    this.setState({
        name: response.data.name,
        login: response.data.login,
        surname: response.data.surname,
        address: response.data.address,
        email: response.data.email,
        enrollment: response.data.enrollment,
        cpf: response.data.cpf,
        phone: response.data.phone,
        password: response.data.password,
    })*/
  }

  async handleSubmit(event) {
    /* api.post("/adicionarBolsista", this.state);
     console.log(this.state.name);
     console.log(this.state.login);
     console.log(this.state.surname);
     console.log(this.state.address);
     console.log(this.state.email);
     console.log(this.state.enrollment);
     console.log(this.state.cpf);
     console.log(this.state.phone);
     console.log(this.state.password);*/
    this.setState({ show: true });
    event.preventDefault();
  }

  render() {
    return (
      <Container>
        <SweetAlert
          show={this.state.show}
          icon='sucess'
          title="Sucesso"
          text="Alterações salvas com sucesso"
          onConfirm={() => this.setState({ show: false })}
        />
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlledId="Name-surname">
            <Form.Row>
              <Col xs={5}>
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  required
                  placeholder="Nome"
                  value={this.state.name}
                  onChange={this.handleChange}
                  className="name"
                />
              </Col>
              <Col xs={7}>
                <Form.Label>Sobrenome</Form.Label>
                <Form.Control
                  required
                  placeholder="Sobrenome"
                  value={this.state.surname}
                  onChange={this.handleChange}
                  className="surname"
                />
              </Col>
            </Form.Row>
          </Form.Group>
          <Form.Group controlledId="Login-Email">
            <Form.Row>
              <Col xs={5}>
                <Form.Label>Nome de usuário</Form.Label>
                <Form.Control
                  required
                  placeholder="Nome de usuário"
                  value={this.state.login}
                  className="login"
                  onChange={this.handleChange}
                />
              </Col>
              <Col xs={7}>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  className="email"
                />
              </Col>
            </Form.Row>
          </Form.Group>
          <Form.Group controlledId="Phone-CPF-Enrollment">
            <Form.Row>
              <Col xs={4}>
                <Form.Label>CPF</Form.Label>
                <Form.Control
                  required
                  placeholder="CPF"
                  value={this.state.cpf}
                  className="cpf"
                  onChange={this.handleChange}
                />
              </Col>
              <Col xs={4}>
                <Form.Label>Matrícula</Form.Label>
                <Form.Control
                  required
                  placeholder="Nº de Matrícula"
                  value={this.state.enrollment}
                  className="enrollment"
                  onChange={this.handleChange}
                />
              </Col>
              <Col xs={4}>
                <Form.Label>Telefone</Form.Label>
                <Form.Control
                  required
                  placeholder="Telefone"
                  value={this.state.phone}
                  className="phone"
                  onChange={this.handleChange}
                />
              </Col>
            </Form.Row>
          </Form.Group>
          <Form.Group controlledId="Adress">
            <Form.Row>
              <Col xs={12}>
                <Form.Label>Endereço</Form.Label>
                <Form.Control
                  required
                  placeholder="Rua, Bairro, Número."
                  value={this.state.adress}
                  className="address"
                  onChange={this.handleChange}
                />
              </Col>
            </Form.Row>
          </Form.Group>
          <Form.Group controlledId="Password">
            <Form.Row>
              <Col>
                <Form.Label>Senha</Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="Senha"
                  value={this.state.password}
                  className="password"
                  onChange={this.handleChange}
                />
              </Col>
              <Col>
                <Form.Label>Repetir Senha</Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="Repetir Senha"
                  value={this.state.repPassword}
                  className="repPassword"
                  onChange={this.handleChange}
                />
              </Col>
            </Form.Row>
          </Form.Group>
          <Button
            id='buttonUpdate'
            // block
            variant="success"
            type="submit"
          //onClick={this.handleSubmit}
          >
            Salvar alterações
              </Button>
        </Form>
      </Container>
    );
  }
}