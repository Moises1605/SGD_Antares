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
import { Row } from "react-bootstrap";
import "./List.css";

class SimpleList extends Component {

  handleClick = teste => {
    this.setState({ screen: teste });
  };

  render() {
    return (
      <div id="div_side">
        <div id="side_content">
          <Row>
            <div style={{ height: "150px" }}></div>
          </Row>
          <List component="nav" aria-label="main mailbox folders">
            <ListItem
              button
              onClick={() => this.props.onClick("0")}
              innerDivStyle={{ paddingLeft: 60 }}
            >
              <ListItemIcon>
                <AssessmentIcon />
              </ListItemIcon>
              <ListItemText primary="Relátorios" />
            </ListItem>
            <ListItem button onClick={() => this.props.onClick("1")}>
                <ListItemIcon>
                  <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Gerir Funcionários" />
              </ListItem>
            <ListItem button onClick={() => this.props.onClick("2")}>
                  <ListItemIcon>
                    <SchoolIcon />
                  </ListItemIcon>
                  <ListItemText primary="Gerir Bolsistas" />
            </ListItem>
                <ListItem button onClick={() => this.props.onClick("3")}>
                  <ListItemIcon>
                    <ImportContactsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Gerir Escolas" />
            </ListItem>
            <ListItem button onClick={() => this.props.onClick("4")}>
                  <ListItemIcon>
                    <BackupIcon />
                  </ListItemIcon>
                  <ListItemText primary="Realizar Backup" />
                </ListItem>
            <ListItem button>
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary="Encerrar Sessão" />
            </ListItem>
          </List>
        </div>
      </div>
    );
  }
}

export default SimpleList;
