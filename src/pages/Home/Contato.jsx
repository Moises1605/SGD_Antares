import React, { Component } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <h2>Contato</h2>
        <Row>
          <Col xs={6}></Col>
          <Col xs={6}>
            <Form>
              <Form.Group controlId="Name">
                <Form.Label>Nome Completo</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Digite seu nome completo"
                />
              </Form.Group>
              <Form.Group controlId="Email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Digite Seu Email" />
              </Form.Group>
              <Form.Group controlId="Assunto">
                <Form.Label>Assunto</Form.Label>
                <Form.Control type="text" placeholder="Assunto a ser tratado" />
              </Form.Group>
              <Form.Group controlId="msg">
                <Form.Label>Mensagem</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="4"
                  placeholder="Insira sua mensagem"
                />
              </Form.Group>
              <Form.Row>
                <Col xs={12}>
                  <br />
                  <Button block variant="primary" type="submit">
                    ENVIAR MENSAGEM
                  </Button>
                </Col>
              </Form.Row>
            </Form>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default Contact;
