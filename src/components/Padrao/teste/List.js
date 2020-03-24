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
import logo from "../../../assets/logoV2.png";
import Divider from "@material-ui/core/Divider";
//bolsista
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import AlarmIcon from "@material-ui/icons/Alarm";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { Row } from "react-bootstrap";
import "./List.scss";
import {Link} from 'react-router-dom'

class SimpleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      permission: []
    };
  }

  async componentDidMount() {
    await this.setState({ permission: this.props.permission });
  }

  handleClick = teste => {
    this.setState({ screen: teste });
  };

  render() {
    console.log(this.state.permission);
    return (
      <div id="div_side">
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
              <ListItemText primary="Inicio" />
            </ListItem>
            {this.state.permission[0] == "1" && (
              <ListItem button onClick={() => this.props.onClick("1")}>
                <ListItemIcon>
                  <AssessmentIcon />
                </ListItemIcon>
                <ListItemText primary="Relátorios" />
              </ListItem>
            )}
            {this.state.permission[1] == "1" && (
              <ListItem button onClick={() => this.props.onClick("2")}>
                <ListItemIcon>
                  <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Gerir Funcionários" />
              </ListItem>
            )}
            {this.state.permission[2] == "1" && (
              <ListItem button onClick={() => this.props.onClick("3")}>
                <ListItemIcon>
                  <ImportContactsIcon />
                </ListItemIcon>
                <ListItemText primary="Gerir Bolsistas" />
              </ListItem>
            )}
            {this.state.permission[3] == "1" && (
              <ListItem button onClick={() => this.props.onClick("4")}>
                <ListItemIcon>
                  <SchoolIcon />
                </ListItemIcon>
                <ListItemText primary="Gerir Escolas" />
              </ListItem>
            )}
            {this.state.permission[4] == "1" && (
              <ListItem button onClick={() => this.props.onClick("5")}>
                <ListItemIcon>
                  <BackupIcon />
                </ListItemIcon>
                <ListItemText primary="Realizar Backup" />
              </ListItem>
            )}
            {this.state.permission[5] == "1" && (
              <ListItem button onClick={() => this.props.onClick("6")}>
                <ListItemIcon>
                  <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Agendamantos" />
              </ListItem>
            )}
            {this.state.permission[6] == "1" && (
              <ListItem button onClick={() => this.props.onClick("7")}>
                <ListItemIcon>
                  <ImportContactsIcon />
                </ListItemIcon>
                <ListItemText primary="Horário dos Bolsistas" />
              </ListItem>
            )}
            {this.state.permission[7] == "1" && (
              <ListItem button onClick={() => this.props.onClick("8")}>
                <ListItemIcon>
                  <BackupIcon />
                </ListItemIcon>
                <ListItemText primary="Nova Atividade" />
              </ListItem>
            )}
            {this.state.permission[8] == "1" && (
              <ListItem button onClick={() => this.props.onClick("9")}>
                <ListItemIcon>
                  <AlarmIcon />
                </ListItemIcon>
                <ListItemText primary="Meu horário" />
              </ListItem>
            )}
            {this.state.permission[9] == "1" && (
              <ListItem button onClick={() => this.props.onClick("10")}>
                <ListItemIcon>
                  <EventAvailableIcon />
                </ListItemIcon>
                <ListItemText primary="Visitas agendadas" />
              </ListItem>
            )}
            {this.state.permission[10] == "1" && (
              <ListItem button onClick={() => this.props.onClick("11")}>
                <ListItemIcon>
                  <AssignmentIcon />
                </ListItemIcon>
                <ListItemText primary="Editar dados" />
              </ListItem>
            )}
            <Link to = '/login'><ListItem button>
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary="Encerrar Sessão" />
            </ListItem></Link>
          </List>
        </div>
      </div>
    );
  }
}

export default SimpleList;
