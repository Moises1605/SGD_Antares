import React from 'react'
import './style.css';
import { Container, Row, Col, Nav,Jumbotron } from "react-bootstrap";
import Paper from "@material-ui/core/Paper";

export default class Inicio extends React.Component {
    render() {
        return (
            <div>
                <Jumbotron fluid>
                    <Container>
                        <h1>Bem vindo, ao Sistema de Agendamentod do Antares</h1>
                        <p>
                            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                        </p>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}