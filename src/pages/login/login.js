import React from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  InputGroup
} from "react-bootstrap";
import "./style.css";
import { Link, Redirect } from "react-router-dom";
//import api from "../../services/api"
import logo from "../../assets/logo2.png";
import ForgetPassword from "./forgetPassword/forgetPassword";
import Paper from "@material-ui/core/Paper";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      type: "-1",
      idUser: "0",
      redirect: false
    };

    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChangeEmail(event) {
    this.setState({ email: event.target.value });
  }
  handleChangePassword(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    //const response = await api.get();
    //this.setState({type: response.type})
    //Se for um usuário do tipo escola
    if (this.setState.email != " ") {
      this.setState({ redirect: true });
    }
  }

  render() {
    if (this.state.redirect) {
      if (this.state.email == "moisesalmeida") {
        return <Redirect to="/escola/:0" />;
      }
      //Se for um usuário do tipo Bolsista
      else if (this.state.email == "robertomaia") {
        return <Redirect to="/bolsista/:0" />;
      }
      //Se for um usuário do tipo Funcionário
      else if (this.state.email == "raulpeixoto") {
        return <Redirect to="/funcionario/:0" />;
      }
      //Se for um usuário do tipo administrador
      else if (this.state.email == "ricardoporto") {
        return <Redirect to="/administrador/:0" />;
      }
    } else {
      return (
        <div id="initial">
          <Container>
            <div>
              <Paper id="form" elevation={4}>
                <img id="image" roundedCircle src={logo} />
                <h1 id="title">Login</h1>
                <Form id="info">
                  {/*Campo responsável por pegar o login do usuário */}
                  <Form.Label>Usuário</Form.Label>
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
                  </InputGroup>

                  {/*Campo responsável por pegar a senha do usuário */}
                  <Form.Label>Senha</Form.Label>
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="basic-addon1">#</InputGroup.Text>
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
                  </InputGroup>
                </Form>
                <div
                  style={{
                    marginTop: "50px"
                  }}
                >
                  <Button
                    id="entrar"
                    block
                    variant="success"
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
