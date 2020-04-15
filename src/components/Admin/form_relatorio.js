import React, { Component } from "react";
import { Form, Container, Col, Button } from "react-bootstrap";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import api from "../../services/api";
import DatePicker, { registerLocale } from "react-datepicker";
import pt from "date-fns/locale/pt"; // the locale you want
import "react-datepicker/dist/react-datepicker.css";
registerLocale("pt", pt);

function teste1(rota) {
  window.open('https://sgd-api.herokuapp.com/makeReport/'+ rota, '_blank');
}

export default class NovoRelatorio extends Component {
  constructor() {
    super();
    this.state = {
      startDate: "",
      endDate: "",
      agendamentos: false, //agendamentos realizados (noturno e diurno)
      bolsistas: false, //informações de bolsistas
      escolas: false, //informações de escolas
      funcionarios: false, //informações de funcionários
      visitantes: false, //informações sobre visitantes
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.checked });
  };

  handleChangeStartDate = (date) => {
    this.setState({ startDate: date });
  };

  handleChangeEndDate = (date) => {
    this.setState({ endDate: date });
  };

  async handleSubmit(event) {
    var rota = ''+'report.pdf?diaInicio='+this.state.startDate.getDate()+
                '&mesInicio='+(this.state.startDate.getMonth()+1)+
                '&anoInicio='+this.state.startDate.getFullYear()+
                '&diaFim='+this.state.endDate.getDate()+
                '&mesFim='+(this.state.endDate.getMonth()+1)+
                '&anoFim='+this.state.endDate.getFullYear();
    if(this.state.escolas)
      rota = rota + '&Escolas';
    if(this.state.funcionarios)
      rota = rota + '&Funcionarios';
    if(this.state.visitantes)
      rota = rota + '&Visitas';
    if(this.state.agendamentos)
      rota = rota + '&Agendamentos';
    if(this.state.bolsistas)
      rota = rota + '&Bolsistas';
    teste1(rota);
    this.setState({ show: true });
  }

  disableButton = () => {
    return this.state.startDate === "" ||
      this.state.endDate === "" ||
      (this.state.escolas === false &&
        this.state.funcionarios === false &&
        this.state.visitantes === false &&
        this.state.agendamentos === false &&
        this.state.bolsistas === false)
      ? true
      : false;
  };

  render() {
    return (
      <React.Fragment>
        <Container>
         <Form onSubmit={this.handleSubmit}>
            <Form.Row>
              <Form.Label>
                <h6>Selecione o período a ser analisado.</h6>
              </Form.Label>
            </Form.Row>
            <Form.Row>
              <Col md={6}>
                <DatePicker
                  selected={this.state.startDate}
                  onChange={this.handleChangeStartDate}
                  placeholderText="Data Inicial"
                  locale="pt"
                  dateFormat="dd/MM/yyyy"
                  maxDate={new Date()}
                  minDate={new Date("01/01/2000")}
                />
              </Col>
              <Col md={6}>
                <DatePicker
                  selected={this.state.endDate}
                  onChange={this.handleChangeEndDate}
                  placeholderText="Data Final"
                  locale="pt"
                  dateFormat="dd/MM/yyyy"
                  maxDate={new Date()}
                  minDate={this.state.startDate}
                />
              </Col>
            </Form.Row>
            <br />
            <Form.Row>
              <Form.Label>
                <h6>Selecione as informações do relatório.</h6>
              </Form.Label>
            </Form.Row>
            <Form.Row>
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={this.handleChange}
                    size="small"
                    color="primary"
                    name="agendamentos"
                  />
                }
                label="Agendamentos"
              />
            </Form.Row>
            <Form.Row>
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={this.handleChange}
                    name="bolsistas"
                    size="small"
                    color="primary"
                  />
                }
                label="Bolsistas"
              />
            </Form.Row>
            <Form.Row>
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={this.handleChange}
                    name="escolas"
                    size="small"
                    color="primary"
                  />
                }
                label="Escolas"
              />
            </Form.Row>
            <Form.Row>
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={this.handleChange}
                    name="funcionarios"
                    size="small"
                    color="primary"
                  />
                }
                label="Funcionários"
              />
            </Form.Row>
            <Form.Row>
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={this.handleChange}
                    name="visitantes"
                    size="small"
                    color="primary"
                  />
                }
                label="Visitantes"
              />
            </Form.Row>
            <br />
            <Button
              type="submit"
              disabled={this.disableButton()}
              block
              variant="success"
            >
              Criar Novo Relatório
            </Button>
          </Form>
        </Container>
      </React.Fragment>
    );
  }
}
