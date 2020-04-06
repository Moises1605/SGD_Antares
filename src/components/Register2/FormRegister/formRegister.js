import React from "react";
import { Button, Col, Form } from "react-bootstrap";
import "./style.css";
import { Link } from "react-router-dom";
import api from "../../../services/api";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
//import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import JumBrotonRegister from "../JumBrotonRegister/jumBrotonRegister";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

export default class FormRegister extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //third step
      email: "",
      login: "",
      password: "",
      password2: "",
      //Second step
      respName: "",
      respSurname: "",
      schoolType: "",
      respPhone: "",
      //first step
      name: "",
      district: "",
      number: "",
      street: "",
      city: "",
      state: "",
      CNPJ: "",
      phone: "",
      //config
      redirect: false,
      activeStep: 0,
      steps: [
        "Dados da escola",
        "Informações sobre a escola",
        "Configuração da conta"
      ],
      controlSucess: false,
      currencies: ["Particular", "Pública Estadual", "Pública Municipal"],
      controlPassword: true,
      controlCNPJ: true,
      controlLength: true,
      controlPhone: true,
      max: 30
    };

    //Funções responsáveis por atualizar os estados das informções.
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangePassword2 = this.handleChangePassword2.bind(this);
    this.handleChangeSchoolName = this.handleChangeSchoolName.bind(this);
    this.handleChangeDistrict = this.handleChangeDistrict.bind(this);
    this.handleChangeNumber = this.handleChangeNumber.bind(this);
    this.handleChangeStreet = this.handleChangeStreet.bind(this);
    this.handleChangeCity = this.handleChangeCity.bind(this);
    this.handleChangeState = this.handleChangeState.bind(this);
    this.handleChangeCNPJ = this.handleChangeCNPJ.bind(this);
    this.handleChangePhone = this.handleChangePhone.bind(this);
    this.handleChangeDirectorName = this.handleChangeDirectorName.bind(this);
    this.handleChangeDirectorSurname = this.handleChangeDirectorSurname.bind(this);
    this.handleChangeRespPhone = this.handleChangeRespPhone.bind(this);
    this.handleChangeTypeSchool = this.handleChangeTypeSchool.bind(this);
    this.handleChangeLogin = this.handleChangeLogin.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getStepContent = this.getStepContent.bind(this);

    const useStyles = makeStyles(theme => ({
      root: {
        width: "100%"
      },
      backButton: {
        marginRight: theme.spacing(1)
      },
      instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1)
      }
    }));
  }
  //Funções responsáveis por atuzalizar as informações.
  handleChangeEmail(event) {
    this.setState({ email: event.target.value });
  }

  handleChangePassword(event) {
    if (event.target.value == this.state.password2) {
      this.setState({ controlPassword: true });
    } else {
      this.setState({ controlPassword: false });
    }
    this.setState({ password: event.target.value });
  }

  handleChangePassword2(event) {
    if (this.state.password == event.target.value) {
      this.setState({ controlPassword: true });
    } else {
      this.setState({ controlPassword: false });
    }
    this.setState({ password2: event.target.value });
  }

  handleChangeLogin(event) {
    if (event.target.value.length <= this.state.max) {
      this.setState({ controlLength: true });
    } else {
      this.setState({ controlLength: false });
    }
    this.setState({ login: event.target.value });
  }

  handleChangeSchoolName(event) {
    if (event.target.value.length <= this.state.max) {
      this.setState({ controlLength: true });
    } else {
      this.setState({ controlLength: false });
    }
    this.setState({ name: event.target.value });
  }
  handleChangeDistrict(event) {
    if (event.target.value.length <= this.state.max) {
      this.setState({ controlLength: true });
    } else {
      this.setState({ controlLength: false });
    }
    this.setState({ district: event.target.value });
  }
  handleChangeNumber(event) {
    this.setState({ number: event.target.value });
  }
  handleChangeStreet(event) {
    if (event.target.value.length <= this.state.max) {
      this.setState({ controlLength: true });
    } else {
      this.setState({ controlLength: false });
    }
    this.setState({ street: event.target.value });
  }
  handleChangeCity(event) {
    if (event.target.value.length <= this.state.max) {
      this.setState({ controlLength: true });
    } else {
      this.setState({ controlLength: false });
    }
    this.setState({ city: event.target.value });
  }

  handleChangeState(event) {
    if (event.target.value.length <= this.state.max) {
      this.setState({ controlLength: true });
    } else {
      this.setState({ controlLength: false });
    }
    this.setState({ state: event.target.value });
  }

  handleChangeCNPJ(event) {
    if (event.target.value.length > 14 || event.target.value.length < 14) {
      this.setState({ controlCNPJ: false });
    } else {
      this.setState({ controlCNPJ: true });
    }
    this.setState({ CNPJ: event.target.value });
  }

  handleChangePhone(event) {
    if (event.target.value.length > 8 || event.target.value.length < 8) {
      this.setState({ controlPhone: false });
    } else {
      this.setState({ controlPhone: true });
    }
    this.setState({ phone: event.target.value });
  }

  handleChangeDirectorName(event) {
    if (event.target.value.length <= this.state.max) {
      this.setState({ controlLength: true });
    } else {
      this.setState({ controlLength: false });
    }
    this.setState({ respName: event.target.value });
  }

  handleChangeDirectorSurname(event) {
    if (event.target.value.length <= this.state.max) {
      this.setState({ controlLength: true });
    } else {
      this.setState({ controlLength: false });
    }
    this.setState({ respSurname: event.target.value });
  }

  handleChangeTypeSchool(event) {
    this.setState({ schoolType: event.target.value });
  }

  handleChangeRespPhone(event) {
    if (event.target.value.length > 8 || event.target.value.length < 8) {
      this.setState({ controlPhone: false });
    } else {
      this.setState({ controlPhone: true });
    }
    this.setState({ respPhone: event.target.value });
  }
  //Responsável por chamar o próximo step de cadastro.
  handleNext = event => {
    console.log(this.state.name);
    var temp = this.state.activeStep + 1;
    this.setState({ activeStep: temp });
    event.preventDefault();
  };

  //Responsável por chamar o step anterior.
  handleBack = () => {
    var temp = this.state.activeStep - 1;
    this.setState({ activeStep: temp });
  };
  //retorna um dos step do cadastro. 
  //Parâmetro stepIndex índice do step que irá ser retornado.
  getStepContent(stepIndex) { 
    switch (stepIndex) {
      case 0:
        return (
          <Form onSubmit={this.handleNext}>
            <Form.Row>
              <Form.Group
                maxlength="5"
                as={Col}
                md="5"
                controlId="formGridNameSchool"
              >
                <div noValidate autoComplete="off">
                  <TextField
                    fullWidth={true}
                    id="formGridNameSchool"
                    label="Nome da Escola"
                    variant="outlined"
                    size="small"
                    value={this.state.name}
                    onChange={this.handleChangeSchoolName}
                    required
                    type="text"
                    error={this.state.name.length > this.state.max}
                    helperText={
                      this.state.name.length <= this.state.max == true
                        ? " "
                        : "Máximo de 30 Caracteres"
                    }
                  />
                </div>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="formGridStreet">
                <div noValidate autoComplete="off">
                  <TextField
                    fullWidth={true}
                    id="outlined-basic"
                    label="Rua ou Avenida"
                    variant="outlined"
                    size="small"
                    value={this.state.street}
                    onChange={this.handleChangeStreet}
                    required
                    type="text"
                    error={this.state.street.length > this.state.max}
                    helperText={
                      this.state.street.length <= this.state.max == true
                        ? " "
                        : "Máximo de 30 Caracteres"
                    }
                  />
                </div>
              </Form.Group>
              <Form.Group as={Col} md="2" controlId="formGridNumber">
                <div noValidate autoComplete="off">
                  <TextField
                    fullWidth={true}
                    id="outlined-basic"
                    label="Número"
                    variant="outlined"
                    size="small"
                    value={this.state.number}
                    onChange={this.handleChangeNumber}
                    required
                    type="number"
                    max="9999"
                  />
                </div>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="3"></Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="3" controlId="formGridDistrict">
                <div noValidate autoComplete="off">
                  <TextField
                    fullWidth={true}
                    id="outlined-basic"
                    label="Bairro"
                    variant="outlined"
                    size="small"
                    value={this.state.district}
                    onChange={this.handleChangeDistrict}
                    required
                    type="text"
                    maxlength="5"
                    error={this.state.district.length > this.state.max}
                    helperText={
                      this.state.district.length <= this.state.max == true
                        ? " "
                        : "Máximo de 30 Caracteres"
                    }
                  />
                </div>
              </Form.Group>
              <Form.Group as={Col} md="1"></Form.Group>
              <Form.Group as={Col} md="2" controlId="formGridCity">
                <div noValidate autoComplete="off">
                  <TextField
                    fullWidth={true}
                    id="outlined-basic"
                    label="Cidade"
                    variant="outlined"
                    size="small"
                    value={this.state.city}
                    onChange={this.handleChangeCity}
                    required
                    type="text"
                    maxlength="5"
                    error={this.state.city.length > this.state.max}
                    helperText={
                      this.state.city.length <= this.state.max == true
                        ? " "
                        : "Máximo de 30 Caracteres"
                    }
                  />
                </div>
              </Form.Group>
              <Form.Group as={Col} md="1"></Form.Group>
              <Form.Group as={Col} md="2" controlId="formGridState">
                <div noValidate autoComplete="off">
                  <TextField
                    fullWidth={true}
                    id="outlined-basic"
                    label="Estado"
                    variant="outlined"
                    size="small"
                    value={this.state.state}
                    onChange={this.handleChangeState}
                    required
                    type="text"
                    maxlength="5"
                    error={this.state.state.length > this.state.max}
                    helperText={
                      this.state.state.length <= this.state.max == true
                        ? " "
                        : "Máximo de 30 Caracteres"
                    }
                  />
                </div>
              </Form.Group>
            </Form.Row>
            {/* <Form.Row>
              <Form.Group as={Col} md="3"></Form.Group>
            </Form.Row> */}
            <Form.Row>
              <Form.Group as={Col} md="3" controlId="formGridCNPJ">
                <div noValidate autoComplete="off">
                  <TextField
                    error={!this.state.controlCNPJ}
                    fullWidth={true}
                    id="outlined-basic"
                    label="CNPJ"
                    variant="outlined"
                    size="small"
                    value={this.state.CNPJ}
                    onChange={this.handleChangeCNPJ}
                    required
                    type="number"
                    helperText={
                      this.state.controlCNPJ == true ? " " : "CNPJ inválido"
                    }
                  />
                </div>
              </Form.Group>
              <Form.Group as={Col} md="1"></Form.Group>
              <Form.Group as={Col} md="3" controlId="formGridPhone">
                <div noValidate autoComplete="off">
                  <TextField
                    fullWidth={true}
                    id="outlined-basic"
                    label="Telefone"
                    variant="outlined"
                    size="small"
                    value={this.state.phone}
                    onChange={this.handleChangePhone}
                    required
                    type="number"
                    max="99999999"
                    error={!this.state.controlPhone}
                    helperText={
                      this.state.controlPhone == true ? " " : "Telefone válido possui 8 caracteres"
                    }
                  />
                </div>
              </Form.Group>
            </Form.Row>

            <Link to="/login">
              <Button
                onClick={this.handleBack}
                variant="primary"
                id="backButton"
              >
                Voltar
              </Button>
            </Link>
            <Button
              variant="primary"
              disabled={
                !(
                  this.state.controlCNPJ &&
                  this.state.controlLength &&
                  this.state.controlPhone
                )
              }
              type="submit"
            >
              Próximo
            </Button>
          </Form>
        );
      case 1:
        return (
          <Form onSubmit={this.handleNext}>
            <Form.Row>
              <Form.Group as={Col} md="2" controlId="formGridDirectorName">
                <div noValidate autoComplete="off">
                  <TextField
                    fullWidth={true}
                    id="formGridDirectorName"
                    label="Nome do diretor"
                    variant="outlined"
                    size="small"
                    value={this.state.respName}
                    onChange={this.handleChangeDirectorName}
                    required
                    type="text"
                    error={this.state.respName.length > this.state.max}
                    helperText={
                      this.state.respName.length <= this.state.max == true
                        ? " "
                        : "Máximo de 30 Caracteres"
                    }
                  />
                </div>
              </Form.Group>
              <Form.Group as={Col} md="1"></Form.Group>
              <Form.Group as={Col} md="2" controlId="formGridDirectorSurname">
                <div noValidate autoComplete="off">
                  <TextField
                    fullWidth={true}
                    id="outlined-basic"
                    label="Sobrenome"
                    variant="outlined"
                    size="small"
                    value={this.state.respSurname}
                    onChange={this.handleChangeDirectorSurname}
                    required
                    type="text"
                    error={this.state.respSurname.length > this.state.max}
                    helperText={
                      this.state.respSurname.length <= this.state.max == true
                        ? " "
                        : "Máximo de 30 Caracteres"
                    }
                  />
                </div>
              </Form.Group>
              <Form.Group as={Col} md="1"></Form.Group>
              <TextField
                id="standard-select-currency"
                size="small"
                label="Telefone do diretor"
                value={this.state.respPhone}
                onChange={this.handleChangeRespPhone}
                variant="outlined"
                type = "number"
                required
                error={!this.state.controlPhone}
                    helperText={
                      this.state.controlPhone == true ? " " : "Telefone válido possui 8 caracteres"
                    }
              >
              </TextField>
              <Form.Group as={Col} md="1"></Form.Group>
              <TextField
                id="standard-select-currency"
                size="small"
                select
                label="Tipo de escola"
                value={this.state.schoolType}
                onChange={this.handleChangeTypeSchool}
                SelectProps={{
                  native: true
                }}
                variant="outlined"
                helperText="Por favor escolha uma opção"
              >
                {this.state.currencies.map(option => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </TextField>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="3"></Form.Group>
            </Form.Row>
            <Button
              disabled={this.state.activeStep === 0}
              onClick={this.handleBack}
              variant="primary"
              id="backButton"
            >
              Voltar
            </Button>

            <Button disabled={
                !(
                  this.state.controlLength &&
                  this.state.controlPhone
                )
              } variant="primary" type="submit">
              Próximo
            </Button>
          </Form>
        );
      case 2:
        return (
          <Form onSubmit={this.handleSubmit}>
            <Form.Row>
              <Form.Group as={Col} md="4" controlId="formGridEmail">
                <div noValidate autoComplete="off">
                  <TextField
                    fullWidth={true}
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    size="small"
                    value={this.state.email}
                    onChange={this.handleChangeEmail}
                    required
                    type="email"
                  />
                </div>
              </Form.Group>
              <Form.Group as={Col} md="1"></Form.Group>
              <Form.Group as={Col} md="3" controlId="formGridLogin">
                <div noValidate autoComplete="off">
                  <TextField
                    fullWidth={true}
                    id="outlined-basic"
                    label="Nome do Usuário"
                    variant="outlined"
                    size="small"
                    value={this.state.login}
                    onChange={this.handleChangeLogin}
                    required
                    type="text"
                    error={this.state.login.length > this.state.max}
                    helperText={
                      this.state.login.length <= this.state.max == true
                        ? " "
                        : "Máximo de 30 Caracteres"
                    }
                  />
                </div>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="3"></Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="3" controlId="formGridPassword">
                <div noValidate autoComplete="off">
                  <TextField
                    fullWidth={true}
                    id="outlined-basic"
                    label="Senha"
                    variant="outlined"
                    size="small"
                    value={this.state.password}
                    onChange={this.handleChangePassword}
                    required
                    type="password"
                  />
                </div>
              </Form.Group>
              <Form.Group as={Col} md="1"></Form.Group>
              <Form.Group as={Col} md="3" controlId="formGridPassword2">
                <div noValidate autoComplete="off">
                  <TextField
                    fullWidth={true}
                    error={!this.state.controlPassword}
                    id="outlined-basic"
                    label="Confirme a senha"
                    variant="outlined"
                    size="small"
                    value={this.state.password2}
                    onChange={this.handleChangePassword2}
                    required
                    type="password"
                    helperText={
                      this.state.controlPassword === true
                        ? " "
                        : "As senhas estão diferentes"
                    }
                  />
                </div>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="3"></Form.Group>
            </Form.Row>
            <div>
              <Button
                disabled={this.state.activeStep === 0}
                onClick={this.handleBack}
                variant="primary"
                id="backButton"
              >
                Voltar
              </Button>

              <Button
                variant="primary"
                disabled={
                  !(
                    this.state.controlPassword &&
                    this.state.controlLength &&
                    this.state.controlPhone
                  )
                }
                type="submit"
              >
                Cadastrar
              </Button>
            </div>
          </Form>
        );
      default:
        return "Unknown stepIndex";
    }
  }

  //envia ps dados do formulário para o back-end;
  async handleSubmit(event) {
    this.setState({ controlSucess: true });
    api.post("/adicionarEscola", this.state);
    event.preventDefault();
    //     .then(function (response) {
    //         // handle success
    //         this.setState({ redirect: true });
    //         console.log(response);
    //     })
    //     .catch(function (error) {
    //         // handle error
    //         console.log(error);
    // });
  }

  render() {
    return (
      <div id="root">
        <h1 id="titleForm">Cadastro de Escola</h1>
        {this.state.controlSucess === true ? (
          <div>
            <JumBrotonRegister />
          </div>
        ) : (
          <div>
            <Stepper
              id="step"
              activeStep={this.state.activeStep}
              alternativeLabel
            >
              {this.state.steps.map(label => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <div id="ses" component={"div"}>
              {this.getStepContent(this.state.activeStep)}
            </div>
          </div>
        )}
      </div>
    );
  }
}
