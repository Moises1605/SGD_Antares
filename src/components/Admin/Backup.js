import React from 'react'
import { Button, Col, Form, Row, Modal, Table, Container, Dropdown, InputGroup, FormControl, } from 'react-bootstrap';
import './Backup.css';
import { Redirect } from 'react-router-dom'
import api from "../../services/api"
import { makeStyles } from '@material-ui/core/styles';
//import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import NavigationIcon from "@material-ui/icons/Navigation";
import Divider from "@material-ui/core/Divider";
import SweetAlert from 'sweetalert2-react';

export default class InfoSchool extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            directoryBackup: "",//Diretório para salvar o backup
            directoryRecover:"",//Diretório do backup que erá ser restaurado
            controlRecover:false,//variável de controle para o modal de confirmação para restauração de um backup
            controlSucess: false,//variável de controle para o modal de sucesso
        }
        this.recoverBackup = this.recoverBackup.bind(this);
        this.controlRecoverBackup = this.controlRecoverBackup.bind(this);
        this.handleChangeDirectoryBackup = this.handleChangeDirectoryBackup.bind(this);
        this.handleChangeDirectoryRecover = this.handleChangeDirectoryRecover.bind(this);

    }

    controlRecoverBackup(event){
        this.setState({controlRecover:true});
        event.preventDefault();
    }

    recoverBackup(event) {
        //api.post("/recoverBackup",this.state);
        event.preventDefault();
    }

    controlBackup(event){
        //api.post("/Backup",this.state);
        event.preventDefault();
    }

    handleChangeDirectoryRecover(event) {
        this.setState({ directoryRecover: event.target.value });
    }

    handleChangeDirectoryBackup(event) {
        this.setState({ directoryBackup: event.target.value });
    }

    render() {
        return (
            <Container fluid>
                <Modal
                    show={this.state.controlRecover}

                    onHide={() => this.setState({ controlRecover: false })}
                    aria-labelledby="example-modal-sizes-title-lg"
                    id='modal'
                >
                    <Modal.Header closeButton id='header'>
                        <Modal.Title id="example-modal-sizes-title-lg">
                            Tem certeza que deseja restaurar esse backup?
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Button
                            variant="outline-danger"
                            id="cancel2"
                            onClick={this.recoverBackup}
                        >
                            Restaurar Backup
                        </Button>
                    </Modal.Body>
                </Modal>
                <Row>
                    <Col>
                        <h3 style={{ textAlign: "left", marginTop: "15px" }}>
                            Backup
                        </h3>
                    </Col>
                    
                    <Col id = "config" md={{ span: 4, offset: 4 }}>
                        <Button variant="primary">
                            <NavigationIcon/>
                            Configurações
                        </Button>
                    </Col>
                </Row>
                {/* <Row>
                    <div style={{ height: "3vh" }}></div>
                </Row> */}
                {/* <Row>
                    <Col></Col>
                    <Col></Col>
                    <Col>
                        
                    </Col>
                </Row> */}
                {/* <Row>
                    <div style={{ height: "3vh" }}></div>
                </Row> */}
                <Row>
                    <h6 style={{ textAlign: "left", marginTop: "15px", marginLeft: "15px" }}>
                        Fazer backup dos dados
                    </h6>
                </Row>
                <Row>
                    <Col>
                        <Form>
                            <Form.Row>
                                <Form.Group as={Col} md="4">
                                    <div noValidate autoComplete="off">
                                        <TextField
                                            fullWidth={true}
                                            label="Diretorio"
                                            variant="outlined"
                                            size="small"
                                            value={this.state.directoryBackup}
                                            onChange={this.handleChangeDirectoryBackup}
                                            required
                                            type="text"
                                            helperText="Digite o diretório onde o Backup será salvo"
                                        />
                                    </div>
                                </Form.Group>
                                <Form.Group as={Col} md="1"></Form.Group>
                                <Button id = "backupButton" type="submit" variant="primary" onClick = {this.controlBackup}>Realizar backup</Button>
                            </Form.Row>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <h6 style={{ textAlign: "left", marginTop: "15px", marginLeft: "15px" }}>
                        Restaurar backup
                    </h6>
                </Row>
                <Row>
                    <Col>
                        <Form>
                            <Form.Row>
                                <Form.Group as={Col} md="4">
                                    <div noValidate autoComplete="off">
                                        <TextField
                                            fullWidth={true}
                                            label="Diretorio"
                                            variant="outlined"
                                            size="small"
                                            value={this.state.directoryRecover}
                                            onChange={this.handleChangeDirectoryRecover}
                                            required
                                            type="text"
                                            helperText="Digite o diretório onde o Backup está salvo"
                                        />
                                    </div>
                                </Form.Group>
                                <Form.Group as={Col} md="1"></Form.Group>
                                <Button id = "recoverButton"  variant="primary" onClick = {this.controlRecoverBackup} >Restaurar backup</Button>
                            </Form.Row>
                        </Form>
                    </Col>
                </Row>
                <br />
            </Container>
        )
    }
}