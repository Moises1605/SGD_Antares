import React, { Component } from "react";
import { Form, Row, Col, Button, Container } from "react-bootstrap";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <Container>
          <Form>
            <h2
              style={{
                textAlign: "center"
              }}
            >
              Contato
              <h6
                style={{
                  marginTop: "10px"
                }}
              >
                <i>museuantares@gmail.com</i>

                <br />
                <i>(75) 3624-1921 </i>
              </h6>
            </h2>
            <hr
              style={{
                width: "25%",
                margin: "auto",
                backgroundColor: "#000"
              }}
            ></hr>
            <hr
              style={{
                width: "12.5%",
                margin: "7px auto 0 auto",
                backgroundColor: "#222"
              }}
            ></hr>
            <Form.Row
              style={{
                marginTop: "30px"
              }}
            >
              <Col md={6}>
                <Form.Group controlId="Name">
                  <Form.Control type="text" placeholder="Nome completo" />
                </Form.Group>
                <Form.Group controlId="Email">
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group controlId="Assunto">
                  <Form.Control type="text" placeholder="Assunto" />
                </Form.Group>
              </Col>
              <Col
                style={{
                  paddingLeft: "20px"
                }}
              >
                <Form.Group controlId="msg">
                  <Form.Control
                    as="textarea"
                    rows="5"
                    placeholder="Insira sua mensagem"
                  />
                </Form.Group>
              </Col>
            </Form.Row>

            <Form.Row>
              <Col xs={6}>
                <Button block variant="primary" type="submit">
                  ENVIAR MENSAGEM
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </Container>
      </React.Fragment>
    );
  }
}

export default Contact;
