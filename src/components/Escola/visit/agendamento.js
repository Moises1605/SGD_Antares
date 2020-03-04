import React from 'react'
import { Button,Row, Col, Form } from 'react-bootstrap';
import api from "../../../services/api";
import './style.css';


//Modal responsável por agendar uma visita.
export default class Agendamento extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date1: this.props.date2.toString(),
            responsible: '',
            students: '',
            date:'',
            number:'',
            obs:'',
            atrações: ['1', '2','3','4','5','6','7','8','9','10','11','12']
        };
        this.setControl = this.setControl.bind(this);
        this.handleChangeResponsible = this.handleChangeResponsible.bind(this);
        this.handleChangeStudents = this.handleChangeStudents.bind(this);
        this.handleChangeDate = this.handleChangeDate.bind(this);
        this.handleChangeNumber = this.handleChangeNumber.bind(this);
        this.handleChangeObs = this.handleChangeObs.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    async handleSubmit(event){
        api.post("/adicionarAgendamento", this.state)
    }

    render() {
        return (<div>
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
                                Horário
                                </Form.Label>
                            <Col sm={3}>
                                <Form.Control as="select" value = {this.state.date}  onChange = {this.handleChangeDate}>
                                <option></option>
                                                <option>08:30</option>
                                                <option>09:30</option>
                                                <option>10:30</option>
                                                <option>11:30</option>
                                                <option>14:30</option>
                                                <option>15:30</option>
                                                <option>16:30</option>
                                                <option>17:30</option>
                                                <option>18:30</option>
                                                <option>19:30</option>
                                                <option>20:30</option>
                                                <option>21:30</option>
                                </Form.Control> 
                            </Col>
                            <Button id='visit' variant="outline-primary" target="_blank"  href ='www.google.com' > 
                                Consultar horarios disponíveis
                            </Button>
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
                                        <Form.Check.Label>{`Exposição 1`}</Form.Check.Label>
                                        <Form.Control.Feedback type="valid">Astronomia</Form.Control.Feedback>
                                    </Form.Check>
                                </div>
                            ))}
                        </div>
                        <Button variant="outline-primary" id = 'agenda' onClick={this.handleSubmit}>
                            Agendar visita
                        </Button>
                    </Form>
        </div>)
    }
}

