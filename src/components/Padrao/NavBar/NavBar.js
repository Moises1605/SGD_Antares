import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import './NavBar.css';
import logo from '../../../assets/logo2.png'


export default class NavBar extends React.Component {
    render(){
        return(
            <React.Fragment>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand >
                    <img
                        alt=""
                        src={logo}
                        className="d-inline-block align-top"
                    />{' '}
                </Navbar.Brand>
                <Navbar.Brand href="/">
                    Sistema de agendamento de visitas
                </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </React.Fragment>
        )
    }
}