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
            idSchool: this.props.idSchool,
            date1: this.props.date2.toString(),
            responsible: '',
            students: '',
            date: '',
            number: '',
            obs: '',
            atrações: [{nome: 'Exposição 1', type: 'Astronimia' }, {nome: 'Exposição 2', type: 'Origem do homem' }, { nome: 'Exposição 3', type: 'Vida Animal' }, {nome: 'Exposição 4', type: 'Astronimia' }, {nome: 'Exposição 5', type: 'Origem do homem' }, {nome: 'Exposição 6', type: 'Vida animal' }, {nome: 'Exposição 7', type: 'Astronomia' }, {nome: 'Exposição 8', type: 'Origem do homem' }],
            //atrações:[],
            types:["comum","extra"],
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

    async componentDidMount() {
        const response = await api.post("/retornaAtracoes");
        this.setState({atrações: response.data});
    }
    //Responsável por chamar a rota que irá guadar o agendamento da escola.
    async handleSubmit(event) {
        console.log(this.state.atraçõesT.toString());
        this.setState({ show: true });
        await api.post("/adicionarAgendamento", this.state);
        
    }

    render() {
        return (<div>
            <SweetAlert
                show={this.state.show}
                title="Sucesso"
                text="Agendamento solicitado com sucesso.Caso não receba um email de confirmação de visita, tente agendar a visita novamente"
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
                            <option>09:00</option>
                            <option>10:00</option>
                            <option>11:00</option>
                            <option>14:00</option>
                            <option>15:00</option>
                            <option>16:00</option>
                            <option>17:00</option>
                        </Form.Control>
                    </Col>
                    <Button id='visit' variant="outline-primary" target="_blank" href='/horariosDisponiveis' >
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

                            <Col id='hy' as={Col} md="3" key={type.nome.toString()} className="mb-3">
                                <Form.Check type='checkbox' id={`check-api-radio`} >
                                    <Form.Check.Input onChange={this.handleChangeO} name={type.nome} type='checkbox' isValid />
                                    <Form.Check.Label>{type.nome}</Form.Check.Label>
                                    <Form.Control.Feedback type="valid">{this.state.types[type.type]}</Form.Control.Feedback>
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

