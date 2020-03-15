import React from "react";
import NavBar from "../../components/Home/NavBar";
import Contact from "../../components/Home/Contato";
import { Container, Row, Col, Button } from "react-bootstrap";
import Calendario from "../../components/Home/Calendar";
import Welcome from "../../components/Home/welcome";
import Atracoes from "../../components/Home/Atracoes";
import VisitNight from "../../components/Home/visitNight/visitNight";
import GoogleApiWrapper from "../../components/Home/maps";
import ScrollableAnchor from "react-scrollable-anchor";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import BeenhereRoundedIcon from "@material-ui/icons/BeenhereRounded";
import DoneIcon from "@material-ui/icons/Done";
import { removeHash } from "react-scrollable-anchor";
import "./Home.scss";
import { green } from "@material-ui/core/colors";

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
            <div></div>
          </ScrollableAnchor>
          <div id="div_inicio">
            <Welcome />
          </div>

          <ScrollableAnchor id={"atracoes"}>
            <div></div>
          </ScrollableAnchor>
          <div id="div_atracoes">
            <Atracoes />
          </div>

          <ScrollableAnchor id={"informacoes"}>
            <div></div>
          </ScrollableAnchor>
          <div id="div_maps">
            <GoogleApiWrapper />
          </div>
          <ScrollableAnchor id="contato">
            <div></div>
          </ScrollableAnchor>
          <div id="div_contato">
            <Contact />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
