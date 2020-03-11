import React from "react";
import NavBar from "../../components/Home/NavBar";
import Contact from "../../components/Home/Contato";
import { Container } from "react-bootstrap";
import Calendario from "../../components/Home/Calendar";
import Welcome from "../../components/Home/welcome";
import Atracoes from "../../components/Home/Atracoes";
import GoogleApiWrapper from "../../components/Home/maps";
import "./Home.scss";

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
            <GoogleApiWrapper />
          </div>
          <div id="div_contato">
            <Contact />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
