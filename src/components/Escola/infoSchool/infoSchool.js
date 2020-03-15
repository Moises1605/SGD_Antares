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

export default class InfoSchool extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            IDSchool: this.props.idSchool,
            email: '',
            login: '',
            password: '',
            password2: '',
            respName: '',
            respSurname: '',
            schoolType: '',
            scholarity: '',
            name: '',
            district: '',
            number: '',
            street: '',
            city: '',
            state: '',
            CNPJ: '',
            phone: '',
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
        this.handleChangescholarity = this.handleChangescholarity.bind(this);
        this.handleChangeTypeSchool = this.handleChangeTypeSchool.bind(this);
        this.handleChangeLogin = this.handleChangeLogin.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    componentDidMount(){
        /*const response = await api.get("/retornaDadosEscola", this.state.IDSchool);
        this.setState({
            email: response.data.email,
            login: response.data.login,
            password: '',
            password2: '',
            respName: response.data.respName,
            respSurname: response.data.respSurname,
            schoolType: response.data.schooltype,
            scholarity: response.data.scholarity,
            name: response.data.name,
            district: response.data.district,
            number: response.data.number,
            street: response.data.street,
            city: response.data.city,
            state: response.data.state,
            CNPJ: response.data.CMPJ,
            phone: response.data.phone,
        })*/
    }

    //Funções responsáveis por atuzalizar as informações.
    handleChangeEmail(event) {
        this.setState({ email: event.target.value });
    }

    handleChangePassword(event) {
        this.setState({ password: event.target.value });
    }

    handleChangePassword2(event) {
        this.setState({ password2: event.target.value });
    }

    handleChangeLogin(event) {
        this.setState({ login: event.target.value });
    }

    handleChangeSchoolName(event) {
        this.setState({ name: event.target.value });
    }
    handleChangeDistrict(event) {
        this.setState({ district: event.target.value });
    }
    handleChangeNumber(event) {
        this.setState({ number: event.target.value });
    }
    handleChangeStreet(event) {
        this.setState({ street: event.target.value });
    }
    handleChangeCity(event) {
        this.setState({ city: event.target.value });
    }

    handleChangeState(event) {
        this.setState({ state: event.target.value });
    }

    handleChangeCNPJ(event) {
        this.setState({ CNPJ: event.target.value });
    }

    handleChangePhone(event) {
        this.setState({ phone: event.target.value });
    }

    handleChangeDirectorName(event) {
        this.setState({ respName: event.target.value });
    }

    handleChangeDirectorSurname(event) {
        this.setState({ respSurname: event.target.value });
    }

    handleChangeTypeSchool(event) {
        this.setState({ schoolType: event.target.value });
    }

    handleChangescholarity(event) {
        this.setState({ scholarity: event.target.value });
    }

    handleSubmit(){
        //await api.post("/atualizarEscola", this.state);
    }

    render(){
        return(
            <div>
            <h1 id = 'titleSchool'>Gerenciar Dados</h1>
            <Form onSubmit={this.handleNext}>
            <Form.Row>
                <Form.Group as={Col}  md="5" controlId="formGridNameSchool">
                    <div noValidate autoComplete="off">
                        <TextField
                            fullWidth = {true}
                            id="formGridNameSchool"
                            label="Nome da Escola"
                            variant="outlined"
                            size="small"
                            value={this.state.name} 
                            onChange={this.handleChangeSchoolName}
                            required
                            type="text"
                        />
                    </div>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="formGridStreet">
                    <div noValidate autoComplete="off">
                        <TextField
                            fullWidth = {true}
                            id="outlined-basic"
                            label="Rua ou Avenida"
                            variant="outlined"
                            size="small"
                            value={this.state.street}
                            onChange={this.handleChangeStreet}
                            required
                            type="text"
                        />
                    </div>
                </Form.Group>
                <Form.Group as={Col} md="2" controlId="formGridNumber">
                    <div noValidate autoComplete="off">
                        <TextField
                            fullWidth = {true}
                            id="outlined-basic"
                            label="Número"
                            variant="outlined"
                            size="small"
                            value={this.state.number}
                            onChange={this.handleChangeNumber}
                            required
                            type="text"
                        />
                    </div>
                </Form.Group>
                <Form.Group as={Col} md="2" controlId="formGridDistrict">
                    <div noValidate autoComplete="off">
                        <TextField
                            fullWidth = {true}
                            id="outlined-basic"
                            label="Bairro"
                            variant="outlined"
                            size="small"
                            value={this.state.district}
                            onChange={this.handleChangeDistrict}
                            required
                            type="text"
                        />
                    </div>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} md = '3'></Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} md="2" controlId="formGridCity">
                    <div noValidate autoComplete="off">
                        <TextField
                            fullWidth = {true}
                            id="outlined-basic"
                            label="Cidade"
                            variant="outlined"
                            size="small"
                            value={this.state.c3ty}
                            onChange={this.handleChangeCity}
                            required
                            type="text"
                        />
                    </div>
                </Form.Group>
                
                <Form.Group as={Col} md="2" controlId="formGridState">
                    <div noValidate autoComplete="off">
                        <TextField
                            fullWidth = {true}
                            id="outlined-basic"
                            label="Estado"
                            variant="outlined"
                            size="small"
                            value={this.state.state}
                            onChange={this.handleChangeState}
                            required
                            type="text"
                        />
                    </div>
                </Form.Group>
                <Form.Group as={Col} md = "3" controlId="formGridCNPJ">
                    <div noValidate autoComplete="off">
                        <TextField
                            fullWidth = {true}
                            id="outlined-basic"
                            label="CNPJ"
                            variant="outlined"
                            size="small"
                            value={this.state.CNPJ}
                            onChange={this.handleChangeCNPJ}
                            required
                            type="number"
                        />
                    </div>
                </Form.Group>
                
                <Form.Group as={Col} md = "3" controlId="formGridPhone">
                    <div noValidate autoComplete="off">
                        <TextField
                            fullWidth = {true}
                            id="outlined-basic"
                            label="Telefone"
                            variant="outlined"
                            size="small"
                            value={this.state.phone}
                            onChange={this.handleChangePhone}
                            required
                            type="number"
                        />
                    </div>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} md = '3'></Form.Group>
            </Form.Row>
            <Form.Row>
                            <Form.Group as={Col} md = '2' controlId="formGridDirectorName">
                                <div noValidate autoComplete="off">
                                    <TextField
                                        fullWidth = {true}
                                        id="formGridDirectorName"
                                        label="Nome do diretor"
                                        variant="outlined"
                                        size="small"
                                        value={this.state.respName}
                                        onChange={this.handleChangeDirectorName}
                                        required
                                        type="text"
                                    />
                                </div>
                            </Form.Group>
                            
                            <Form.Group controlId="formGridDirectorSurname">
                                <div noValidate autoComplete="off">
                                    <TextField
                                        fullWidth = {true}
                                        id="outlined-basic"
                                        label="Sobrenome do diretor"
                                        variant="outlined"
                                        size="small"
                                        value={this.state.respSurname}
                                        onChange={this.handleChangeDirectorSurname}
                                        required
                                        type="text"
                                    />
                                </div>
                            </Form.Group>

                            <Form.Group as={Col} md = "3" controlId="formGridSchoolType">
                                {/* <Form.Label>Escola</Form.Label> */}
                                <Form.Control required as="select" value={this.state.schoolType} onChange={this.handleChangeTypeSchool}>
                                    <option>Tipo de escola</option>
                                    <option>Particular</option>
                                    <option>Pública Estadual</option>
                                    <option>Pública Municipal</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group as={Col} md = "3" controlId="formGridScholarity">
                                {/* <Form.Label>Grau de escolaridade</Form.Label> */}
                                <Form.Control required as="select" value={this.state.scholarity} onChange={this.handleChangescholarity}>
                                    <option>Escolaridade</option>
                                    <option>Ensino infantil</option>
                                    <option>até Ensino Fundamental</option>
                                    <option>até Ensino Médio</option>
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} md = '3'></Form.Group>
                        </Form.Row>
            <Form.Row>
                            <Form.Group as={Col} md = '4' controlId="formGridEmail">
                                <div noValidate autoComplete="off">
                                    <TextField
                                        fullWidth = {true}
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
                            <Form.Group as={Col} md = '1'></Form.Group>
                            <Form.Group as={Col} md = '3' controlId="formGridLogin">
                                <div noValidate autoComplete="off">
                                    <TextField
                                        fullWidth = {true}
                                        id="outlined-basic"
                                        label="Nome do Usuário"
                                        variant="outlined"
                                        size="small"
                                        value={this.state.login}
                                        onChange={this.handleChangeLogin}
                                        required
                                        type="text"
                                    />
                                </div>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} md = '3'></Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} md = '3' controlId="formGridPassword">
                                <div noValidate autoComplete="off">
                                    <TextField
                                        fullWidth = {true}
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
                            <Form.Group as={Col} md = '1' ></Form.Group>
                            <Form.Group as={Col} md = '3' controlId="formGridPassword2">
                            <div noValidate autoComplete="off">
                                    <TextField
                                        fullWidth = {true}
                                        id="outlined-basic"
                                        label="Confirme a senha"
                                        variant="outlined"
                                        size="small"
                                        value={this.state.password2}
                                        onChange={this.handleChangePassword2}
                                        required
                                        type="password"
                                    />
                                </div>
                            </Form.Group>
            </Form.Row>
            <Button variant="primary" type='submit'>
                Salvar alterações
            </Button>
        </Form>
        </div>
        )
    }
}