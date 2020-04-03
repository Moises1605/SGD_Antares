import React from 'react'
import { Button, Col, Form } from 'react-bootstrap';
import './style.css';
import { Redirect } from 'react-router-dom'
import api from "../../../services/api"
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
//import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import TextField from "@material-ui/core/TextField";
import SweetAlert from 'sweetalert2-react';

export default class InfoSchool extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            IDSchool: this.props.idSchool,
            idPessoa: '',
            email: '',
            login: '',
            password: '',
            password2: '',
            respName: '',
            respSurname: '',
            schoolType: '',
            respPhone: '',
            name: '',
            district: '',
            number: '',
            street: '',
            city: '',
            state: '',
            CNPJ: '',
            phone: '',
            max: 2,
            controlPassword: true,
            controlCNPJ: true,
            controlLength: true,
            controlPhone: true,
            currencies: ["Particular", "Pública Estadual", "Pública Municipal"],
            show:false
        }

        //Funções responsáveis por atualizar os estados das informções.
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangePassword2 = this.handleChangePassword2.bind(this);
        this.handleChangeSchoolName = this.handleChangeSchoolName.bind(this);
        this.handleChangeDistrict = this.handleChangeDistrict.bind(this);
        this.handleChangeNumber = this.handleChangeNumber.bind(this);
        this.handleChangeStreet = this.handleChangeStreet.bind(this);
        this.handleChangeCity = this.handleChangeCity.bind(this);
        this.handleChangeState = this.handleChangeState.bind(this);
        this.handleChangeCNPJ = this.handleChangeCNPJ.bind(this);
        this.handleChangePhone = this.handleChangePhone.bind(this);
        this.handleChangeDirectorName = this.handleChangeDirectorName.bind(this);
        this.handleChangeDirectorSurname = this.handleChangeDirectorSurname.bind(this);
        this.handleChangeRespPhone = this.handleChangeRespPhone.bind(this);
        this.handleChangeTypeSchool = this.handleChangeTypeSchool.bind(this);
        this.handleChangeLogin = this.handleChangeLogin.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    async componentDidMount() {
        console.log("safe:" + this.state.IDSchool)
        const response = await api.post("/retornaDadosEscola", this.state);
        this.setState({
            idPessoa: response.data.idPessoa,
            email: response.data.email,
            login: response.data.login,
            password: '',
            password2: '',
            respName: response.data.respName,
            respSurname: response.data.respSurname,
            schoolType: response.data.schooltype,
            respPhone: response.data.respPhone,
            name: response.data.name,
            district: response.data.district,
            number: response.data.number,
            street: response.data.street,
            city: response.data.city,
            state: response.data.state,
            CNPJ: response.data.CMPJ,
            phone: response.data.phone,
        })
    }

    //Funções responsáveis por atuzalizar as informações.
    handleChangeEmail(event) {
        this.setState({ email: event.target.value });
    }

    handleChangePassword(event) {
        if (event.target.value == this.state.password2) {
            this.setState({ controlPassword: true });
        } else {
            this.setState({ controlPassword: false });
        }
        this.setState({ password: event.target.value });
    }

    handleChangePassword2(event) {
        if (this.state.password == event.target.value) {
            this.setState({ controlPassword: true });
        } else {
            this.setState({ controlPassword: false });
        }
        this.setState({ password2: event.target.value });
    }

    handleChangeLogin(event) {
        if (event.target.value.length <= this.state.max) {
            this.setState({ controlLength: true });
        } else {
            this.setState({ controlLength: false });
        }
        this.setState({ login: event.target.value });
    }

    handleChangeSchoolName(event) {
        if (event.target.value.length <= this.state.max) {
            this.setState({ controlLength: true });
        } else {
            this.setState({ controlLength: false });
        }
        this.setState({ name: event.target.value });
    }
    handleChangeDistrict(event) {
        if (event.target.value.length <= this.state.max) {
            this.setState({ controlLength: true });
        } else {
            this.setState({ controlLength: false });
        }
        this.setState({ district: event.target.value });
    }
    handleChangeNumber(event) {
        this.setState({ number: event.target.value });
    }
    handleChangeStreet(event) {
        if (event.target.value.length <= this.state.max) {
            this.setState({ controlLength: true });
        } else {
            this.setState({ controlLength: false });
        }
        this.setState({ street: event.target.value });
    }
    handleChangeCity(event) {
        if (event.target.value.length <= this.state.max) {
            this.setState({ controlLength: true });
        } else {
            this.setState({ controlLength: false });
        }
        this.setState({ city: event.target.value });
    }

    handleChangeState(event) {
        if (event.target.value.length <= this.state.max) {
            this.setState({ controlLength: true });
        } else {
            this.setState({ controlLength: false });
        }
        this.setState({ state: event.target.value });
    }

    handleChangeCNPJ(event) {
        if (event.target.value.length > 14 || event.target.value.length < 14) {
            this.setState({ controlCNPJ: false });
        } else {
            this.setState({ controlCNPJ: true });
        }
        this.setState({ CNPJ: event.target.value });
    }

    handleChangePhone(event) {
        if (event.target.value.length > 8 || event.target.value.length < 8) {
            this.setState({ controlPhone: false });
        } else {
            this.setState({ controlPhone: true });
        }
        this.setState({ phone: event.target.value });
    }

    handleChangeDirectorName(event) {
        if (event.target.value.length <= this.state.max) {
            this.setState({ controlLength: true });
        } else {
            this.setState({ controlLength: false });
        }
        this.setState({ respName: event.target.value });
    }

    handleChangeDirectorSurname(event) {
        if (event.target.value.length <= this.state.max) {
            this.setState({ controlLength: true });
        } else {
            this.setState({ controlLength: false });
        }
        this.setState({ respSurname: event.target.value });
    }

    handleChangeTypeSchool(event) {
        this.setState({ schoolType: event.target.value });
    }

    handleChangeRespPhone(event) {
        if (event.target.value.length > 8 || event.target.value.length < 8) {
            this.setState({ controlPhone: false });
        } else {
            this.setState({ controlPhone: true });
        }
        this.setState({ respPhone: event.target.value });
    }

    async handleSubmit(event) {
        await api.post("/atualizaDadosEscola", this.state);
        alert("Alterações salvas com sucesso");
        this.setState({show: true});
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <SweetAlert
                    show={this.state.show}
                    title="Sucesso"
                    text="Alterações salvas com sucesso"
                    onConfirm={() => this.setState({ show: false })}
                />
                <h1 id='titleSchool'>Gerenciar Dados</h1>
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} md="5" controlId="formGridNameSchool">
                            <div noValidate autoComplete="off">
                                <TextField
                                    fullWidth={true}
                                    id="formGridNameSchool"
                                    label="Nome da Escola"
                                    variant="outlined"
                                    size="small"
                                    value={this.state.name}
                                    onChange={this.handleChangeSchoolName}
                                    required
                                    type="text"
                                    /*error={this.state.name.length > this.state.max}
                                    helperText={
                                        this.state.name.length <= this.state.max == true
                                            ? " "
                                            : "Máximo de 30 Caracteres"
                                    }*/
                                />
                            </div>
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="formGridStreet">
                            <div noValidate autoComplete="off">
                                <TextField
                                    fullWidth={true}
                                    id="outlined-basic"
                                    label="Rua ou Avenida"
                                    variant="outlined"
                                    size="small"
                                    value={this.state.street}
                                    onChange={this.handleChangeStreet}
                                    required
                                    type="text"
                                    /*error={this.state.street.length > this.state.max}
                                    helperText={
                                        this.state.street.length <= this.state.max == true
                                            ? " "
                                            : "Máximo de 30 Caracteres"
                                    }*/
                                />
                            </div>
                        </Form.Group>
                        <Form.Group as={Col} md="2" controlId="formGridNumber">
                            <div noValidate autoComplete="off">
                                <TextField
                                    fullWidth={true}
                                    id="outlined-basic"
                                    label="Número"
                                    variant="outlined"
                                    size="small"
                                    value={this.state.number}
                                    onChange={this.handleChangeNumber}
                                    required
                                    type="number"
                                />
                            </div>
                        </Form.Group>
                        <Form.Group as={Col} md="2" controlId="formGridDistrict">
                            <div noValidate autoComplete="off">
                                <TextField
                                    fullWidth={true}
                                    id="outlined-basic"
                                    label="Bairro"
                                    variant="outlined"
                                    size="small"
                                    value={this.state.district}
                                    onChange={this.handleChangeDistrict}
                                    required
                                    type="text"
                                    /*error={this.state.district.length > this.state.max}
                                    helperText={
                                        this.state.district.length <= this.state.max == true
                                            ? " "
                                            : "Máximo de 30 Caracteres"
                                    }*/
                                />
                            </div>
                        </Form.Group>
                    </Form.Row>
                    {/* <Form.Row>
                        <Form.Group as={Col} md='3'></Form.Group>
                    </Form.Row> */}
                    <Form.Row>
                        <Form.Group as={Col} md="2" controlId="formGridCity">
                            <div noValidate autoComplete="off">
                                <TextField
                                    fullWidth={true}
                                    id="outlined-basic"
                                    label="Cidade"
                                    variant="outlined"
                                    size="small"
                                    value={this.state.city}
                                    onChange={this.handleChangeCity}
                                    required
                                    type="text"
                                    /*error={this.state.city.length > this.state.max}
                                    helperText={
                                        this.state.city.length <= this.state.max == true
                                            ? " "
                                            : "Máximo de 30 Caracteres"
                                    }*/
                                />
                            </div>
                        </Form.Group>

                        <Form.Group as={Col} md="2" controlId="formGridState">
                            <div noValidate autoComplete="off">
                                <TextField
                                    fullWidth={true}
                                    id="outlined-basic"
                                    label="Estado"
                                    variant="outlined"
                                    size="small"
                                    value={this.state.state}
                                    onChange={this.handleChangeState}
                                    required
                                    type="text"
                                    /*error={this.state.state.length > this.state.max}
                                    helperText={
                                        this.state.state.length <= this.state.max == true
                                            ? " "
                                            : "Máximo de 30 Caracteres"
                                    }*/
                                />
                            </div>
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="formGridCNPJ">
                            <div noValidate autoComplete="off">
                                <TextField
                                    fullWidth={true}
                                    id="outlined-basic"
                                    label="CNPJ"
                                    variant="outlined"
                                    size="small"
                                    value={this.state.CNPJ}
                                    onChange={this.handleChangeCNPJ}
                                    required
                                    type="number"
                                    /*error={!this.state.controlCNPJ}
                                    helperText={
                                        this.state.controlCNPJ == true ? " " : "CNPJ inválido"
                                    }*/
                                />
                            </div>
                        </Form.Group>

                        <Form.Group as={Col} md="3" controlId="formGridPhone">
                            <div noValidate autoComplete="off">
                                <TextField
                                    fullWidth={true}
                                    id="outlined-basic"
                                    label="Telefone"
                                    variant="outlined"
                                    size="small"
                                    value={this.state.phone}
                                    onChange={this.handleChangePhone}
                                    required
                                    type="number"
                                    /*error={!this.state.controlPhone}
                                    helperText={
                                        this.state.controlPhone == true ? " " : "Telefone válido possui 8 caracteres"
                                    }*/
                                />
                            </div>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md='3'></Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md='2' controlId="formGridDirectorName">
                            <div noValidate autoComplete="off">
                                <TextField
                                    fullWidth={true}
                                    id="formGridDirectorName"
                                    label="Nome do diretor"
                                    variant="outlined"
                                    size="small"
                                    value={this.state.respName}
                                    onChange={this.handleChangeDirectorName}
                                    required
                                    type="text"
                                    /*error={this.state.respName.length > this.state.max}
                                    helperText={
                                        this.state.respName.length <= this.state.max == true
                                            ? " "
                                            : "Máximo de 30 Caracteres"
                                    }*/
                                />
                            </div>
                        </Form.Group>

                        <Form.Group controlId="formGridDirectorSurname">
                            <div noValidate autoComplete="off">
                                <TextField
                                    fullWidth={true}
                                    id="outlined-basic"
                                    label="Sobrenome do diretor"
                                    variant="outlined"
                                    size="small"
                                    value={this.state.respSurname}
                                    onChange={this.handleChangeDirectorSurname}
                                    required
                                    type="text"
                                    /*error={this.state.respSurname.length > this.state.max}
                                    helperText={
                                        this.state.respSurname.length <= this.state.max == true
                                            ? " "
                                            : "Máximo de 30 Caracteres"
                                    }*/
                                />
                            </div>
                        </Form.Group>
                        <Form.Group as={Col} md='1' ></Form.Group>
                        <TextField
                            id="standard-select-currency"
                            size="small"
                            select
                            label="Tipo de escola"
                            value={this.state.schoolType}
                            onChange={this.handleChangeTypeSchool}
                            SelectProps={{
                                native: true
                            }}
                            variant="outlined"
                            helperText="Por favor escolha uma opção"
                        >
                            {this.state.currencies.map(option => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </TextField>
                        <Form.Group as={Col} md='1' ></Form.Group>
                        <TextField
                            id="standard-select-currency"
                            size="small"
                            label="Telefone do diretor"
                            value={this.state.respPhone}
                            onChange={this.handleChangeRespPhone}
                            variant="outlined"
                            type="number"
                            required
                            /*error={!this.state.controlPhone}
                            helperText={
                                this.state.controlPhone == true ? " " : "Telefone válido possui 8 caracteres"
                            }*/
                        ></TextField>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md='3'></Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md='4' controlId="formGridEmail">
                            <div noValidate autoComplete="off">
                                <TextField
                                    fullWidth={true}
                                    id="outlined-basic"
                                    label="Email"
                                    variant="outlined"
                                    size="small"
                                    value={this.state.email}
                                    onChange={this.handleChangeEmail}
                                    required
                                    type="email"
                                />
                            </div>
                        </Form.Group>
                        <Form.Group as={Col} md='1'></Form.Group>
                        <Form.Group as={Col} md='3' controlId="formGridLogin">
                            <div noValidate autoComplete="off">
                                <TextField
                                    fullWidth={true}
                                    id="outlined-basic"
                                    label="Nome do Usuário"
                                    variant="outlined"
                                    size="small"
                                    value={this.state.login}
                                    onChange={this.handleChangeLogin}
                                    required
                                    type="text"
                                    /*error={this.state.login.length > this.state.max}
                                    helperText={
                                        this.state.login.length <= this.state.max == true
                                            ? " "
                                            : "Máximo de 30 Caracteres"
                                    }*/
                                />
                            </div>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md='3'></Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md='3' controlId="formGridPassword">
                            <div noValidate autoComplete="off">
                                <TextField
                                    fullWidth={true}
                                    id="outlined-basic"
                                    label="Senha"
                                    variant="outlined"
                                    size="small"
                                    value={this.state.password}
                                    onChange={this.handleChangePassword}
                                    required
                                    type="password"
                                />
                            </div>
                        </Form.Group>
                        <Form.Group as={Col} md='1' ></Form.Group>
                        <Form.Group as={Col} md='3' controlId="formGridPassword2">
                            <div noValidate autoComplete="off">
                                <TextField
                                    fullWidth={true}
                                    error={!this.state.controlPassword}
                                    id="outlined-basic"
                                    label="Confirme a senha"
                                    variant="outlined"
                                    size="small"
                                    value={this.state.password2}
                                    onChange={this.handleChangePassword2}
                                    required
                                    type="password"
                                    helperText={
                                        this.state.controlPassword === true
                                            ? " "
                                            : "As senhas estão diferentes"
                                    }
                                />
                            </div>
                        </Form.Group>
                        <Form.Group as={Col} md='1' ></Form.Group>
                        <Button
                            id="updateButton"
                            /*disabled={!(
                                this.state.controlPassword &&
                                this.state.controlLength &&
                                this.state.controlPhone &&
                                this.state.controlCNPJ
                            )}*/
                            variant="primary" onClick={this.handleSubmit}>
                            Salvar alterações
                    </Button>
                    </Form.Row>
                </Form>
            </div>
        )
    }
}