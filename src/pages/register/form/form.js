import React from 'react'
import { Button, Col, Form } from 'react-bootstrap';
import './style.css';
import {Redirect } from 'react-router-dom'
import api from "../../../services/api"


export default class FormRegister extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            login: '',
            password: '',
            password2: '',
            name: '',
            address: '',
            city: '',
            state: '',
            CNPJ: '',
            phone: '',
            respName: '',
            schoolType: '',
            scholarity: '',
            redirect: false
        };

        //Funções responsáveis por atualizar os estados das informções.
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangePassword2 = this.handleChangePassword2.bind(this);
        this.handleChangeSchoolName = this.handleChangeSchoolName.bind(this);
        this.handleChangeAddress = this.handleChangeAddress.bind(this);
        this.handleChangeCity = this.handleChangeCity.bind(this);
        this.handleChangeState = this.handleChangeState.bind(this);
        this.handleChangeCNPJ = this.handleChangeCNPJ.bind(this);
        this.handleChangePhone = this.handleChangePhone.bind(this);
        this.handleChangeDirectorName = this.handleChangeDirectorName.bind(this);
        this.handleChangescholarity = this.handleChangescholarity.bind(this);
        this.handleChangeTypeSchool = this.handleChangeTypeSchool.bind(this);
        this.handleChangeLogin = this.handleChangeLogin.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
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
    handleChangeAddress(event) {
        this.setState({ address: event.target.value });
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

    handleChangeTypeSchool(event) {
        this.setState({ schoolType: event.target.value });
    }

    handleChangescholarity(event) {
        this.setState({ scholarity: event.target.value });
    }

    async handleSubmit(event) {
        api.post('/adicionarEscola',this.state)
            .then(function (response) {
                // handle success
                this.setState({redirect: true});
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }

    render() {
        //Se o cadatro foi realizado com o sucesso, retorna para a tela de login
        if(this.state.redirect){
            return <Redirect to="/home/"/>
        }
        return (
            <div id='temp'>
                <h1 id='titleForm'>Cadastro de Escola</h1>
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridNameSchool">
                            <Form.Label>Nome da Escola</Form.Label>
                            <Form.Control type="text" placeholder="Nome da Escola" value={this.state.name} onChange={this.handleChangeSchoolName} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridAddress">
                            <Form.Label>Endereço</Form.Label>
                            <Form.Control type="text" placeholder="Endereço" value={this.state.address} onChange={this.handleChangeAddress} />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>Cidade</Form.Label>
                            <Form.Control type="text" placeholder="Cidade" value={this.state.city} onChange={this.handleChangeCity} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Estado</Form.Label>
                            <Form.Control type="text" placeholder="Estado" value={this.state.state} onChange={this.handleChangeState} />
                        </Form.Group>

                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCNPJ">
                            <Form.Label>CNPJ</Form.Label>
                            <Form.Control type="text" placeholder="CNPJ" value={this.state.CNPJ} onChange={this.handleChangeCNPJ} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPhone">
                            <Form.Label>Telefone</Form.Label>
                            <Form.Control type="text" placeholder="(DDD)XXXX-XXXX" value={this.state.phone} onChange={this.handleChangePhone} />
                        </Form.Group>

                    </Form.Row>

                    <Form.Group controlId="formGridDirectorName">
                        <Form.Label>Nome do diretor</Form.Label>
                        <Form.Control type='text' placeholder="Nome do diretor" value={this.state.respName} onChange={this.handleChangeDirectorName} />
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridSchoolType">
                            <Form.Label>Escola</Form.Label>
                            <Form.Control as="select" value={this.state.schoolType} onChange={this.handleChangeTypeSchool}>
                                <option></option>
                                <option>Tipo de escola</option>
                                <option>Particular</option>
                                <option>Pública Estadual</option>
                                <option>Pública Municipal</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridScholarity">
                            <Form.Label>Grau de escolaridade</Form.Label>
                            <Form.Control as="select" value={this.state.scholarity} onChange={this.handleChangescholarity}>
                                <option></option>
                                <option>Escolaridade</option>
                                <option>Ensino infantil</option>
                                <option>até Ensino Fundamental</option>
                                <option>até Ensino Médio</option>
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' placeholder="Email" value={this.state.email} onChange={this.handleChangeEmail} />
                    </Form.Group>

                    <Form.Group controlId="formGridEmail">
                        <Form.Label>Nome de usuário</Form.Label>
                        <Form.Control type='text' placeholder="" value={this.state.login} onChange={this.handleChangeLogin} />
                    </Form.Group>


                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password" placeholder="Senha" value={this.state.password} onChange={this.handleChangePassword} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword2">
                            <Form.Label>Confirme a senha</Form.Label>
                            <Form.Control type="password" placeholder="Confirme a Senha" value={this.state.password2} onChange={this.handleChangePassword2}
                            />
                        </Form.Group>
                    </Form.Row>

                    <Button id='sendForm' variant="outline-primary" onClick={this.handleSubmit}>
                        Cadastrar
                    </Button>
                </Form>
            </div >
        )
    }

}
//10