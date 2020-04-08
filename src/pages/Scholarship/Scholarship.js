import React from "react";
import "./style.css";
import LateralBar from "../../components/Scholarship/list/List";
import ScheduleScholarship from "../../components/Scholarship/mySchedule/ScheduleScholarship";
import FollowVisit from "./FollowVisit/followVisit";
//import NavBar from '../components/NavBar/NavBar'
import NavBar from "../../components/Admin/NavBar";
import Info from "../../components/Scholarship/infoScholarship/infoScholarship";
import { Container, Row, Col, Nav } from "react-bootstrap";
import Paper from "@material-ui/core/Paper";
import Inicio from "../../components/Scholarship/Inicio/inicio";
export default class Scholarship extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screens: [
        <Inicio />,
        <ScheduleScholarship idScholarship = {this.props.match.params.id} />,
        <FollowVisit />,
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
      <div id = "ScholarshipUser">
        <Container
          fluid
          style={{
            paddingLeft: 0
          }}
        >
          <Row>
            <Col md={12}>
            </Col>
          </Row>
          <div id="div_sidearea">
            <div id="leftScholarship">
              <LateralBar
                screens={this.state.screen}
                onClick={this.componentDidMount}
              />
            </div>
            <Container fluid>
              <div id="rightScholarship">{this.state.active}</div>
            </Container>
          </div>
        </Container>
      </div>
    );
  }
}
