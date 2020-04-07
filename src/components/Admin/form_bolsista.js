import React, { Component } from "react";
import { Form, Container, Row, Col, Button, FormLabel } from "react-bootstrap";
import api from "../../services/api";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";

class CadastroBolsista extends Component {
  constructor() {
    super();
    this.state = {
      login: "", //login
      name: "", //nome
      surname: "", //sobrenome
      rua: "", //rua
      cidade: "", // cidade
      bairro: "", //bairro
      numero: "", //numero
      email: "", //email
      enrollment: "", //matrícula
      cpf: "", //cpf
      phone: "", //telefone
      password: "", //senha
      repassword: "", //confirmar senha
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
  }

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Form.Row>
            <Form.Label>
              <h6>Insira os dados do bolsista</h6>
            </Form.Label>
          </Form.Row>
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
              <Col xs={6}>
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
                    id="bols_cidade"
                    label="Cidade"
                    variant="outlined"
                    size="small"
                    required
                    type="text"
                    value={this.state.cidade}
                    name="cidade"
                    onChange={this.handleChange}
                  ></TextField>
                </div>
              </Col>
              <Col xs={6}>
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
                    id="bols_bairro"
                    label="Bairro"
                    variant="outlined"
                    size="small"
                    required
                    type="text"
                    value={this.state.bairro}
                    name="bairro"
                    onChange={this.handleChange}
                  ></TextField>
                </div>
              </Col>
            </Form.Row>
          </Form.Group>
          <Form.Group>
            <Form.Row>
              <Col xs={8}>
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
                    id="bols_rua"
                    label="Rua"
                    variant="outlined"
                    size="small"
                    required
                    type="text"
                    value={this.state.rua}
                    name="rua"
                    onChange={this.handleChange}
                  ></TextField>
                </div>
              </Col>
              <Col xs={4}>
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
                    id="bols_numero"
                    label="Número"
                    variant="outlined"
                    size="small"
                    required
                    type="number"
                    value={this.state.numero}
                    name="numero"
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
