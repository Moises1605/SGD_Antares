import React from "react";

import NavBar from "./NavBar";
import Contact from "./Contato";
import { Container } from "react-bootstrap";
import Calendario from "./Calendar";
import Atracoes from "./Atracoes";
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
        <div id="div_atracoes">
          <Atracoes />
        </div>

        <br></br>
        <div id="div_calendar">
          <Container>
            <h2>Horário Disponível para Visitas</h2>
            <Calendario />
          </Container>
        </div>
        <div id="div_contato">
          <Contact />
        </div>
      </React.Fragment>
    );
  }
}
