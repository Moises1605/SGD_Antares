import React, { Component } from "react";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import api from "../../services/api";

class CadastroBolsista extends Component {
  constructor() {
    super();
    this.state = {
      login: "", //login
      name: "", //nome
      surname: "", //sobrenome
      address: "", //endereço
      email: "", //email
      enrollment: "", //matrícula
      cpf: "", //cpf
      phone: "", //telefone
      password: "", //senha
      redirect: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let { className, value } = event.target;
    this.setState({ [className.split(" ")[0]]: value });
  }

  /*async handleSubmit() {
    api
      .post("/adicionarBolsista", this.state)
      .then(function(response) {
        // handle success
        this.setState({ redirect: true });
        console.log(response);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  }*/

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
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
          <Form.Group>
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
          <Form.Group>
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
          <Form.Group>
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
          <Form.Group>
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
          <Form.Row>
            <Col xs={12}>
              <Button block variant="success" type="submit">
                Cadastrar
              </Button>
            </Col>
          </Form.Row>
        </Form>
      </Container>
    );
  }
}

export default CadastroBolsista;
