import React, {Component} from 'react';
import './Sidebar.css';
import { makeStyles } from '@material-ui/core/styles';
import SimpleList from './List';

const useStyles = makeStyles(theme => ({
	button: {
	  margin: theme.spacing(1),
	},
  }));
export default class Sidebar extends Component{
	

    constructor(props){
	super(props);
	this.state = {
	    user : "",
	};

	}
	
    render(){
	return(
	    <div id="bar">
		<div  id="null1"></div>
			<SimpleList/>    
	    </div>
	);
    }
}
