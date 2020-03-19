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
import NavBar from "../../components/Padrao/NavBar/NavBar";
import SimpleList from "../../components/Padrao/teste/List";
import "./style.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

export default class User extends React.Component {
  constructor(props) {
    super(props);
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
        // <ScheduleScholarship idScholarschip = {this.props.match.params.id.toString().substring(1)} />,
        <ScheduleScholarship idScholarschip = {this.props.location.state.id} />,
        <FollowVisit idScholarschip = {this.props.location.state.id} />,
        <Info idScholarship = {this.props.location.state.id} />,

      ],
      id: this.props.location.state.id,
      permission: this.props.location.state.permission,
      active: null
    };
    this.loadPermission = this.loadPermission.bind(this);
    this.teste = this.teste.bind(this);
    //this.setState({permission: this.loadPermission})
  }
  componentDidMount  = /*async*/ screen => {
    /*await*/ this.loadPermission();
    screen == null
      ? this.setState({ active: this.state.screens[0] })
      : this.setState({ active: this.state.screens[screen] });
  };

   async loadPermission(event){
      //const response =  await api.get('/permissoes');
      //this.setState({permission: response.data});
      //await this.setState({id: this.props.match.params.id.toString().substring(1)})
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
                // permission = {this.teste()}
                permission = {this.state.permission}
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