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
import HomeIcon from '@material-ui/icons/Home';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import AlarmIcon from '@material-ui/icons/Alarm';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Row,Modal,Button} from "react-bootstrap";
import {Link} from 'react-router-dom';
import logo from "../../../assets/logoV2.png";
import "./List.css";
import Divider from "@material-ui/core/Divider";

class SimpleList extends Component {
  handleClick = teste => {
    this.setState({ screen: teste });
  };

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
              <ListItemText primary="Início"/>
            </ListItem>

            <ListItem button onClick={() => this.props.onClick("1")}>
              <ListItemIcon>
                <AlarmIcon />
              </ListItemIcon>
              <ListItemText primary="Meu horário" />
            </ListItem>
            <ListItem button  onClick={() => this.props.onClick("2")}>
              <ListItemIcon>
                <EventAvailableIcon />
              </ListItemIcon>
              <ListItemText primary="Visitas Agendadas" />
            </ListItem>
            {/* <ListItem button disabled onClick={() => this.props.onClick("3")}>
              <ListItemIcon>
                <AssignmentIcon />
              </ListItemIcon>
              <ListItemText primary="Editar dados" />
            </ListItem> */}
            <Link id="link_exit" to = '/login'>
              <ListItem button >
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
function ConfirmBack(event){
  var control = true;
    return (  <Modal
                size="lg"
                show={control}
                onHide={() =>control = false}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton id = 'header'>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Tem certeza que deseja sair?
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Link to = '/login'>
                    <Button  id = 'buttonBack' variant="primary">
                        Sair
                    </Button>
                </Link>
                </Modal.Body>
            </Modal>
              )
}
export default SimpleList;
