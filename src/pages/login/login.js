import React from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import "./style.css";
import { Link, Redirect,useHistory } from "react-router-dom";
import api from "../../services/api";
import logo from "../../assets/logoV2.png";
import ForgetPassword from "./forgetPassword/forgetPassword";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import LockOpenIcon from "@material-ui/icons/LockOpen";

import { loginAuth } from "../../services/auth";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      password: "",
      type: "-1",
      idUser: "10",
      idUser2: "0",
      idUser3: "1",
      idUser4: "2",
      redirect: false,
      permission2: [],
      role: "",
      error: "",
    };

    this.handleChangeLogin = this.handleChangeLogin.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleLogin = async (event) => {
    event.preventDefault();
    const { login, password } = this.state;
    if (!login || !password) {
      this.setState({ error: "Preencha e-mail e senha para continuar!" });
    }
    try {
      const response = await api.post("/authUser", {login, password});
      loginAuth(response.data.token);
      console.log(response);
      if(response.data.body.role === "School"){
        this.setState({ role: response.data.body.role })
        this.setState({ idUser: response.data.body.idSchool,redirect: true   })

      } else if (response.data.body.role === "Employee") {
        this.setState({ role: response.data.body.role })
        this.setState({ idUser: response.data.body.idEmployee,redirect: true   })

      } else if (response.data.body.role === "Scholarship") {
        this.setState({ role: response.data.body.role })
        this.setState({ idUser: response.data.body.idScholarship,redirect: true  })
      } 
    } catch (err) {
      this.setState({
        error: "Houve um problema com o login, verifique suas credencias.",
      });
    }
  };

  handleChangeLogin(event) {
    this.setState({ login: event.target.value });
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
    /*if (this.state.login != " ") {
      this.setState({ redirect: true });
    }*/
  }

  render() {
    if (this.state.redirect) {
      if(this.state.role == "School"/*this.state.login == "moisesalmeida"*/){
          return <Redirect to={{ pathname: `/escola/${this.state.idUser}`, state: { id: this.state.idUser } }} />;
      }
      //Se for um usuário do tipo Bolsista
      else if(this.state.role == "Scholarship"/*this.state.login == "robertoalmeida"*/){
          return <Redirect to={{ pathname: `/bolsista/${this.state.idUser}`, state: { id: this.state.idUser } }} />;
      
      }else if(this.state.role == "Employee"/*this.state.login == "raulpeixoto"*/) {
          return <Redirect to={{ pathname: `/usuario/${this.state.idUser}`, state: { id: this.state.idUser } }} />;
      }else {
          return <Redirect to="/login" />;
      }
    } else {
      return (
        <div id="initial">
          <Container>
            <div>
              <Paper id="form" elevation={4}>
               <div>
               <Link to = "/"><img id="image" roundedCircle src={logo} /></Link>
                </div>
                <div>
                  <h1 id="title2">Login</h1>
                </div>

                <Form id="info">
                  {/*Campo responsável por pegar o login do usuário */}
                  <div id="loginn">
                    <Grid container spacing={1} alignItems="flex-end">
                      <Grid item>
                        <AccountBoxIcon style={{ fontSize: 33 }} />
                      </Grid>
                      <Grid item>
                        <TextField
                          size="small"
                          variant="outlined"
                          id="inputGridLogin"
                          label="Usuário"
                          value={this.state.login}
                          onChange={this.handleChangeLogin}
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
                    onClick={this.handleLogin}
                    onKeyPress={this.handleKeyPress}
                    //onClick={this.handleSubmit}
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
 

function goHome(){
  /*<Redirect
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
/>*/
}