import React from 'react'
import { Button, Row, Col, Form, Modal, Badge } from 'react-bootstrap';
import api from "../../../services/api";
import './style.css';
import SweetAlert from 'sweetalert2-react';

//Modal responsável por agendar uma visita.
export default class Agendamento extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            idSchool: 17/*this.props.idSchool*/,
            date1: this.props.date2.toString(),
            responsible: '',
            students: '',
            date: '',
            number: '',
            obs: '',
            atrações: [
                /*{ nome: 'Exposição 1', tipo: '0', descricao: "expo 1",inicioPeriodo:null,fimPeriodo:null,semana:null },
                { nome: 'Exposição 2', tipo: '0', descricao: "expo 2",inicioPeriodo:"",fimPeriodo:"",semana:"" },
                { nome: 'Exposição 3', tipo: '0', descricao: "expo 3",inicioPeriodo:"",fimPeriodo:"",semana:"" }, 
                { nome: 'Exposição 4', tipo: '1', descricao: "expo 4",inicioPeriodo:"25/05",fimPeriodo:"30/06",semana:"6" }, 
                { nome: 'Exposição 5', tipo: '0', descricao: "expo 5",inicioPeriodo:"",fimPeriodo:"",semana:"" }, 
                { nome: 'Exposição 6', tipo: '1', descricao: "expo 6",inicioPeriodo:"10/05",fimPeriodo:"20/05",semana:"1" }, 
                { nome: 'Exposição 7', tipo: '0', descricao: "expo 7",inicioPeriodo:"",fimPeriodo:"",semana:"" }, 
                { nome: 'Exposição 8', tipo: '0', descricao: "expo 8",inicioPeriodo:"",fimPeriodo:"",semana:"" }*/
            ],
            //atrações:[],
            types: ["comum", "extra"],
            atraçõesT: [],
            show: false,
            showDescription: false,
            currency: " ",
            diaSemana:["Segunda","Terça","Quarta","Quinta","Sexta","Sábado"],
            controlAtrações:true
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
        if(this.state.atraçõesT.length > 0){
            this.setState({controlAtrações:false})
        }
        else{
            this.setState({controlAtrações:true})
        }
    }
    //Responsável por guardar a descrição da atração escolhida pelo usuário.
    //Paramentro events é a atração escolhida pelo usuário
    controlDescription(events){
        this.setState({currency: events, showDescription: true});
    }

    async componentDidMount() {
        const response = await api.post("/retornaAtracoes");
        this.setState({ atrações: response.data });
    }
    //Responsável por chamar a rota que irá guadar o agendamento da escola.
    async handleSubmit(event) {
        console.log(this.state.atraçõesT.toString());
        //this.setState({ show: true });
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
            <Modal
                show={this.state.showDescription}
                onHide={() => this.setState({ showDescription: false })}
                aria-labelledby="example-modal-sizes-title-lg"
                id="modal2"
            >
                <Modal.Header closeButton id="header">
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Descrição
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {this.state.currency.descricao}
                </Modal.Body>
                <Modal.Footer>
                    <Badge pill style={{ fontSize: "16px" }} variant="primary">
                        Dia:{(this.state.currency.semana == "" || this.state.currency.semana == null) ? "não se aplica" : `${this.state.diaSemana[this.state.currency.semana - 1]}`}
                    </Badge>{' '}
                    <Badge pill style={{ fontSize: "16px" }} variant="primary">
                        Início:{(this.state.currency.inicioPeriodo == "" || this.state.currency.inicioPeriodo == null) ?  "não se aplica" : `${this.state.currency.inicioPeriodo}`}
                    </Badge>{' '} 
                    <Badge pill style={{ fontSize: "16px" }} variant="primary">
                        Fim:{(this.state.currency.fimPeriodo == "" || this.state.currency.fimPeriodo == null) ?  "não se aplica" : `${this.state.currency.fimPeriodo}`}
                    </Badge>{' '}
                
                </Modal.Footer>
            </Modal>
            <Form onSubmit = {this.handleSubmit}>
            <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={3}>
                        Dia
                    </Form.Label>
                    <Col sm={6}>
                        <Form.Control plaintext readOnly type="text" defaultValue={this.state.date1} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={3}>
                        Nome do responsável
                    </Form.Label>
                    <Col sm={6}>
                        <Form.Control required type="text" placeholder="Nome completo" value={this.state.responsible} onChange={this.handleChangeResponsible} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalStudent">
                    <Form.Label column sm={3}>
                        Quantidade de alunos
                    </Form.Label>
                    <Col sm={3}>
                        <Form.Control required type="text" placeholder="Max: 40" value={this.state.students} onChange={this.handleChangeStudents} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalDate">
                    <Form.Label column sm={3}>
                        Horário
                                </Form.Label>
                    <Col sm={3}>
                        <Form.Control as="select" value={this.state.date} onChange={this.handleChangeDate}>
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
                        <Form.Control required type="text" placeholder=" " value={this.state.number} onChange={this.handleChangeNumber} />
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
                        Escolha quais atrações deseja visitar, as atividades marcadas como extra, estão disponíveis por um 
                        período limitado e as comuns estão disponíveis todos os dias e nos horários dispobíveis para visita.
                    </Form.Label>
                    <Form.Text className="text-muted">{(this.state.controlAtrações) ? "Escolha pelo menos uma atração" : " "} </Form.Text>
                    <Row>
                        {this.state.atrações.map(type => (

                            <Col id='hy' as={Col} md="3" key={type.nome.toString()} className="mb-3">
                                <Form.Check type='checkbox' id={`check-api-radio`}>
                                    <Form.Check.Input onChange={this.handleChangeO} name={type.nome} type='checkbox' isValid />
                                    <Form.Check.Label>{type.nome}</Form.Check.Label>
                                    <Form.Control.Feedback type="valid">{this.state.types[type.tipo]}</Form.Control.Feedback>
                                    <Button size="sm" onClick = {() => this.controlDescription(type)}>+</Button>
                                </Form.Check>
                            </Col>
                        ))}
                    </Row>
                </div>
                <Button disabled = {this.state.controlAtrações} type = "submit" variant="primary" id='agenda' onClick={this.handleSubmit}>
                    Agendar visita
                </Button>
            </Form>
        </div>)
    }
}

