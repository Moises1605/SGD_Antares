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
      gerirB: false, //gerir bolsista
      gerirF: false, //gerir Funcionário
      validarA: false, //validar agendamento
      gerarR: false, //gerar relatorio
      inserirA: false, //inserir Ativadade extra
      gerirHor: false, //gerir Horário
      gerirBackup: false, //gerir Backup
      gerirE: false, //gerir escolas
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

  handleCheck = (event) => {
    this.setState({ [event.target.name]: event.target.checked });
  };

  disableButton = () => {
    return this.state.repassword === ""
      ? false
      : this.state.password === this.state.repassword &&
        (this.state.gerirB !== false ||
          this.state.gerarR !== false ||
          this.state.gerirBackup !== false ||
          this.state.gerirF !== false ||
          this.state.gerirHor !== false ||
          this.state.validarA !== false ||
          this.state.inserirA !== false ||
          this.state.gerirE !== false)
      ? false
      : true;
  };

  async handleSubmit(event) {
    var result = api.post("/adicionarBolsista", this.state);
    this.setState({ id: result });
    api.post("/addPermissoes", this.state);
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
            <br />
            <Form.Row>
              <Form.Label>
                <h6>Selecione as permissões do usuário.</h6>
              </Form.Label>
            </Form.Row>
            <Form.Row>
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={this.handleCheck}
                    size="small"
                    color="primary"
                    name="gerirB"
                  />
                }
                label="Gerenciar Bolsistas"
              />
            </Form.Row>
            <Form.Row>
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={this.handleCheck}
                    name="gerirHor"
                    size="small"
                    color="primary"
                  />
                }
                label="Cadastrar Horário dos Bolsistas"
              />
            </Form.Row>
            <Form.Row>
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={this.handleCheck}
                    name="gerirF"
                    size="small"
                    color="primary"
                  />
                }
                label="Gerenciar Funcionários"
              />
            </Form.Row>
            <Form.Row>
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={this.handleCheck}
                    name="inserirA"
                    size="small"
                    color="primary"
                  />
                }
                label="Inserir Novas Atividades"
              />
            </Form.Row>
            <Form.Row>
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={this.handleCheck}
                    name="gerirE"
                    size="small"
                    color="primary"
                  />
                }
                label="Gerenciar Escolas"
              />
            </Form.Row>
            <Form.Row>
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={this.handleCheck}
                    name="validarA"
                    size="small"
                    color="primary"
                  />
                }
                label="Confirmar Agendamentos"
              />
            </Form.Row>
            <Form.Row>
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={this.handleCheck}
                    name="gerirBackup"
                    size="small"
                    color="primary"
                  />
                }
                label="Realizar e Restaurar Backups"
              />
            </Form.Row>
            <Form.Row>
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={this.handleCheck}
                    name="gerarR"
                    size="small"
                    color="primary"
                  />
                }
                label="Criar Relatório"
              />
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
