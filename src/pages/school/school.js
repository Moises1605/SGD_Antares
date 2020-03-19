import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import "./style.css";
import Calendar from "../../components/Escola/calendar/calendar";
import LateralBar from "../../components/Escola/list/List";
import NavBar from "../../components/Padrao/NavBar/NavBar";
//import Visit from './visit/agendamento';
import MySchedulings from "../../components/Escola/MySchedulings/MyScheduling";
import Inicio from "../../components/Escola/Inicio/inicio";
import InfoSchool from '../../components/Escola/infoSchool/infoSchool';
import api from "../../services/api";

export default class School extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screens: [
        <Inicio />, 
        <Calendar />, 
        <MySchedulings idSchool = {this.props.location.state.id}/>, 
        <InfoSchool idSchool= {this.props.location.state.id} />
      ],
      active: null
    };
  }
  componentDidMount = screen => {
    //Colocar essa parte comentada na parte de editar dados da escola.
    // var dadosEscola = api.post("/retornaDadosEscola",this.idSchool)
    // console.log((await dadosEscola).data
    screen == null
      ? this.setState({ active: this.state.screens[0] })
      : this.setState({ active: this.state.screens[screen] });
  };
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
            <div id="leftSchool">
              <LateralBar
                screens={this.state.screen}
                onClick={this.componentDidMount}
              />
            </div>
            <Container fluid>
              <div id="rightSchool">
                {/* <Paper elevation={3}>{this.state.active}</Paper> */}
                {this.state.active}
              </div>
            </Container>
          </div>
        </Container>
      </div>
    );
  }
}
// Surfaces ->paper
