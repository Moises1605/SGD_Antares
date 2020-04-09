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
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import NavigationIcon from "@material-ui/icons/Navigation";
import Divider from "@material-ui/core/Divider";
import SweetAlert from "sweetalert2-react";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import SettingsBackupRestoreIcon from "@material-ui/icons/SettingsBackupRestore";
import GetAppIcon from '@material-ui/icons/GetApp';

export default class InfoSchool extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backups: [/*"moises almeida da Cruz Farias","Lucas almeida da Cruz Farias"*/], //lista de Backups
      backupSelected:{fileName: " "}, //Backup que foi selecionado
      error: false,// Variável de controle para a visualização do modal de erro.
      success: false,// Variável de controle para a visualização do modal de sucesso.
      control: false, 
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
  }

  //Responsável por controlar a visualização do modal de confirmação para deletar um backup
  controlDeleteBackup(nome) {
    this.setState({ controlDeleteBackup: true});
    this.state.backupSelected.fileName = nome;
  }

  //Responsável por chamar a rota que restaura um backup
  recoverBackup(event) {
    api.post("/recoverBackup",this.state);
    event.preventDefault();
  }
  //Responsável por fazer o download do backup escolhido
  downloadBackup(nome){
      var fileName = nome;
      api.get(`/backup/download/`,{params:{fileName:fileName}})
          .then(function(response){
              var blob = new Blob([response.data], {
                type: 'application/sql'
              });
              var url = window.URL.createObjectURL(blob);
              window.open(url);
          })
          .catch(function(error){
            console.log(error);
          })
      
  }

  //Responsável por chamar a rota que realiza um backup
  async controlBackup(event) {
    try{
      const responde = await api.post("/backup");
    }catch(err){
      this.setState({
        error: true,
      });
    }
  }
  //Responsável por chamar a rota que exclui um backup
  deleteBackup(event) {
    console.log(this.state.backupSelected);
    api.delete("/backup",{params:{fileName:this.state.backupSelected.fileName}});
    event.preventDefault();
  }

  async componentDidMount(){
    var response = await api.get("/backup");
    this.setState({backups: response.data.files});
    console.log(response)
  }

  render() {
    return (
      <Container fluid>
        <SweetAlert
          show={this.state.error}
          title="Erro"
          text="Desculpe, não foi possível criar o backup" 
          onConfirm={() =>
            this.setState({ error: false})
          }
        />
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
              Restaurar Backup 
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
              Deletar Backup 
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
          <Col><p>+Depois de excluir ou fazer um backup, recarregue a página</p>{" "}
                <p>+Para ter acesso ao download do backup adicione .sql no arquivo</p>
          </Col>
          <Col>
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
                    <th>Nome</th>
                    <th>Ferramentas</th>
                  </tr>
                </thead>
                <tbody>
                 {this.state.backups.map((b) => (
                    <tr key = {b} name={b}>
                      <td>{b.substring(0,25)}</td>
                      <td>
                        <Button
                          size="sm"
                          onClick={() => this.controlDeleteBackup(b)}
                          variant="danger"
                        >
                          <HighlightOffIcon /> Excluir
                        </Button>{" "}
                        <Button
                          size="sm"
                          onClick={() => this.downloadBackup(b)}
                          variant="success"
                        >
                          <GetAppIcon /> baixar
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
            <Button  type = "submit" variant="primary" block onClick={this.controlBackup}>
              Fazer backup
            </Button>
          </Col>
        </Row>
        <br />
      </Container>
    );
  }
}