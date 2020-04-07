import React from "react";
import { Button, Col, Form, Modal } from "react-bootstrap";
import "./cadastrarAtividades.css";
import { Link } from "react-router-dom";
import api from "../../services/api";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Divider from "@material-ui/core/Divider";
import CadastroBolsista from "../Admin/form_bolsista";

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
            week: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    //Responsável por atualizar as mudanças no formulário.
    handleChange(event) {
        let { name, value } = event.target;
        //this.setState({ [className.split(" ")[0]]: value });
        this.setState({ [event.target.name]: value });
    }

    async handleSubmit(){
        console.log(this.state.name);
        console.log(this.state.type);
        console.log(this.state.week);
        console.log(this.state.description);
        console.log(this.state.fimPeriodo);
        console.log(this.state.inicioPeriodo);
        await api.post("/addAtracoes",this.state);
    }

    //addAtracoes
    render() {
        return (
            <div>
                <h2 id='titleSchool'>Cadastrar Atividades</h2>
                <Divider />
                <Form id="ativForm" onSubmit={this.handleSubmit}>
                    <Form.Row>
                        <Form.Group as={Col} md="3" controlId="formGridNumber">
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

                        <Form.Group as={Col} md="2" controlId="formGridNameSchool">
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
                        <Form.Group as={Col} md="2" controlId="formGridStreet">
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
                                    helperText="Data de termino"
                                />
                            </div>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md="3" controlId="formGridNameSchool">
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
                        <Form.Group as={Col} md="3" controlId="formGridNameSchool">
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
                        <Form.Group as={Col} md="5" controlId="formGridDistrict">
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
                    <Button variant="primary" onClick = {this.handleSubmit}>
                        Cadastrar
                    </Button>
                </Form>
                <div>

                </div>
            </div>
        )
    }
}