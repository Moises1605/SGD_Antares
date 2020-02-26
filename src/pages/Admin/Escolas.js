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

export default class Escolas extends React.Component {
  constructor() {
    super();
    this.state = {
      rows: [],
      search: ""
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    alert("errad");
  }

  componentDidMount() {
    /*fetch information from the back-end*/
  }

  handleSearch() {
    /*Shows the result of the search*/
  }

  handleChange(event) {
    this.setState({ search: event.target.value });
  }

  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col>
              <h3 style={{ textAlign: "left" }}>Gerir Escolas</h3>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <div style={{ height: "3vh" }}></div>
          </Row>
          <Row>
            <Col>
              <Dropdown>
                <Dropdown.Toggle variant="outline-secondary">
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
                  <Button
                    variant="outline-secondary"
                    onClick={this.handleSearch}
                  >
                    &#128269;
                  </Button>
                </InputGroup.Prepend>
              </InputGroup>
            </Col>
            <Col xs={1}></Col>
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
                <Table hover responsive size="sm">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Nome</th>
                      <th>Telefone</th>
                      <th>Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>a</td>
                      <td>a</td>
                      <td>a</td>
                      <td>a</td>
                    </tr>
                    <tr>
                      <td>a</td>
                      <td>a</td>
                      <td>a</td>
                      <td>a</td>
                    </tr>
                    <tr>
                      <td>a</td>
                      <td>a</td>
                      <td>a</td>
                      <td>a</td>
                    </tr>

                    {this.state.rows}
                  </tbody>
                </Table>
              </div>
            </Col>
            <Col xs={1}></Col>
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
