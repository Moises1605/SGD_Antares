import React, { Component } from "react";
import { Form, Row, Col, Button, Container } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import "./contato.scss";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <Container>
          <h2 id="contato_titulo">
            Contato
            {/*<h6 id="contato_dados">
              <i>museuantares@gmail.com</i>

              <br />
              <i>(75) 3624-1921 </i>
    </h6>*/}
          </h2>
          {/*<hr
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
          ></hr>*/}

          <Form>
            <Form.Row
              style={{
                marginTop: "30px"
              }}
            >
              <Col md={6} sm={12}>
                {/*<Form.Group controlId="Name">
                  <Form.Control type="text" placeholder="Nome completo" />
                </Form.Group>
                <Form.Group controlId="Email">
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group controlId="Assunto">
                  <Form.Control type="text" placeholder="Assunto" />
            </Form.Group>*/}
                <Form.Group>
                  <form noValidate autoComplete="off">
                    <TextField
                      fullWidth="true"
                      id="outlined-basic"
                      label="Nome Completo"
                      variant="outlined"
                      size="small"
                    />
                  </form>
                </Form.Group>
                <Form.Group>
                  <form Validate autoComplete="off">
                    <TextField
                      fullWidth="true"
                      label="Email"
                      variant="outlined"
                      size="small"
                    />
                  </form>
                </Form.Group>
                <Form.Group>
                  <form noValidate autoComplete="off">
                    <TextField
                      fullWidth="true"
                      label="Assunto"
                      variant="outlined"
                      size="small"
                    />
                  </form>
                </Form.Group>
              </Col>
              <Col
                md={6}
                sm={12}
                style={
                  {
                    //paddingLeft: "20px"
                  }
                }
              >
                <Form.Group controlId="msg">
                  <form noValidate autoComplete="off">
                    <TextField
                      fullWidth="true"
                      label="Insira sua Mensagem"
                      variant="outlined"
                      size="small"
                      multiline="true"
                      rows={7}
                    />
                  </form>
                </Form.Group>
              </Col>
            </Form.Row>

            <Form.Row>
              <Col xl={6} sm={12}>
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
