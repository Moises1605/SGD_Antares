import React from 'react'
import { Button, Nav, Card, Container, Row, Col, Form, Carousel, ButtonToolbar, Tabs, Tab, Sonnet, Table, FormControl, InputGroup, Modal } from 'react-bootstrap';
//import { Link } from 'react-router-dom'
//import api from "../../services/api"
import './style.css';
import Header from '../components/header/header'
import LateralBar from './lateralBar/LateralBar'
import ScheduleScholarship from "./mySchedule/ScheduleScholarship"
import NavBar from '../register/NavBar'

export default class Scholarship extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            idScholarship: ''
        }
    }

    render() {
        return (
            <div id='scholarship'>
                <NavBar/>
                {/* <Header /> */}
                <div id='contentScholarship'>
                    <div id='leftScholarship'>
                        {/* <Nav id='menu' variant='pills' defaultActiveKey="/home" className="flex-column">
                            <Nav.Link href="/home">Agendamento</Nav.Link>
                            <Nav.Link  disabled eventKey="link-1">Meus agendamentos</Nav.Link>
                            <Nav.Link href="/"> Encerrar sessão</Nav.Link>
                        </Nav> */}

                        <LateralBar/>
                    </div>
                    <div id='rightScholarship'>
                    
                        <ScheduleScholarship idScholarship = {this.state.idScholarship}/>
                    
                    </div>
                </div>
            </div>
        )
    }
}
