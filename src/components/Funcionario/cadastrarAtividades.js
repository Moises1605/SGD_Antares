import React from "react";
import { Button, Col, Form, Modal, Card } from "react-bootstrap";
import "./cadastrarAtividades.css";
import { Link } from "react-router-dom";
import api from "../../services/api";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Divider from "@material-ui/core/Divider";
import CadastroBolsista from "../Admin/form_bolsista";
import SweetAlert from 'sweetalert2-react';

export default class CadastrarAtividades extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            inicioPeriodo: "",
            fimPeriodo: "",
            description: "",
            type: "",
            tipos: [{ label: "Normal", value: 0 }, { label: "Extra", value: 1 }],
            dias: [{ label: "Segunda", value: 1 }, { label: "Terça", value: 2 }, { label: "Quarta", value: 3 }, { label: "Quinta", value: 4 }, { label: "Sexta", value: 5 }, { label: "Sábado", value: 6 }],
            events: [
                { nome: 'Exposição 1', tipo: '1', descricao: "expo 1",inicioPeriodo:null,fimPeriodo:null,semana:null },
                { nome: 'Exposição 2', tipo: '1', descricao: "expo 2",inicioPeriodo:"",fimPeriodo:"",semana:"" },
                { nome: 'Exposição 3', tipo: '1', descricao: "expo 3",inicioPeriodo:"",fimPeriodo:"",semana:"" }, 
                { nome: 'Exposição 4', tipo: '1', descricao: "expo 4",inicioPeriodo:"25/05",fimPeriodo:"30/06",semana:"6" }, 
                { nome: 'Exposição 5', tipo: '1', descricao: "expo 5",inicioPeriodo:"",fimPeriodo:"",semana:"" }, 
                { nome: 'Exposição 6', tipo: '1', descricao: "expo 6",inicioPeriodo:"10/05",fimPeriodo:"20/05",semana:"1" }, 
                { nome: 'Exposição 7', tipo: '0', descricao: "expo 7",inicioPeriodo:"",fimPeriodo:"",semana:"" }, 
                { nome: 'Exposição 8', tipo: '0', descricao: "expo 8",inicioPeriodo:"",fimPeriodo:"",semana:"" }
            ],
            eventsEx: [],
            week: "",
            currencyName: "",
            controlEvent: false,
            show:false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.deleteEvent = this.deleteEvent.bind(this);
        this.controlDeleteEvent = this.controlDeleteEvent.bind(this);
        this.filterEventsDelete = this.filterEventsDelete.bind(this);
    }

    //Responsável por controlar a visualização do modal de cancelamento
    controlDeleteEvent(eventName) {
        this.setState({ controlEvent: true, currencyName: eventName });
    }

    //Responsável por deletar uma atração
    deleteEvent(event) {
        var aux = this.state.eventsEx.filter(this.filterEventsDelete)
        console.log(aux);
        this.setState({eventsEx:aux});
        api.post("/deleteAtracao",this.state);
    }
    //filtro para retornar só as atrações extraordinárias
    filterEvents(ev) {
        return ev.tipo == 1;
    } 
    //filtro para retonar os elementos que não foram deletados
    filterEventsDelete(evDelete){
        return evDelete.nome !== this.state.currencyName;
    }

    //REsponsável por carregar as atrações extraordinárias
    async controlEvents() {
        var aux = await this.state.events.filter(this.filterEvents);
        this.setState({ eventsEx: aux });
    }

    async componentDidMount() {
        //const response = await api.post("/retornaAtracoes");
        //this.setState({ events: response.data });
        this.setState({eventsEx: this.state.events.filter(this.filterEvents)});
    }

    //Responsável por atualizar as mudanças no formulário.
    handleChange(event) {
        let { name, value } = event.target;
        //this.setState({ [className.split(" ")[0]]: value });
        this.setState({ [event.target.name]: value });
    }

    //Envia os dados da atividade para o back
    async handleSubmit() {
        console.log(this.state.name);
        console.log(this.state.type);
        console.log(this.state.week);
        console.log(this.state.description);
        console.log(this.state.fimPeriodo);
        console.log(this.state.inicioPeriodo);
        await api.post("/addAtracoes", this.state);
        this.setState({show: true});     
    }

    render() {
        return (
            <div>
                <SweetAlert
                    show={this.state.show}
                    title="Sucesso"
                    text="Atração cadastrada, recarregue a página por favor"
                    onConfirm={() => this.setState({ show: false })}
                />
                <Modal
                    show={this.state.controlEvent}
                    onHide={() => this.setState({ controlEvent: false })}
                    aria-labelledby="example-modal-sizes-title-lg"
                    id="modal"
                >
                    <Modal.Header closeButton id="header">
                        <Modal.Title id="example-modal-sizes-title-lg">
                            Tem certeza que deseja excluir  a atração?
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Button
                            
                            variant="outline-danger"
                            id="cancel2"
                            onClick={this.deleteEvent}
                        >
                            excluir atração
                        </Button>
                    </Modal.Body>
                </Modal>
                <h2 id='titleSchool'>Cadastrar Atividades</h2>
                <Divider />
                <Form id="ativForm" onSubmit={this.handleSubmit}>
                    <Form.Row>
                        <Form.Group as={Col} md="4" controlId="formGridNumber">
                            <div noValidate autoComplete="off">
                                <TextField
                                    fullWidth={true}
                                    id="outlined-basic"
                                    name="name"
                                    label="Nome"
                                    variant="outlined"
                                    size="small"
                                    value={this.state.nome}
                                    onChange={this.handleChange}
                                    required
                                    type="text"
                                />
                            </div>
                        </Form.Group>

                        <Form.Group as={Col} md="3" controlId="formGridNameSchool">
                            <div noValidate autoComplete="off">
                                <TextField
                                    fullWidth={true}
                                    id="formGridNameSchool"
                                    name="inicioPeriodo"
                                    label="Início"
                                    variant="outlined"
                                    size="small"
                                    value={this.state.beginPeriod}
                                    onChange={this.handleChange}
                                    required
                                    type="text"
                                    helperText="Data de início"
                                />
                            </div>
                        </Form.Group>
                        
                        <Form.Group as={Col} md="3" controlId="formGridStreet">
                            <div noValidate autoComplete="off">
                                <TextField
                                    fullWidth={true}
                                    id="outlined-basic"
                                    name="fimPeriodo"
                                    label="Final"
                                    variant="outlined"
                                    size="small"
                                    value={this.state.endPeriod}
                                    onChange={this.handleChange}
                                    required
                                    type="text"
                                    helperText="Data de término"
                                />
                            </div>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md="4" controlId="formGridNameSchool">
                            <div noValidate autoComplete="off">
                                <TextField
                                    id="standard-select-currency"
                                    size="small"
                                    name="type"
                                    select
                                    label="Tipo de atração"
                                    value={this.state.tipo}
                                    onChange={this.handleChange}
                                    SelectProps={{
                                        native: true
                                    }}
                                    variant="outlined"
                                    helperText="Por favor escolha uma opção"
                                >
                                    {this.state.tipos.map(option => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </TextField>
                            </div>
                        </Form.Group>
                        {/* <Form.Group as={Col} md="1"></Form.Group> */}
                        <Form.Group as={Col} md="4" controlId="formGridNameSchool">
                            <div noValidate autoComplete="off">
                                <TextField
                                    id="standard-select-currency"
                                    size="small"
                                    name="week"
                                    select
                                    label="Dia da semana"
                                    value={this.state.semana}
                                    onChange={this.handleChange}
                                    SelectProps={{
                                        native: true
                                    }}
                                    variant="outlined"
                                    helperText="Por favor escolha uma opção"
                                >
                                    {this.state.dias.map(option => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </TextField>
                            </div>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md="3"></Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md="7" controlId="formGridDistrict">
                            <div noValidate autoComplete="off">
                                <TextField
                                    fullWidth={true}
                                    id="outlined-basic"
                                    label="Descrição"
                                    name="description"
                                    variant="outlined"
                                    size="small"
                                    multiline
                                    rows="4"
                                    value={this.state.description}
                                    onChange={this.handleChange}
                                    required
                                    type="text"
                                    helperText="Comente um pouco sobre a atração"
                                />
                            </div>
                        </Form.Group>
                    </Form.Row>
                    <Button variant="primary" onClick={this.handleSubmit}>
                        Cadastrar
                    </Button>
                </Form>
                <div id="listEvents">
                    <h5>Atrações</h5>
                    {this.state.eventsEx.map(type => (
                            <Card key = {type.nome} id = "itemList">
                                <Card.Body>
                                    {type.nome}
                                    <div id = "eventButton"><Button  variant = "outline-danger" size = 'sm' onClick={() => this.controlDeleteEvent(type.nome)}>Excluir</Button></div>
                                </Card.Body>
                            </Card>
                    ))}
                
                </div>
            </div>
        )
    }
}