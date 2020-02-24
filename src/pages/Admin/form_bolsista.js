import React, { Component } from "react";
import { Form, Container, Row, Col, Button } from "react-bootstrap";

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
      password: "" //senha
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let { className, value } = event.target;
    this.setState({ [className.split(" ")[0]]: value });
  }

  handleSubmit() {}

  render() {
    return (
      <Container
        style={{
          height: "40vh"
        }}
      >
        <Row>
          <Col>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlledId="Name-surname">
                <Form.Row>
                  <Col>
                    <Form.Label>Nome</Form.Label>
                    <Form.Control
                      required
                      placeholder="Nome"
                      value={this.state.name}
                      onChange={this.handleChange}
                      className="name"
                    />
                  </Col>
                  <Col>
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
              <Form.Group controlledId="Address-Email">
                <Form.Row>
                  <Col xs={8}>
                    <Form.Label>Endereço</Form.Label>
                    <Form.Control
                      required
                      placeholder="Rua, Bairro, Número."
                      value={this.state.address}
                      className="address"
                      onChange={this.handleChange}
                    />
                  </Col>
                  <Col>
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
              <Form.Group controlledId="Phone-Enrollment">
                <Form.Row>
                  <Col xs={8}>
                    <Form.Label>Número de Matrícula</Form.Label>
                    <Form.Control
                      required
                      placeholder="Número de Matrícula"
                      value={this.state.enrollment}
                      className="enrollment"
                      onChange={this.handleChange}
                    />
                  </Col>
                  <Col>
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
              <Form.Row>
                <Col xs={10}></Col>
                <Col>
                  <Button block variant="outline-primary" type="submit">
                    Cadastrar
                  </Button>
                </Col>
              </Form.Row>
            </Form>
          </Col>
          <Col xs={1}></Col>
        </Row>
      </Container>
    );
  }
}

export default CadastroBolsista;
