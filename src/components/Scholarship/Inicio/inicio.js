import React from 'react'
import './style.css';
import { Container, Row, Col, Nav,Jumbotron } from "react-bootstrap";
import Paper from "@material-ui/core/Paper";

export default class Inicio extends React.Component {
    render(){
        return (
            <div>
                <Jumbotron fluid>
                    <Container>
                        <h1>Bem Vindo</h1>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        </p>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}