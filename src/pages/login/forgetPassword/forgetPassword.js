import React from 'react'
import { Button, Form, Modal,Col } from 'react-bootstrap';
//import api from "../../services/api"
import './style.css';
import SweetAlert from "sweetalert2-react";
import TextField from "@material-ui/core/TextField";

export default class ForgetPassword extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            control: false,
            email: '',
            show: false
        };
        this.setControl = this.setControl.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.submitEmail = this.submitEmail.bind(this);
    }

    //Responsável por controlar o campo de texto  que guarda o email do usuário.
    handleChangeEmail(event) {
        this.setState({ email: event.target.value });
    }

    //Responsável por controlar a visualização do modal de recuperação de senha.
    setControl(event) {
        this.setState({ control: true })
    }

    //Responsável por chamar a rota que irá recuperar o email do usuário. 
    submitEmail(event) {
        //manda os dados do cadastro para o banco.
        //const response = await api.get('/login',this.state);
        this.setState({show: true});
    }
    render() {
        return (<div>
            <SweetAlert
                show={this.state.show}
                title="Sucesso"
                text="Sua senha foi enviada"
                onConfirm={() => this.setState({ show: false, control: false })}
            />
            <a id='forget' onClick={this.setControl}>Esqueceu a senha?</a>

            <Modal
                size="lg"
                show={this.state.control}
                onHide={() => this.setState({ control: false })}
                aria-labelledby="example-modal-sizes-title-lg"
                id="modalForget"
            >
                <Modal.Header closeButton id='header'>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Recuperação de senha
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* <div >
                        <Form>
                            <Form.Group id='formBasicEmail' controlId="formBasicEmail">
                                <Form.Label id='labelForget'>*Informe o email que você utilizou para fazer o cadastro</Form.Label>
                                <Form.Control type="email" placeholder="" id='emailForget' value={this.state.email} onChange={this.handleChangeEmail} />
                            </Form.Group>

                            <Button id='enviar' variant="outline-primary" onClick={this.submitEmail}>
                                Enviar
                            </Button>
                        </Form>
                    </div> */}
                    <Form.Group as={Col} md='8' controlId="formGridDirectorSurname">
                            <div noValidate autoComplete="off">
                                <TextField
                                    fullWidth={true}
                                    id="directorSurname"
                                    label="email"
                                    variant="outlined"
                                    size="small"
                                    value={this.state.respSurname}
                                    onChange={this.handleChangeDirectorSurname}
                                    required
                                    type="email"
                                    helperText = "Informe o email que você utilizou para fazer o cadastro"
                                />
                            </div> 
                        </Form.Group>
                </Modal.Body>
            </Modal>

        </div>)
    }
}
