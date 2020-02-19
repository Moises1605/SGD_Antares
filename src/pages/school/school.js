import React from 'react'
import { Button, Nav, Card, Container, Row, Col, Form, Carousel, ButtonToolbar, Tabs, Tab, Sonnet, Table, FormControl, InputGroup, Modal } from 'react-bootstrap';
//import { Link } from 'react-router-dom'
//import api from "../../services/api"
import './style.css';
import Header from '../components/header/header'
import Calendar from './calendar/calendar'
import LateralBar from './LateralBar/lateral_bar';
import Paper from '@material-ui/core/Paper';
import NavBar from '../register/NavBar'


export default class School extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            idSchool: ''
        }
    }

    render() {
        return (
            <div id='school'>
                <NavBar/>
                {/* <Header /> */}
                <div id='contentSchool'>
                    <div id='leftSchool'>
                        {/* <Nav id='menu' variant='pills' defaultActiveKey="/home" className="flex-column">
                            <Nav.Link href="/home">Agendamento</Nav.Link>
                            <Nav.Link  disabled eventKey="link-1">Meus agendamentos</Nav.Link>
                            <Nav.Link href="/"> Encerrar sessão</Nav.Link>
                        </Nav> */}

                        <LateralBar/>
                    </div>
                    <div id='rightSchool'>
                    
                        <Calendar/>
                    
                    </div>
                </div>
            </div>
        )
    }
}

// Surfaces ->paper