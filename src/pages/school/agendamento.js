import React from 'react'
import { Button, Card, Container, Row, Col, Form, Carousel, ButtonToolbar, Tabs, Tab, Sonnet, Table, FormControl, InputGroup, Modal } from 'react-bootstrap';
//import { Link } from 'react-router-dom'
//import api from "../../services/api"
import './style.css';


export default class Agendamento extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            control: false,
            responsible: '',
            students: '',
            date:'',
            number:'',
            obs:'',
            atrações: ['a', 'b']
        };
        this.setControl = this.setControl.bind(this);
        this.handleChangeResponsible = this.handleChangeResponsible.bind(this);
        this.handleChangeStudents = this.handleChangeStudents.bind(this);
        this.handleChangeDate = this.handleChangeDate.bind(this);
        this.handleChangeNumber = this.handleChangeNumber.bind(this);
        this.handleChangeObs = this.handleChangeObs.bind(this);

    }
    setControl(event) {
        this.setState({ control: true })
    }

    handleChangeResponsible(event) {
        this.setState({ responsible: event.target.value });
    }

    handleChangeStudents(event) {
        this.setState({ students: event.target.value });
    }

    handleChangeDate(event) {
         this.setState({ date: event.target.value });
    } 

    handleChangeNumber(event) {
        this.setState({ number: event.target.value });
    }

    handleChangeObs(event) {
         this.setState({ obs: event.target.value });
    }   

    handleSubmit(event){
        //envia os dados para o back
    }

    render() {
        return (<div>

            <Button id='agendar' variant="primary" onClick={this.setControl} >Agendar</Button>

            <Modal
                size="lg"
                show={this.state.control}
                onHide={() => this.setState({ control: false })}
                aria-labelledby="example-modal-sizes-title-lg"
                id='modal'
            >
                <Modal.Header closeButton id='header'>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Agendamento de visita
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    { /*<div id='leftSide'>*/}
                    <Form>
                        <Form.Group as={Row} controlId="formHorizontalEmail">
                            <Form.Label column sm={3}>
                                Nome do responsável
                                </Form.Label>
                            <Col sm={6}>
                                <Form.Control type="text" placeholder="Nome completo" value = {this.state.responsible}  onChange = {this.handleChangeResponsible}/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formHorizontalStudent">
                            <Form.Label column sm={3}>
                                Quantidade de alunos
                            </Form.Label>
                            <Col sm={3  }>
                                <Form.Control type="text" placeholder="Max: 40" value = {this.state.students}  onChange = {this.handleChangeStudents} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formHorizontalDate">
                            <Form.Label column sm={3}>
                                Dia da visita
                                </Form.Label>
                            <Col sm={3}>
                                <Form.Control type="text" placeholder="DD/MM" value = {this.state.date}  onChange = {this.handleChangeDate} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formHorizontalSerie">
                            <Form.Label column sm={3}>
                                Série(Ano)
                                </Form.Label>
                            <Col sm={2}>
                                <Form.Control type="text" placeholder=" " value = {this.state.number}  onChange = {this.handleChangeNumber} />
                            </Col>
                        </Form.Group>

                        <Form.Group id='textArea' controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Observações</Form.Label>
                            <Form.Control as="textarea" rows="3" value = {this.state.obs}  onChange = {this.handleChangeObs}/>
                            <Form.Text className="text-muted">
                                Caso tenha algo a mais para informar.
                            </Form.Text>
                        </Form.Group>
                        <div>
                            <Form.Label>
                                Escolha quais atrações deseja visitar.
                            </Form.Label>
                            {this.state.atrações.map(type => (
                                <div id='hy' key={type} className="mb-3">
                                    <Form.Check type='radio' id={`check-api-radio`}>
                                        <Form.Check.Input type='radio' isValid />
                                        <Form.Check.Label>{`Custom api`}</Form.Check.Label>
                                        <Form.Control.Feedback type="valid">You did it!</Form.Control.Feedback>
                                    </Form.Check>
                                </div>
                            ))}
                        </div>
                        <Button variant="outline-primary" id = 'agenda' onClick={this.handleSubmit}>
                            Agendar visita
                            </Button>
                    </Form>
                    {/*</div>*/}
                </Modal.Body>
            </Modal>

        </div>)
    }
}

