import React from 'react'
import { Button,Form, Modal } from 'react-bootstrap';
//import api from "../../services/api"
import './style.css';

export default class ForgetPassword extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            control: false,
            email: ''
        };
        this.setControl = this.setControl.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
    }
    handleChangeEmail(event) {
        this.setState({ email: event.target.value });
    }
    setControl(event) {
        this.setState({ control: true })
    }
    submitEmail(event){

    }
    render() {
        return (<div>

            <a id='forget' onClick = {this.setControl}>Esqueceu a senha?</a>

            <Modal
                size="lg"
                show={this.state.control}
                onHide={() => this.setState({ control: false })}
                aria-labelledby="example-modal-sizes-title-lg"
                id = "modalForget"
            >
                <Modal.Header closeButton id = 'header'>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Recuperação de senha
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div >
                        <Form>
                            <Form.Group id= 'formBasicEmail' controlId="formBasicEmail">
                                <Form.Label id = 'labelForget'>*Informe o email que você utilizou para fazer o cadastro</Form.Label>
                                <Form.Control type="email" placeholder="" id = 'emailForget' value = {this.state.email}  onChange = {this.handleChangeEmail}/>
                                {/* <Form.Text className="text-muted">
                                    *informe quantas pessoas irão acompanhar você nessa visita(Ex: 1,2...)
                                </Form.Text> */}
                            </Form.Group>

                            <Button id = 'enviar' variant="outline-primary"  onClick = {this.submitEmail}>
                                Enviar
                            </Button>
                        </Form>
                    </div>
                </Modal.Body>
            </Modal>

        </div>)
    }
}
