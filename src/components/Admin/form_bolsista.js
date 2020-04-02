import React, { Component } from "react";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import api from "../../services/api";
import TextField from "@material-ui/core/TextField";

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
      repassword: "" //confirmar senha
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  /** NOTE Método para registrar dados do form quando alterado*/
  handleChange(event) {
    let { name, value } = event.target;
    //this.setState({ [className.split(" ")[0]]: value });
    this.setState({ [event.target.name]: value });
  }

  disableButton = () => {
    return this.state.repassword === ""
      ? false
      : this.state.password === this.state.repassword
      ? false
      : true;
  };

  async handleSubmit(event) {
    api.post("/adicionarBolsista", this.state);
    console.log(this.state.name);
    console.log(this.state.login);
    console.log(this.state.surname);
    console.log(this.state.address);
    console.log(this.state.email);
    console.log(this.state.enrollment);
    console.log(this.state.cpf);
    console.log(this.state.phone);
    console.log(this.state.password);
  }

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlledId="Name-surname">
            <Form.Row>
              <Col>
                {/*<Form.Label>Nome</Form.Label>
                <Form.Control
                  required
                  placeholder="Nome"
                  value={this.state.name}
                  onChange={this.handleChange}
                  className="name"
                />*/}
                <div noValidate autoComplete="off">
                  <TextField
                    name="name"
                    fullWidth="true"
                    id="bols_name"
                    label="Nome"
                    variant="outlined"
                    size="small"
                    required
                    type="text"
                    //className="name"
                    onChange={this.handleChange}
                    value={this.state.name}
                  ></TextField>
                </div>
              </Col>
              <Col>
                {/* <Form.Label>Sobrenome</Form.Label>
                <Form.Control
                  required
                  placeholder="Sobrenome"
                  value={this.state.surname}
                  onChange={this.handleChange}
                  className="surname"
               />*/}
                <div noValidate autoComplete="off">
                  <TextField
                    fullWidth="true"
                    id="bols_surname"
                    label="Sobrenome"
                    variant="outlined"
                    size="small"
                    required
                    type="text"
                    name="surname"
                    value={this.state.surname}
                    onChange={this.handleChange}
                  ></TextField>
                </div>
              </Col>
            </Form.Row>
          </Form.Group>
          <Form.Group controlledId="Login-Email">
            <Form.Row>
              <Col xs={5}>
                {/*<Form.Label>Nome de usuário</Form.Label>
                <Form.Control
                  required
                  placeholder="Nome de usuário"
                  value={this.state.login}
                  className="login"
                  onChange={this.handleChange}
                />*/}
                <div noValidate autoComplete="off">
                  <TextField
                    fullWidth="true"
                    id="bols_login"
                    label="Login"
                    variant="outlined"
                    size="small"
                    required
                    type="text"
                    name="login"
                    value={this.state.login}
                    onChange={this.handleChange}
                  ></TextField>
                </div>
              </Col>
              <Col xs={7}>
                {/*<Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  className="email"
                />*/}
                <div noValidate autoComplete="off">
                  <TextField
                    fullWidth="true"
                    id="bols_email"
                    label="Email"
                    variant="outlined"
                    size="small"
                    required
                    type="email"
                    value={this.state.email}
                    name="email"
                    onChange={this.handleChange}
                  ></TextField>
                </div>
              </Col>
            </Form.Row>
          </Form.Group>
          <Form.Group controlledId="Phone-CPF">
            <Form.Row>
              <Col xs={4}>
                {/* <Form.Label>CPF</Form.Label>
                <Form.Control
                  required
                  placeholder="CPF"
                  value={this.state.cpf}
                  className="cpf"
                  onChange={this.handleChange}
            />*/}
                <div noValidate autoComplete="off">
                  <TextField
                    fullWidth="true"
                    id="bols_cpf"
                    label="CPF"
                    variant="outlined"
                    size="small"
                    required
                    type="number"
                    value={this.state.cpf}
                    name="cpf"
                    onChange={this.handleChange}
                  ></TextField>
                </div>
              </Col>
              <Col xs={4}>
                {/* <Form.Label>CPF</Form.Label>
                <Form.Control
                  required
                  placeholder="CPF"
                  value={this.state.cpf}
                  className="cpf"
                  onChange={this.handleChange}
            />*/}
                <div noValidate autoComplete="off">
                  <TextField
                    fullWidth="true"
                    id="bols_enrollment"
                    label="Matrícula"
                    variant="outlined"
                    size="small"
                    required
                    type="number"
                    value={this.state.enrollment}
                    name="enrollment"
                    onChange={this.handleChange}
                  ></TextField>
                </div>
              </Col>
              <Col xs={4}>
                {/*<Form.Label>Telefone</Form.Label>
                <Form.Control
                  required
                  placeholder="Telefone"
                  value={this.state.phone}
                  className="phone"
                  onChange={this.handleChange}
                />*/}
                <div noValidate autoComplete="off">
                  <TextField
                    fullWidth="true"
                    id="bols_phone"
                    label="Telefone"
                    variant="outlined"
                    size="small"
                    required
                    type="number"
                    name="phone"
                    value={this.state.phone}
                    onChange={this.handleChange}
                  ></TextField>
                </div>
              </Col>
            </Form.Row>
          </Form.Group>
          <Form.Group controlledId="Address">
            <Form.Row>
              <Col xs={12}>
                {/*<Form.Label>Endereço</Form.Label>
                <Form.Control
                  required
                  placeholder="Rua, Bairro, Número."
                  value={this.state.adress}
                  className="address"
                  onChange={this.handleChange}
                />*/}
                <div noValidate autoComplete="off">
                  <TextField
                    fullWidth="true"
                    id="bols_address"
                    label="Endereço: Rua, Bairro, Número."
                    variant="outlined"
                    size="small"
                    required
                    type="texte"
                    value={this.state.adress}
                    name="address"
                    onChange={this.handleChange}
                  ></TextField>
                </div>
              </Col>
            </Form.Row>
          </Form.Group>
          <Form.Group controlledId="Password">
            <Form.Row>
              <Col>
                {/*<Form.Label>Senha</Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="Senha"
                  value={this.state.password}
                  className="password"
                  onChange={this.handleChange}
                />*/}
                <div noValidate autoComplete="off">
                  <TextField
                    fullWidth="true"
                    id="bols_password"
                    label="Senha"
                    variant="outlined"
                    size="small"
                    required
                    type="password"
                    value={this.state.password}
                    name="password"
                    onChange={this.handleChange}
                    error={
                      this.state.repassword === ""
                        ? ""
                        : this.state.password !== this.state.repassword
                        ? true
                        : false
                    }
                  ></TextField>
                </div>
              </Col>
              <Col>
                {/*<Form.Label>Repetir Senha</Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="Repetir Senha"
                  value={this.state.repPassword}
                  className="repPassword"
                  onChange={this.handleChange}
                />*/}
                <div noValidate autoComplete="off">
                  <TextField
                    fullWidth="true"
                    id="bols_repassword"
                    label="Repetir Senha"
                    variant="outlined"
                    size="small"
                    required
                    type="password"
                    value={this.state.repassword}
                    name="repassword"
                    onChange={this.handleChange}
                    error={
                      this.state.repassword === ""
                        ? ""
                        : this.state.password !== this.state.repassword
                        ? true
                        : false
                    }
                    helperText={
                      this.state.repassword === ""
                        ? ""
                        : this.state.password !== this.state.repassword
                        ? "As senhas não correspondem"
                        : ""
                    }
                  ></TextField>
                </div>
              </Col>
            </Form.Row>
          </Form.Group>
          <Form.Row>
            <Col xs={12}>
              <br />
              <Button
                block
                variant="success"
                type="submit"
                disabled={this.disableButton()}
                //onClick={this.handleSubmit}
              >
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
