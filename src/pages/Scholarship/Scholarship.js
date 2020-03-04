import React from 'react'
import './style.css';
import LateralBar from './list/List'
import ScheduleScholarship from "./mySchedule/ScheduleScholarship"
import FollowVisit from "./FollowVisit/followVisit"
//import NavBar from '../components/NavBar/NavBar'
import NavBar from '../Admin/NavBar'
import Info from "./infoScholarship/infoScholarship"
import { Container, Row, Col, Nav } from "react-bootstrap";
import Paper from "@material-ui/core/Paper";
import Inicio from './Inicio/inicio';
export default class Scholarship extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            idScholarship: '',
            screens: [
                <Inicio/>,
                <ScheduleScholarship idScholarship = "0"/>,
                <FollowVisit />,
                <Info />,
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

    render() {
        return (
            <div>
                <Container
                fluid
                style={{
                    paddingLeft: 0
                }}>
                <Row>
                    <Col  md={12}>
                        <NavBar/>
                    </Col>
                </Row>
                <div id="div_sidearea">
                    <div id='leftScholarship'>
                        <LateralBar
                             screens={this.state.screen}
                             onClick={this.componentDidMount}
                        />
                    </div>
                    <Container fluid>
                        <div id='rightScholarship'>
                            {this.state.active}                
                        </div>
                    </Container>
                </div>
                </Container>
            </div>
        )
    }
}
