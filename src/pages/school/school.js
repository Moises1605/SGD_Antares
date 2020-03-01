import React from 'react'
import { Container, Row, Col, Nav } from "react-bootstrap";
import './style.css';
import Calendar from './calendar/calendar'
import LateralBar from './list/List';
import NavBar from '../components/NavBar/NavBar'
//import Visit from './visit/agendamento';
import MySchedulings from './MySchedulings/MyScheduling'
import Paper from "@material-ui/core/Paper";
//import EditSchool from './infoSchool'


export default class School extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            idSchool: '',
            screens: [
                <Calendar />,
                <MySchedulings />,
                null
              ],
              active: null
            };
    }
    componentDidMount = screen => {
        screen == null
          ? this.setState({ active: this.state.screens[0] })
          : this.setState({ active: this.state.screens[screen] });
      };

    /*render() {
        return (
            <div id='school'>
                <NavBar/>
                <div id='contentSchool'>
                    <div id='leftSchool'>
                    <LateralBar
                        screens={this.state.screen}
                        onClick={this.componentDidMount}
                    />
                    </div>
                    <div id='rightSchool'>
                    
                        <Calendar/>
                    
                    </div>
                </div>
            </div>
        )
    }
}*/
render() {
    return (
      <div>
        <Container
          fluid
          style={{
            paddingLeft: 0
          }}
        >
          <Row id = 'asd'>
            <Col  md={12}>
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