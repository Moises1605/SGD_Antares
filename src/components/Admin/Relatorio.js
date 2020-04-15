import React, { Component } from "react";

import {
  Container,
  Row,
  Col,
  InputGroup,
  Dropdown,
  Button,
  FormControl,
  Table,
  Modal,
} from "react-bootstrap";
import { Alert, AlertTitle } from "@material-ui/lab";
import SearchIcon from "@material-ui/icons/Search";
import NovoRelatorio from "./form_relatorio";
import api from "../../services/api";
import GetAppIcon from '@material-ui/icons/GetApp';

function controlDownload(id) {
  window.open('https://sgd-api.herokuapp.com/RelatorioPorID/'+ id, '_blank');
}


class Relatorio extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
      relatorios: [],
      modalShow: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  

  handleChange(event) {
    this.setState({ search: event.target.value });
  }

  handleSearch() {}

  handleClick = () => {
    this.setState({ modalShow: true });
    console.log(this.state.re);
  };

  handleClose = () => {
    this.setState({ modalShow: false });
  };

  handleRelatorio = (id) => {
    api.post("/abrirRelatorio", id);
  }; 

  async componentDidMount() {
    const r = await api.get("/listarRelatorios");
    this.setState({relatorios: r.data});
    console.log(r);
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
            <h3 style={{ textAlign: "left", marginTop: "15px" }}>Relatórios</h3>
          </Col>
          <Col></Col>
        </Row>
        <hr />
        <Row>
          <Col>
          </Col>
          <Col></Col>
          <Col>
          </Col>
        </Row>
        <Row>
          <div style={{ height: "3vh" }}></div>
        </Row>
        <Row 
          style={{
            height: "40vh",
            overflowY: "auto",
          }}
        >
          <Col md={11}>
              <Table size="md" bordered hover responsive striped>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Funcionário Responsável</th>
                    <th>Data</th>
                    <th>Período</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.relatorios.map((r, i = 0) => (
                    <tr
                      key={r.ID}
                      name={r.ID}
                    >
                      <td>{i++}</td>
                      <td>{r.NomeResponsavel}{" "}{r.surname}</td>
                      <td>{r.Criacao}</td>
                      <td>
                        {"Início: " + r.inicioPeriodo + " Fim: " + r.fimPeriodo}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
          </Col>
          <Col
              md={1}
              style={{
              paddingTop: "45px",
            }}
          >
            {this.state.relatorios.map((f) => (
              <Row style={{ paddingTop: "14px" }}>
                <Button
                  size="sm"
                  variant="outline-success"
                  onClick={() => controlDownload(f.ID)}
                >
                  <GetAppIcon />
                </Button>
              </Row>
            ))}
          </Col>
        </Row>
        <br />
        <Row>
          <Col md={3}></Col>
          <Col md={5}>
            {this.state.relatorios.length === 0 && (
              <Alert
                severity="warning"
                variant="filled"
                style={{
                  width: "auto",
                  height: "auto",
                }}
              >
                <AlertTitle>
                  <b>Ainda não há relatórios no banco de dados</b>
                </AlertTitle>
              </Alert>
            )}
          </Col>
          <Col md={2}></Col>
          <Col md={2}>
            <Button variant="primary" block onClick={this.handleClick}>
              Novo Relatório
            </Button>
          </Col>
        </Row>
        <Modal show={this.state.modalShow} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Criar Novo Relatório</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <NovoRelatorio />
          </Modal.Body>
        </Modal>
      </Container>
    );
  }
}

export default Relatorio;
