import React from "react";

import NavBar from "./NavBar";
import JumbotronAtracoes from "./Jumbotron_Initial";
import JumbotronLogin from "./Jumbotron_Login";
import { Container } from "react-bootstrap";
import DemoApp from "./Calendar";
import "./Home.css";

export default class home extends React.Component {
  constructor() {
    super();
    this.state = {
      horarios: [], //Array com os horários dos bolsistas
      contato: {
        //Objeto para contato do usuário
        name: "", //Nome
        email: "", //Email
        assunto: "", //Assunto referente ao contato
        msg: "" //Mensagem
      }
    };
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <JumbotronAtracoes />
        <br></br>
        <Container>
          <h2>Horário Disponível para Visitas</h2>
          <DemoApp />
        </Container>
        <br></br>
        <JumbotronLogin />
      </React.Fragment>
    );
  }
}
