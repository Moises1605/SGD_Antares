import React from 'react'
import { Button, Col, Form } from 'react-bootstrap';
import './style.css';
import { Link } from 'react-router-dom'
import api from "../../../services/api"
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
//import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import JumBrotonRegister from '../JumBrotonRegister/jumBrotonRegister'
import TextField from "@material-ui/core/TextField";
import MenuItem from '@material-ui/core/MenuItem';

export default class FormRegister extends React.Component {



    constructor(props) {
        super(props);
        this.state = {
            //third step
            email: '',
            login: '',
            password: '',
            password2: '',
            //Second step
            respName: '',
            respSurname: '',
            schoolType: '',
            scholarity: '',
            //first step
            name: '',
            district: '',
            number: '',
            street: '',
            city: '',
            state: '',
            CNPJ: '',
            phone: '',
            //config
            redirect: false,
            activeStep: 0,
            steps: ['Dados da escola', 'Informações sobre a escola', 'Configuração da conta'],
            controlSucess: false,
            currencies: ["Particular", "Pública Estadual", "Pública Municipal"],
            controlPassword: true
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
        this.handleChangescholarity = this.handleChangescholarity.bind(this);
        this.handleChangeTypeSchool = this.handleChangeTypeSchool.bind(this);
        this.handleChangeLogin = this.handleChangeLogin.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getStepContent = this.getStepContent.bind(this);

        const useStyles = makeStyles(theme => ({
            root: {
                width: '100%',
            },
            backButton: {
                marginRight: theme.spacing(1),
            },
            instructions: {
                marginTop: theme.spacing(1),
                marginBottom: theme.spacing(1),
            },
        }));
    }
    //Funções responsáveis por atuzalizar as informações.
    handleChangeEmail(event) {
        this.setState({ email: event.target.value });
    }

    handleChangePassword(event) {
        if(event.target.value == this.state.password2){
            this.setState({controlPassword:true});
        }
        else{
            this.setState({controlPassword:false});
        }
        this.setState({ password: event.target.value });
    }

    handleChangePassword2(event) {
        if(this.state.password == event.target.value){
            this.setState({controlPassword:true});
        }
        else{
            this.setState({controlPassword:false});
        }
        this.setState({ password2: event.target.value });
    }

    handleChangeLogin(event) {
        this.setState({ login: event.target.value });
    }

    handleChangeSchoolName(event) {
        this.setState({ name: event.target.value });
    }
    handleChangeDistrict(event) {
        this.setState({ district: event.target.value });
    }
    handleChangeNumber(event) {
        this.setState({ number: event.target.value });
    }
    handleChangeStreet(event) {
        this.setState({ street: event.target.value });
    }
    handleChangeCity(event) {
        this.setState({ city: event.target.value });
    }

    handleChangeState(event) {
        this.setState({ state: event.target.value });
    }

    handleChangeCNPJ(event) {
        this.setState({ CNPJ: event.target.value });
    }

    handleChangePhone(event) {
        this.setState({ phone: event.target.value });
    }

    handleChangeDirectorName(event) {
        this.setState({ respName: event.target.value });
    }

    handleChangeDirectorSurname(event) {
        this.setState({ respSurname: event.target.value });
    }

    handleChangeTypeSchool(event) {
        this.setState({ schoolType: event.target.value });
    }

    handleChangescholarity(event) {
        this.setState({ scholarity: event.target.value });
    }

    handleNext = (event) => {
        console.log(this.state.name);
        var temp = this.state.activeStep + 1;
        this.setState({ activeStep: temp })
        event.preventDefault();
    };

    handleBack = () => {
        var temp = this.state.activeStep - 1;
        this.setState({ activeStep: temp })
    }; 

    getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return (
                    <Form onSubmit={this.handleNext}>
                        <Form.Row>
                            <Form.Group as={Col} md="5" controlId="formGridNameSchool">
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
                                        type="text"
                                    />
                                </div>
                            </Form.Group>

                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} md='3'></Form.Group>
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
                                    />
                                </div>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} md='3'></Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} md="3" controlId="formGridCNPJ">
                                <div noValidate autoComplete="off">
                                    <TextField
                                        fullWidth={true}
                                        id="outlined-basic"
                                        label="CNPJ"
                                        variant="outlined"
                                        size="small"
                                        value={this.state.CNPJ}
                                        onChange={this.handleChangeCNPJ}
                                        required
                                        type="number"
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
                                    />
                                </div>
                            </Form.Group>

                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} md='3'></Form.Group>
                        </Form.Row>
                        <Link to='/login'><Button

                            onClick={this.handleBack}
                            variant="primary"
                            id='backButton'
                        >
                            Voltar
                        </Button></Link>
                        <Button variant="primary" type='submit'>
                            {this.state.activeStep === this.state.steps.length - 1 ? 'Cadastrar' : 'Próximo'}
                        </Button>
                    </Form>
                )
            case 1:
                return (
                    <Form onSubmit={this.handleNext}>
                        <Form.Row>
                            <Form.Group as={Col} md='2' controlId="formGridDirectorName">
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
                                    />
                                </div>
                            </Form.Group>
                            <Form.Group as={Col} md='1'></Form.Group>
                            <Form.Group  as={Col} md='2' controlId="formGridDirectorSurname">
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
                                    />
                                </div>
                            </Form.Group>
                            <Form.Group as={Col} md='1'></Form.Group>
                            {/* <Form.Group as={Col} md = "3" controlId="formGridSchoolType">
                                <Form.Label>Escola</Form.Label>
                                <Form.Control required as="select" value={this.state.schoolType} onChange={this.handleChangeTypeSchool}>
                                    <option>Tipo de escola</option>
                                    <option>Particular</option>
                                    <option>Pública Estadual</option>
                                    <option>Pública Municipal</option>
                                </Form.Control>
                            </Form.Group> */}

                            <TextField
                                id="standard-select-currency"
                                size="small"
                                select
                                label="Tipo de escola"
                                value={this.state.schoolType}
                                onChange={this.handleChangeTypeSchool}
                                SelectProps={{
                                    native: true,
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
                            <Form.Group as={Col} md='1'></Form.Group>
                            <TextField
                                id="standard-select-currency"
                                size="small"
                                select
                                label="Grau de escolaridade"
                                value={this.state.scholarity}
                                onChange={this.handleChangescholarity}
                                SelectProps={{
                                    native: true,
                                }}
                                variant="outlined"
                                helperText="Por favor escolha uma opção"
                            >
                                <option value='Ensino infantil'>
                                    Ensino infantil
                                </option>
                                <option value="até Ensino Fundamental">
                                    até Ensino Fundamental
                                </option>
                                <option value="até Ensino Médio">
                                    até Ensino Médio
                                </option>

                            </TextField>
                            {/* <Form.Group as={Col} md="3" controlId="formGridScholarity">
                                <Form.Label>Grau de escolaridade</Form.Label>
                                <Form.Control required as="select" value={this.state.scholarity} onChange={this.handleChangescholarity}>
                                    <option>Escolaridade</option>
                                    <option>Ensino infantil</option>
                                    <option>até Ensino Fundamental</option>
                                    <option>até Ensino Médio</option>
                                </Form.Control>
                            </Form.Group> */}
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} md='3'></Form.Group>
                        </Form.Row>
                        <Button
                            disabled={this.state.activeStep === 0}
                            onClick={this.handleBack}
                            variant="primary"
                            id='backButton'
                        >
                            Voltar
                            </Button>

                        <Button variant="primary" type='submit'>
                            {this.state.activeStep === this.state.steps.length - 1 ? 'Cadastrar' : 'Próximo'}
                        </Button>

                    </Form>
                )
            case 2:
                return (
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Row>
                            <Form.Group as={Col} md='4' controlId="formGridEmail">
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
                            <Form.Group as={Col} md='1'></Form.Group>
                            <Form.Group as={Col} md='3' controlId="formGridLogin">
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
                                    />
                                </div>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} md='3'></Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} md='3' controlId="formGridPassword">
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
                            <Form.Group as={Col} md='1' ></Form.Group>
                            <Form.Group as={Col} md='3' controlId="formGridPassword2">
                                <div noValidate autoComplete="off">
                                    <TextField
                                        fullWidth={true}
                                        error = {!this.state.controlPassword}
                                        id="outlined-basic"
                                        label="Confirme a senha"
                                        variant="outlined"
                                        size="small"
                                        value={this.state.password2}
                                        onChange={this.handleChangePassword2}
                                        required
                                        type="password"
                                        helperText={this.state.controlPassword == true? ' ' : 'As senhas estão diferentes'}
                                    />
                                </div>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} md='3'></Form.Group>
                        </Form.Row>
                        <div>
                            <Button
                                disabled={this.state.activeStep === 0}
                                onClick={this.handleBack}
                                variant="primary"
                                id='backButton'
                            >
                                Voltar
                            </Button>

                            <Button variant="primary" disabled = {!this.state.controlPassword} type='submit'>
                                {this.state.activeStep === this.state.steps.length - 1 ? 'Cadastrar' : 'Próximo'}
                            </Button>
                        </div>
                    </Form>
                )
            default:
                return 'Unknown stepIndex';
        }
    }

    //envia ps dados do formulário para o back-end;
    async handleSubmit(event) {
        this.setState({ controlSucess: true })
        if(this.state.controlPassword){
            alert("Safe")
        }
        else{
            alert('algo de errado não está certo')
        }
        event.preventDefault();
         api.post('/adicionarEscola', this.state)
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
            <div id='root'>
                <h1 id='titleForm'>Cadastro de Escola</h1>
                {this.state.controlSucess === true ? (
                    <div>
                        <JumBrotonRegister />
                    </div>
                ) : (
                        <div >
                            <Stepper id='step' activeStep={this.state.activeStep} alternativeLabel>
                                {this.state.steps.map(label => (
                                    <Step key={label}>
                                        <StepLabel>{label}</StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                            <div id='ses' component={'div'} >
                                {this.getStepContent(this.state.activeStep)}
                            </div>
                        </div>
                    )}
            </div>
        )
    }

}


