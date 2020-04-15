import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
//administrador
import Bolsistas from "../../components/Admin/Bolsistas";
import Funcionario from "../../components/Admin/Funcionario";
import Relatorio from "../../components/Admin/Relatorio";
import Escolas from "../../components/Admin/Escolas";
import Backup from "../../components/Admin/Backup2"
//Funcionario
import TelaAgendamentos from "../../components/Funcionario/tela_agendamentos";
import Calendar from "../../components/Funcionario/Calendar";
import CadastrarAtividades from "../../components/Funcionario/cadastrarAtividades";

//Bolsista
import ScheduleScholarship from "../../components/Scholarship/mySchedule/ScheduleScholarship";
import FollowVisit from "../Scholarship/FollowVisit/followVisit";
import Info from "../../components/Scholarship/infoScholarship/infoScholarship";
import Inicio from "../../components/Scholarship/Inicio/inicio";

import api from "../../services/api";
import NavBar from "../../components/Padrao/NavBar/NavBar";
import SimpleList from "../../components/Padrao/teste/List";
import "./style.scss";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

export default class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screens: [
        <Inicio />,
        <Relatorio idFuncionario = {this.props.match.params.id}/>,
        <Funcionario />,
        <Bolsistas />,
        <Escolas />,
        <Backup/>,
        <TelaAgendamentos />,
        <Calendar />,
        <CadastrarAtividades/>,
      ],
      idFuncionario: this.props.match.params.id,
      permission: [],
      active: null
    };
  }
  componentDidMount =  screen => {
    screen == null
      ? this.setState({ active: this.state.screens[0] })
      : this.setState({ active: this.state.screens[screen] });
  };

  render() {
    return (
      <div id="div_user">
        <Container
          fluid
          style={{
            paddingLeft: 0
          }}
        >
          <Row>
            <Col md={12}></Col>
          </Row>
          <Row></Row>
          <div id="div_sidearea">
            <div id="div_sidebar">
              <SimpleList
                screens={this.state.screen}
                onClick={this.componentDidMount}
                permission={this.state.idFuncionario}
              />
            </div>

            <Container fluid>
              <div id="div_screen">
                  {this.state.active}
              </div>
            </Container>
          </div>
        </Container>
      </div>
    );
  }
}
