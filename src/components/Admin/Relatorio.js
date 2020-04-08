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
  };

  handleClose = () => {
    this.setState({ modalShow: false });
  };

  handleRelatorio = (id) => {
    api.post("/abrirRelatorio", id);
  };

  async componentDidMount() {
    const r = api.post("/listarRelatorios");
    this.setState({ relatorios: (await r).data.map((r) => r) });
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
            <Dropdown>
              <Dropdown.Toggle variant="outline-primary">
                Ordenar Por
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Nome</Dropdown.Item>
                <Dropdown.Item>Data</Dropdown.Item>
                <Dropdown.Item>Nº de Visitantes</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col></Col>
          <Col>
            <InputGroup>
              <FormControl
                placeholder="Procurar..."
                onChange={this.handleChange}
                value={this.state.search}
              />
              <InputGroup.Prepend>
                <Button size="sm" variant="primary" onClick={this.handleSearch}>
                  <SearchIcon size="small" />
                </Button>
              </InputGroup.Prepend>
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <div style={{ height: "3vh" }}></div>
        </Row>
        <Row>
          <Col md={12}>
            <div
              style={{
                height: "40vh",
                overflowY: "auto",
              }}
            >
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
                      key={r.idRelatorio}
                      name={r.idRelatorio}
                      onClick={() => this.handleRelatorio(r.idRelatorio)}
                    >
                      <td>{r.idRelatorio}</td>
                      <td>{r.nomeFuncionario}</td>
                      <td>{r.criadoEm}</td>
                      <td>
                        {"Início: " + r.inicioPeriodo + " Fim: " + r.fimPeriodo}
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
