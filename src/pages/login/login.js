import React from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import "./style.css";
import { Link, Redirect } from "react-router-dom";
import api from "../../services/api";
import logo from "../../assets/logoV2.png";
import ForgetPassword from "./forgetPassword/forgetPassword";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import LockOpenIcon from "@material-ui/icons/LockOpen";

import { login } from "../../services/auth";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      type: "-1",
      idUser: "0",
      redirect: false,
      permission2: [],
      role: "",
      error: "",
    };

    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleLogin = async (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    if (!username || !password) {
      this.setState({ error: "Preencha e-mail e senha para continuar!" });
    }
    try {
      const response = await api.post("/authUser", { username, password });
      login(response.data.token);
      console.log(response);
    } catch (err) {
      this.setState({
        error: "Houve um problema com o login, verifique suas credencias.",
      });
    }
  };

  handleChangeUsername(event) {
    this.setState({ username: event.target.value });
  }

  //Responsável por controlar o campo de texto  que guarda a senha do usuário.
  handleChangePassword(event) {
    this.setState({ password: event.target.value });
  }

  handleKeyPress = (event) => {
    if (event.key === "Enter") {
      this.handleSubmit(event);
    }
  };

  //Responsável por chamar a rota que retorna os dados do usuário com a respectiva senha e email digitados.
  async handleSubmit(event) {
    //manda os dados do cadastro para o banco.
    //const response = await api.get('/login',this.state);
    //this.setState({type: response.data.type});
    //this.setState({idUser: response.data.id});
    //Se for um usuário do tipo escola
    if (this.state.username != " ") {
      this.setState({ redirect: true });
    }
  }

  render() {
    if (this.state.redirect) {
      //if(this.state.role == "school"){
      if (this.state.username == "moisesalmeida") {
        return <Redirect to={{ pathname: "/escola/", state: { id: "10" } }} />;
      }
      //else{
      //Se for um usuário do tipo Bolsista
      else if (this.state.username == "robertomaia") {
        return (
          <Redirect
            to={{
              pathname: "/usuario/",
              state: {
                permission: [
                  "0",
                  "0",
                  "0",
                  "0",
                  "0",
                  "0",
                  "0",
                  "0",
                  "1",
                  "1",
                  "1",
                ],
                id: "0",
              },
            }}
          />
        );
      }
      //Se for um usuário do tipo Funcionário
      else if (this.state.username == "raulpeixoto") {
        return (
          <Redirect
            to={{
              pathname: "/usuario/",
              state: {
                permission: [
                  "0",
                  "0",
                  "0",
                  "0",
                  "0",
                  "1",
                  "1",
                  "1",
                  "0",
                  "0",
                  "0",
                ],
                id: "1",
              },
            }}
          />
        );
      }
      //Se for um usuário do tipo administrador
      else if (this.state.username == "ricardoporto") {
        return (
          <Redirect
            to={{
              pathname: "/usuario/",
              state: {
                permission: [
                  "1",
                  "1",
                  "1",
                  "1",
                  "1",
                  "0",
                  "0",
                  "0",
                  "0",
                  "0",
                  "0",
                ],
                id: "2",
              },
            }}
          />
        );
      } else {
        return <Redirect to="/login" />;
      }
      // }
    } else {
      return (
        <div id="initial">
          <Container>
            <div>
              <Paper id="form" elevation={4}>
                <div>
                  <img id="image" roundedCircle src={logo} />
                </div>
                <div>
                  <h1 id="title2">Login</h1>
                </div>

                <Form id="info">
                  {/*Campo responsável por pegar o login do usuário */}
                  {/* <Form.Label>Usuário</Form.Label>
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                    </InputGroup.Prepend>

                    <FormControl
                      placeholder="Email"
                      aria-label="Usuário"
                      aria-describedby="basic-addon1"
                      value={this.state.email}
                      onChange={this.handleChangeEmail}
                    />
                  </InputGroup> */}
                  <div id="loginn">
                    <Grid container spacing={1} alignItems="flex-end">
                      <Grid item>
                        <AccountBoxIcon style={{ fontSize: 33 }} />
                      </Grid>
                      <Grid item>
                        {this.state.error && <p>{this.state.error}</p>}
                        <TextField
                          size="small"
                          variant="outlined"
                          id="inputGridLogin"
                          label="Usuário"
                          value={this.state.username}
                          onChange={this.handleChangeUsername}
                        />
                      </Grid>
                    </Grid>
                  </div>

                  <div id="passwaordd">
                    <Grid container spacing={1} alignItems="flex-end">
                      <Grid item>
                        <LockOpenIcon style={{ fontSize: 33 }} />
                      </Grid>
                      <Grid item>
                        <TextField
                          size="small"
                          variant="outlined"
                          id="inputGridPassword"
                          label="Senha"
                          type="password"
                          value={this.state.password}
                          onChange={this.handleChangePassword}
                          onKeyPress={this.handleKeyPress}
                        />
                      </Grid>
                    </Grid>
                  </div>

                  {/*Campo responsável por pegar a senha do usuário */}
                  {/* <Form.Label>Senha</Form.Label>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">{ <AccountCircle />}</InputGroup.Text>
                  </InputGroup.Prepend>

                  <FormControl
                    label="Senha"
                    placeholder="Senha"
                    aria-label="Senha"
                    aria-describedby="basic-addon1"
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChangePassword}
                  />
                </InputGroup> */}
                </Form>
                <div
                  style={{
                    marginTop: "50px",
                  }}
                >
                  <Button
                    id="entrar"
                    block
                    variant="success"
                    //onClick={this.handleLogin}
                    onKeyPress={this.handleKeyPress}
                    onClick={this.handleSubmit}
                  >
                    Entrar
                  </Button>

                  <Link to="/cadastro">
                    <Button
                      id="cadastrar"
                      block
                      variant="secondary"
                      type="submit"
                    >
                      Cadastre-se
                    </Button>
                  </Link>
                </div>
                {/*Componente responsável pela recuperação de senha */}
                <ForgetPassword />
              </Paper>
            </div>
          </Container>
        </div>
      );
    }
  }
}
