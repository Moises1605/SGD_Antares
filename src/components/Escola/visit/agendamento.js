import React from 'react'
import { Button, Row, Col, Form } from 'react-bootstrap';
import api from "../../../services/api";
import './style.css';
import SweetAlert from 'sweetalert2-react';

//Modal responsável por agendar uma visita.
export default class Agendamento extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date1: this.props.date2.toString(),
            responsible: '',
            students: '',
            date: '',
            number: '',
            obs: '',
            atrações: [{ id: '1', name: 'Exposição 1', tipo: 'Astronimia' }, { id: '2', name: 'Exposição 2', tipo: 'Origem do homem' }, { id: '3', name: 'Exposição 3', tipo: 'Vida Animal' }, { id: '4', name: 'Exposição 4', tipo: 'Astronimia' }, { id: '5', name: 'Exposição 5', tipo: 'Origem do homem' }, { id: '6', name: 'Exposição 6', tipo: 'Vida animal' }, { id: '7', name: 'Exposição 7', tipo: 'Astronomia' }, { id: '8', name: 'Exposição 8', tipo: 'Origem do homem' }, { id: '9', name: 'Exposição 9', tipo: 'Vida animal' }, { id: '10', name: 'Exposição 10', tipo: 'Astronomia' }, { id: '11', name: 'Exposição 11', tipo: 'Origem do homem' }, { id: '12', name: 'Exposição 12', tipo: 'Vida animal' }],
            atraçõesT: [],
            show: false
        };
        this.handleChangeResponsible = this.handleChangeResponsible.bind(this);
        this.handleChangeStudents = this.handleChangeStudents.bind(this);
        this.handleChangeDate = this.handleChangeDate.bind(this);
        this.handleChangeNumber = this.handleChangeNumber.bind(this);
        this.handleChangeObs = this.handleChangeObs.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeO = this.handleChangeO.bind(this);
    }

    //Responsável por controlar o campo de texto  que guarda o nome do responsável.
    handleChangeResponsible(event) {
        this.setState({ responsible: event.target.value });
    }

    // Responsável por controlar o campo de texto  que guarda o número de estudantes.
    handleChangeStudents(event) {
        this.setState({ students: event.target.value });
    }

    //Responsável por controlar o campo de texto  que guarda o horário da visita. 
    handleChangeDate(event) {
        this.setState({ date: event.target.value });
    }

    // Responsável por controlar o campo de texto  que guarda a série da visita. 
    handleChangeNumber(event) {
        this.setState({ number: event.target.value });
    }

    //Responsável por controlar o campo de texto  que guarda uma observação do usuário.
    handleChangeObs(event) {
        this.setState({ obs: event.target.value });
    }

    //Responsável por controlar as atrações que foram selecionadas pelo usuário.
    handleChangeO(event) {
        console.log(event.target.name);
        var id = event.target.name;
        if (!this.state.atraçõesT.includes(id)) {
            this.state.atraçõesT.push(id);
        }
        else if (!event.target.checked) {
            const index = this.state.atraçõesT.indexOf(event.target.name);
            this.state.atraçõesT.splice(index, 1);
        }
    }

    componentDidMount() {
        //const response = await api.post("/retornaAtracoes");
        //this.setState({atrações: response.data});
    }
    //Responsável por chamar a rota que irá guadar o agendamento da escola.
    /*async*/ handleSubmit(event) {
        console.log(this.state.atraçõesT);
        //await api.post("/adicionarAgendamento", this.state);
        this.setState({ show: true });
    }

    render() {
        return (<div>
            <SweetAlert
                show={this.state.show}
                icon='success'
                title="Sucesso"
                text="Agendamento solicitado com sucesso"
                onConfirm={() => this.setState({ show: false })}
            />
            <Form>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={3}>
                        Nome do responsável
                                </Form.Label>
                    <Col sm={6}>
                        <Form.Control type="text" placeholder="Nome completo" value={this.state.responsible} onChange={this.handleChangeResponsible} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalStudent">
                    <Form.Label column sm={3}>
                        Quantidade de alunos
                            </Form.Label>
                    <Col sm={3}>
                        <Form.Control type="text" placeholder="Max: 40" value={this.state.students} onChange={this.handleChangeStudents} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalDate">
                    <Form.Label column sm={3}>
                        Horário
                                </Form.Label>
                    <Col sm={3}>
                        <Form.Control as="select" value={this.state.date} onChange={this.handleChangeDate}>
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
                    <Button id='visit' variant="outline-primary" target="_blank" href='www.google.com' >
                        Consultar horarios disponíveis
                            </Button>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalSerie">
                    <Form.Label column sm={3}>
                        Série(Ano)
                                </Form.Label>
                    <Col sm={2}>
                        <Form.Control type="text" placeholder=" " value={this.state.number} onChange={this.handleChangeNumber} />
                    </Col>
                </Form.Group>

                <Form.Group id='textArea' controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Observações</Form.Label>
                    <Form.Control as="textarea" rows="3" value={this.state.obs} onChange={this.handleChangeObs} />
                    <Form.Text className="text-muted">
                        Caso tenha algo a mais para informar.
                            </Form.Text>
                </Form.Group>
                <div>
                    <Form.Label>
                        Escolha quais atrações deseja visitar.
                            </Form.Label>
                    <Row>
                        {this.state.atrações.map(type => (

                            <Col id='hy' as={Col} md="3" key={type.id.toString()} className="mb-3">
                                <Form.Check type='checkbox' id={`check-api-radio`} >
                                    <Form.Check.Input onChange={this.handleChangeO} name={type.name} type='checkbox' isValid />
                                    <Form.Check.Label>{type.name}</Form.Check.Label>
                                    <Form.Control.Feedback type="valid">{type.tipo}</Form.Control.Feedback>
                                </Form.Check>
                            </Col>

                        ))}
                    </Row>
                </div>
                <Button variant="outline-primary" id='agenda' onClick={this.handleSubmit}>
                    Agendar visita
                        </Button>
            </Form>
        </div>)
    }
}

