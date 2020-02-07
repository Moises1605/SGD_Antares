import React from 'react';
import { Button, Card, Container, Row, Col, Form, Carousel, ButtonToolbar, Tabs, Tab, Sonnet, Table, FormControl, InputGroup, Modal, ListGroup } from 'react-bootstrap';
import './style.css';
import Scheduling from './scheduling/scheduling'
import Header from '../../components/header/header'

export default class MyScheduling extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            idSchooll:''
        }
    } 
    
    componentDidMount(){
        // carrega o id da escola
    }

    render() {
       return(
        <div id = 'schedulings'>
            <Header/>
            <div id = 'leftSideMy'>
                {/* dashboard */}
            </div>
            <div id = 'rightSideMy'>
                <h1 id = 'titleScheduling'>Meus Agendamentos</h1>
                <Scheduling idSchool = {this.state.idSchooll} /> 
            </div>
        </div>
       )
    }
}