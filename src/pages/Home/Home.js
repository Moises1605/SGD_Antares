import React from "react";
import NavBar from "../../components/Home/NavBar";
import Contact from "../../components/Home/Contato";
import { Container, Row } from "react-bootstrap";
import Calendario from "../../components/Home/Calendar";
import Welcome from "../../components/Home/welcome";
import Atracoes from "../../components/Home/Atracoes";
import GoogleApiWrapper from "../../components/Home/maps";
import ScrollableAnchor from "react-scrollable-anchor";
import { removeHash } from "react-scrollable-anchor";
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
          <ScrollableAnchor id={"inicio"}>
            <div id="div_inicio">
              <Welcome />
            </div>
          </ScrollableAnchor>
          <ScrollableAnchor id={"atracoes"}>
            <div id="div_atracoes">
              <Atracoes />
            </div>
          </ScrollableAnchor>
          {/*<div id="div_calendar">
            <Container>
              <Calendario />
            </Container>
            </div>*/}
          <ScrollableAnchor id={"informacoes"}>
            <div id="div_maps">
              <GoogleApiWrapper />
            </div>
          </ScrollableAnchor>
          <ScrollableAnchor id="contato">
            <div id="div_contato">
              <Contact />
            </div>
          </ScrollableAnchor>
        </div>
      </React.Fragment>
    );
  }
}
