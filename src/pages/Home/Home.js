import React from "react";
import NavBar from "./NavBar";
import Contact from "./Contato";
import { Container } from "react-bootstrap";
import Calendario from "./Calendar";
import Welcome from "./welcome";
import Atracoes from "./Atracoes";
import GoogleApiWrapper from "./maps";
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
        <div id="div_home">
          <div id="div_inicio">
            <Welcome />
          </div>
          <div id="div_atracoes">
            <Atracoes />
          </div>
          <div id="div_calendar">
            <Container>
              <Calendario />
            </Container>
          </div>
          <div id="div_maps">
            <Container fluid>
              <GoogleApiWrapper />
            </Container>
          </div>
          <div id="div_contato">
            <Contact />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
