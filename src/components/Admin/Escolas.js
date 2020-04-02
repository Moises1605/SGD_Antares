import React from "react";
import {
  Row,
  Col,
  Container,
  Button,
  Dropdown,
  InputGroup,
  FormControl,
  Table
} from "react-bootstrap";
import api from "../../services/api";
//import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

export default class Escolas extends React.Component {
  constructor() {
    super();
    this.state = {
      rows: [],
      search: "",
      escolas: []
    };
  }

  /** REVIEW Método para registrar dados da pesquisa */
  handleChange = event => this.setState({ search: event.target.value });

  async componentDidMount() {
    const e = api.post("/listarEscolas");
    //this.setState({ escolas: (await e).data.map(e => e) });
    console.log(this.state.escolas);
  }

  render() {
    const columns = [
      {
        dataField: "id",
        text: "#",
        sort: true
      },
      {
        dataField: "name",
        text: "Nome",
        sort: true
      },
      {
        dataField: "phone",
        text: "Telefone",
        sort: true
      },
      {
        dataField: "email",
        text: "Email",
        sort: true
      }
    ];
    return (
      <div>
        <Container fluid>
          <Row>
            <Col
              style={{
                paddingTop: "15px"
              }}
            >
              <h3>Gerir Escolas</h3>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <div style={{ height: "3vh" }}></div>
          </Row>
          <Row>
            <Col>
              <Dropdown>
                <Dropdown.Toggle variant="outline-primary">
                  Ordenar Por
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item>Nome</Dropdown.Item>
                  <Dropdown.Item>Telefone</Dropdown.Item>
                  <Dropdown.Item>Email</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col></Col>
            <Col>
              <InputGroup>
                <FormControl
                  placeholder="Procurar..."
                  value={this.state.search}
                  onChange={this.handleChange}
                />
                <InputGroup.Prepend>
                  <Button variant="outline-primary" onClick={this.handleSearch}>
                    &#128269;
                  </Button>
                </InputGroup.Prepend>
              </InputGroup>
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
                  overflowY: "auto"
                }}
              >
                <Table striped bordered hover responsive size="md">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Nome</th>
                      <th>Telefone</th>
                      <th>Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.escolas.map((e, i = 0) => (
                      <tr>
                        <td>
                          <b>{i++}</b>
                        </td>
                        <td>{e.name}</td>
                        <td>{e.phone}</td>
                        <td>{e.email}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
                {/*<BootstrapTable
                  keyField="id"
                  data={this.state.escolas}
                  columns={columns}
                  striped
                  hover
                  condensed
                  noDataIndication="Ainda não há escolas cadastradas"
                  filter={filterFactory()}
                  style={{
                    outline: "none"
                  }}
                />*/}
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div style={{ height: "3vh" }}></div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
