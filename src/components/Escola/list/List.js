import React, { Component } from "react";
import {
  makeStyles,
  withTheme,
  createMuiTheme,
  responsiveFontSizes
} from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AssessmentIcon from "@material-ui/icons/Assessment";
import PeopleIcon from "@material-ui/icons/People";
import SchoolIcon from "@material-ui/icons/School";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import BackupIcon from "@material-ui/icons/Backup";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import HomeIcon from "@material-ui/icons/Home";
import AssignmentIcon from "@material-ui/icons/Assignment";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import DateRangeIcon from "@material-ui/icons/DateRange";
import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";
import "./List.css";
import logo from "../../../assets/logoV2.png";
import Divider from "@material-ui/core/Divider";

import { logout } from '../../../services/auth';

class SimpleList extends Component {
  //Responsável por direcionar a tela correspondente ao item selecionado pelo usuário na sidebar
  handleClick = teste => {
    this.setState({ screen: teste });
  };

  handleLogout(){
    logout();
  }

  render() {
    return (
      <div id="div_side">
        {/* <div id="side_content">
          <Row>
            <div style={{ height: "150px" }}></div>
          </Row> */}
        <div id="side_content">
          <img
            alt=""
            id="logo_list"
            src={logo}
            className="d-inline-block align-top"
          />
          <Divider />
          <List component="nav" aria-label="main mailbox folders">
            <ListItem
              button
              onClick={() => this.props.onClick("0")}
              innerDivStyle={{ paddingLeft: 60 }}
            >
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Início" />
            </ListItem>

            <ListItem button onClick={() => this.props.onClick("1")}>
              <ListItemIcon>
                <DateRangeIcon />
              </ListItemIcon>
              <ListItemText primary="Agendar visita" />
            </ListItem>
            <ListItem button onClick={() => this.props.onClick("2")}>
              <ListItemIcon>
                <EventAvailableIcon />
              </ListItemIcon>
              <ListItemText primary="Meus agendamentos" />
            </ListItem>
            <ListItem button onClick={() => this.props.onClick("3")}>
              <ListItemIcon>
                <AssignmentIcon />
              </ListItemIcon>
              <ListItemText primary="Editar dados" />
            </ListItem>
            <Link to="/login" id="link_exit">
              <ListItem button>
                <ListItemIcon>
                  <ExitToAppIcon />
                </ListItemIcon>
                <ListItemText primary="Encerrar Sessão" onClick={this.handleLogout} />
              </ListItem>
            </Link>
          </List>
        </div>
      </div>
    );
  }
}

export default SimpleList;