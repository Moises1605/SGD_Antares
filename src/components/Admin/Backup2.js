import React from "react";
import {
  Button,
  Col,
  Form,
  Row,
  Modal,
  Table,
  Container,
  Dropdown,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import "./Backup.css";
import { Redirect } from "react-router-dom";
import api from "../../services/api";
import { makeStyles } from "@material-ui/core/styles";
//import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import NavigationIcon from "@material-ui/icons/Navigation";
import Divider from "@material-ui/core/Divider";
import SweetAlert from "sweetalert2-react";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import SettingsBackupRestoreIcon from "@material-ui/icons/SettingsBackupRestore";

export default class InfoSchool extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backups: [
        { id: 1, nome: "A" },
        { id: 2, nome: "B" },
      ], //lista de Backups
      backupSelected: " ", //Backup que foi selecionado
      directoryBackup: "", //Diretório para salvar o backup
      directoryRecover: "", //Diretório do backup que erá ser restaurado
      controlRecover: false, //variável de controle para o modal de confirmação para restauração de um backup
      controlSucess: false, //variável de controle para o modal de sucesso
      controlDeleteBackup: false, //variável de controle para o modal de confirmação para deletar  um backup
    };
    this.recoverBackup = this.recoverBackup.bind(this);
    this.controlRecoverBackup = this.controlRecoverBackup.bind(this);
    this.controlDeleteBackup = this.controlDeleteBackup.bind(this);
    this.deleteBackup = this.deleteBackup.bind(this);
    this.controlBackup = this.controlBackup.bind(this);
  }
  //Responsável por controlar a visualização do modal de confirmação de restauração de backup
  controlRecoverBackup(nome) {
    this.setState({ controlRecover: true, backupSelected: nome });
    //event.preventDefault();
  }

  //Responsável por controlar a visualização do modal de confirmação para deletar um backup
  controlDeleteBackup(nome) {
    this.setState({ controlDeleteBackup: true, backupSelected: nome });
    //event.preventDefault();
  }

  //Responsável por chamar a rota que restaura um backup
  recoverBackup(event) {
    //api.post("/recoverBackup",this.state);
    event.preventDefault();
  }
  //Responsável por chamar a rota que realiza um backup
  controlBackup(event) {
    //api.post("/Backup",this.state);
    event.preventDefault();
  }
  //Responsável por chamar a rota que exclui um backup
  deleteBackup(event) {
    //api.post("/delete",this.state);
    event.preventDefault();
  }

  render() {
    return (
      <Container fluid>
        <Modal
          show={this.state.controlRecover}
          onHide={() => this.setState({ controlRecover: false })}
          aria-labelledby="example-modal-sizes-title-lg"
          id="modal"
        >
          <Modal.Header closeButton id="header">
            <Modal.Title id="example-modal-sizes-title-lg">
              Tem certeza que deseja restaurar esse backup?
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Button variant="outline-success" onClick={this.recoverBackup}>
              Restaurar Backup {this.state.backupSelected}
            </Button>
          </Modal.Body>
        </Modal>
        <Modal
          show={this.state.controlDeleteBackup}
          onHide={() => this.setState({ controlDeleteBackup: false })}
          aria-labelledby="example-modal-sizes-title-lg"
          id="modal"
        >
          <Modal.Header closeButton id="header">
            <Modal.Title id="example-modal-sizes-title-lg">
              Tem certeza que deseja deletar esse backup?
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Button variant="outline-danger" onClick={this.deleteBackup}>
              Deletar Backup {this.state.backupSelected}
            </Button>
          </Modal.Body>
        </Modal>
        <Row>
          <Col>
            <h3 style={{ textAlign: "left", marginTop: "15px" }}>Backup</h3>
          </Col>
        </Row>
        <hr />
        <Row style={{ marginTop: "8px" }}>
          <Col></Col>
          <Col></Col>
          <Col>
            {/* <InputGroup>
                            <FormControl
                                placeholder="Procurar..."
                                value={this.state.search}
                                onChange={this.handleChange}
                            />
                            <InputGroup.Prepend>
                                <Button variant="outline-secondary">&#128269;</Button>
                            </InputGroup.Prepend>
                        </InputGroup> */}
            <TextField
              id="filled-read-only-input"
              label="Backup automático"
              defaultValue="Marcado para 00:00"
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
              size="small"
            />
          </Col>
        </Row>
        <Row>
          <div style={{ height: "3vh" }}></div>
        </Row>
        <Row>
          <Col>
            <div
              style={{
                height: "40vh",
                overflowY: "auto",
              }}
            >
              <Table striped bordered hover responsive size="sm">
                <thead>
                  <tr>
                    {/*<th>#</th>*/}
                    <th>Id</th>
                    <th>Ferramentas</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.backups.map((b) => (
                    //manda o id para a função
                    <tr name={b.id}>
                      {/* <td>
                                                <b></b>
                                            </td> */}
                      <td>{b.id}</td>
                      <td>
                        <Button
                          size="sm"
                          onClick={() => this.controlRecoverBackup(b.nome)}
                          variant="success"
                        >
                          <SettingsBackupRestoreIcon /> Restaurar
                        </Button>{" "}
                        <Button
                          size="sm"
                          onClick={() => this.controlDeleteBackup(b.nome)}
                          variant="danger"
                        >
                          <HighlightOffIcon /> Excluir
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs={10}></Col>
          <Col>
            <Button variant="primary" block onClick={this.controlBackup}>
              Fazer backup
            </Button>
          </Col>
        </Row>
        <br />
      </Container>
    );
  }
}
