import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import AssessmentIcon from '@material-ui/icons/Assessment';
import PeopleIcon from '@material-ui/icons/People';
import SchoolIcon from '@material-ui/icons/School';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import BackupIcon from '@material-ui/icons/Backup';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
//import logo from '../../assets/logo.png';



const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleList(props) {
  const classes = useStyles();

  function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
  }

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders" onClick={console.log("funciona")}> 
        <ListItemLink eventKey="1" >
          <ListItemIcon>
            <AssessmentIcon />
          </ListItemIcon>
          <ListItemText primary="Exibir Relatórios" />
        </ListItemLink>
        <ListItemLink eventKey="2">
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Gerir Funcionários"/>
        </ListItemLink>
        <ListItemLink eventKey="3">
          <ListItemIcon>
            <SchoolIcon />
          </ListItemIcon>
          <ListItemText primary="Gerir Bolsistas" />
        </ListItemLink>
        <ListItemLink eventKey="4">
          <ListItemIcon>
            <ImportContactsIcon/>
          </ListItemIcon>
          <ListItemText primary="Gerir Escolas" />
        </ListItemLink>
        <ListItemLink eventKey="5">
          <ListItemIcon>
            <BackupIcon />
          </ListItemIcon>
          <ListItemText primary="Realizar Backup" />
        </ListItemLink>
      </List>
      <List id="encerrar">
      <ListItem button>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary="Sair" />
        </ListItem>
      </List>
    </div>
  );
}