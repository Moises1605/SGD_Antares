import React from 'react'
import { Button, Card, Container, Row, Col, Form, Carousel, ButtonToolbar, Tabs, Tab, Sonnet, Table, FormControl, InputGroup, Modal } from 'react-bootstrap';
//import { Link } from 'react-router-dom'
//import api from "../../services/api"
import './style.css';
import Climate from '../climate/climate'

export default class VisitNight extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            control: false,
        };
        this.setControl = this.setControl.bind(this);
    }
    setControl(event) {
        this.setState({ control: true })
    }
    render() {
        return (<div>

            <Button id='visit' variant="primary" onClick={this.setControl} > Agendamento Noturno</Button>

            <Modal
                size="lg"
                show={this.state.control}
                onHide={() => this.setState({ control: false })}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton id = 'header'>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Agendamento Noturno
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div id='leftSide'>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Informe o número de visitantes</Form.Label>
                                <Form.Control type="text" placeholder="" id = 'email'/>
                                <Form.Text className="text-muted">
                                    *informe quantas pessoas irão acompanhar você nessa visita(Ex: 1,2...)
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>dia da visita</Form.Label>
                                <Form.Control type="text" placeholder="DD/MM/AAAA"/>
                                <Form.Text className="text-muted">
                                    *Coloque a data no formato indicado
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Informe o seu email, para atualizar as informações da sua visita</Form.Label>
                                <Form.Control type="email" placeholder="Email" />
                            </Form.Group>
                            <Button variant="primary" >
                                Agendar visita
                            </Button>
                            <Climate/>
                        </Form>
                    </div>
                    <div id='rightSide'>

                    </div>

                </Modal.Body>
            </Modal>

        </div>)
    }
}

function numVisitors(control) {

    var test = []
    for (let i = 0; i < control; i++) {
        test.push(
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Visitante {`${i}`}</Form.Label>
                    <Form.Control type="text" placeholder=" Nome" />
                    <Form.Control type="text" placeholder=" RG" />
                </Form.Group>
            </Form>
        )
    }

    return test;
}
