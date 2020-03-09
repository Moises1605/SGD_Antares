import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
//administrador
import Bolsistas from "../../components/Admin/Bolsistas";
import Funcionario from "../../components/Admin/Funcionario";
import Relatorio from "../../components/Admin/Relatorio";
import Escolas from "../../components/Admin/Escolas";
//Funcionario
import TelaAgendamentos from "../../components/Funcionario/tela_agendamentos";
import Calendar from "../../components/Funcionario/Calendar";
//Bolsista
import ScheduleScholarship from "../../components/Scholarship/mySchedule/ScheduleScholarship";
import FollowVisit from "../Scholarship/FollowVisit/followVisit";
import Info from "../../components/Scholarship/infoScholarship/infoScholarship";
import Inicio from "../../components/Scholarship/Inicio/inicio";

import api from '../../services/api'
import NavBar from "../../components/Admin/NavBar";
import SimpleList from "../../components/Padrao/teste/List";
import "./style.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

export default class User extends React.Component {
  constructor() {
    super();
    this.state = {
      screens: [
        <Inicio />,
        <Relatorio />,
        <Funcionario />,
        <Bolsistas />,
        <Escolas />,
        null,
        <TelaAgendamentos />,
        null,
        <Calendar />,
        <ScheduleScholarship idScholarship = "0" />,
        <FollowVisit />,
        <Info />,
      ],
      id: 0,
      permission: [],
      active: null
    };
    this.loadPermission = this.loadPermission.bind(this);
    this.teste = this.teste.bind(this);
    //this.setState({permission: this.loadPermission})
  }
  componentDidMount = screen => {
    this.loadPermission();
    screen == null
      ? this.setState({ active: this.state.screens[0] })
      : this.setState({ active: this.state.screens[screen] });
  };

   async loadPermission(event){
      //const response = api.get('/algo');
      //this.setState({permission: Response.data});
      await this.setState({id: this.props.match.params.id.toString().substring(1)})
      console.log(this.state.id );
      //await this.teste;

  }

  teste(event){
    if(this.props.match.params.id.toString().substring(1) == 0){
      //this.setState({permission: ['0','0','0','0','0','0','0','0','1','1','1'] });
      return ['0','0','0','0','0','0','0','0','1','1','1'];
    }
    else if(this.props.match.params.id.toString().substring(1) == 1){
      //this.setState({permission:['0','1','1','1','0','1','1','1','0','0','0'] });
      return ['0','1','1','1','0','1','1','1','0','0','0'];
    }
    else if(this.props.match.params.id.toString().substring(1) == 2){
      //this.setState({permission:['1','1','1','1','0','0','0','0','0','0','0'] });
      return ['1','1','1','1','1','0','0','0','0','0','0'];
  }
  }

  render() {
    return (
      <div>
        <Container
          fluid
          style={{
            paddingLeft: 0
          }}
        >
          <Row>
            <Col md={12}>
              <NavBar />
            </Col>
          </Row>
          <div id="div_sidearea">
            <div id="div_sidebar">
              <SimpleList
                screens={this.state.screen}
                onClick={this.componentDidMount}
                permission = {this.teste()}
              />
            </div>

            <Container fluid>
              <div id="div_screen">
                <Paper id = 'testando'elevation={3}>{this.state.active}</Paper>
                {/* {this.state.active} */}
              </div>
            </Container>
          </div>
        </Container>
      </div>
    );
  }
}