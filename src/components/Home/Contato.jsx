import React, { Component } from "react";
import { Form, Row, Col, Button, Container } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import "./contato.scss";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      assunto: "",
      msg: ""
    };
  }

  handleChangeName = event => {
    this.setState({ name: event.target.value });
  };
  handleChangeEmail = event => {
    this.setState({ email: event.target.value });
  };
  handleChangeAssunto = event => {
    this.setState({ assunto: event.target.value });
  };
  handleChangeMsg = event => {
    this.setState({ msg: event.target.value });
  };

  handleSubmit = async event => {
    console.log(this.state.name);
    console.log(this.state.email);
    console.log(this.state.assunto);
    console.log(this.state.msg);
  };

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

          <Form onSubmit={this.handleSubmit}>
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
                  <div noValidate autoComplete="off">
                    <TextField
                      fullWidth="true"
                      id="outlined-basic"
                      label="Nome Completo"
                      variant="outlined"
                      size="small"
                      required
                      type="char"
                      error={this.state.name.length > 30}
                      onChange={this.handleChangeName}
                    />
                  </div>
                </Form.Group>
                <Form.Group>
                  <div Validate autoComplete="off">
                    <TextField
                      fullWidth="true"
                      label="Email"
                      variant="outlined"
                      size="small"
                      required
                      type="email"
                      onChange={this.handleChangeEmail}
                    />
                  </div>
                </Form.Group>
                <Form.Group>
                  <div noValidate autoComplete="off">
                    <TextField
                      fullWidth="true"
                      label="Assunto"
                      variant="outlined"
                      size="small"
                      type="text"
                      required
                      onChange={this.handleChangeAssunto}
                    />
                  </div>
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
                  <div noValidate autoComplete="off">
                    <TextField
                      fullWidth="true"
                      label="Insira sua Mensagem"
                      variant="outlined"
                      size="small"
                      multiline="true"
                      type="text"
                      rows={7}
                      required
                      onChange={this.handleChangeMsg}
                    />
                  </div>
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
