import React from 'react'
import { Button, Card, Container, Row, Col, Form, Carousel, ButtonToolbar, Tabs, Tab, Sonnet, Table, FormControl, InputGroup, Modal } from 'react-bootstrap';
import './style.css';
import { Link, Redirect } from 'react-router-dom'
import api from "../../services/api"
import image4 from './logo.png'
import VisitNight from './visitNight/visitNight';
import ForgetPassword from './forgetPassword/forgetPassword'
import Paper from '@material-ui/core/Paper';



export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            controlEx: false,
            type: '-1',
            idUser: '0',
            redirect: false
        };

        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setControlEx = this.setControlEx.bind(this);

    }
    handleChangeEmail(event) {
        this.setState({ email: event.target.value });
    }
    handleChangePassword(event) {
        this.setState({ password: event.target.value });
    }

     handleSubmit(event) {
        //const response = await api.get();
        //this.setState({type: response.type})
        //Se for um usuário do tipo escola
        if(this.setState.email != " "){
            this.setState({redirect: true})
    
        }
    }
    /*componentDidMount(){
      this.loadTasks();
  } */
    setControlEx(event) {
        this.setState({ controlEx: true })
    }

    render() {
        if(this.state.redirect) {
            if(this.state.email == 'moisesalmeida'){
                return <Redirect to="/escola/:0" />
            }
            //Se for um usuário do tipo Bolsista
            else if(this.state.email == 'robertomaia'){
                return <Redirect to="/bolsista/:0" />
            }
            //Se for um usuário do tipo Funcionário
            else if(this.state.email == 'raulpeixoto'){
                return <Redirect to="/funcionario/:0" />
            }
            //Se for um usuário do tipo administrador 
            else if(this.state.email == 'ricardoporto'){
                return <Redirect to="/administrador/:0"/>
            }
          }
        else{  
        return (<div id='initial'>
            <div >
                <Paper  id = 'form' elevation={4}>
                <img id='image' roundedCircle />
                <h1 id='title'>Login</h1>
                {/*<div id='icon'>*/}
                

                {/*</div>*/}
                    <Form id='info'>
                        <Form.Label>Usuário</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                            </InputGroup.Prepend>

                            <FormControl
                                placeholder="Email"
                                aria-label="Usuário"
                                aria-describedby="basic-addon1"
                                value = {this.state.email}  onChange = {this.handleChangeEmail}
                            />
                        </InputGroup>
                        <Form.Label>Senha</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">#</InputGroup.Text>
                            </InputGroup.Prepend>

                            <FormControl
                                label='Senha'
                                placeholder="Senha"
                                aria-label="Senha"
                                aria-describedby="basic-addon1"
                                type = 'password'
                                value = {this.state.password}  onChange = {this.handleChangePassword}
                            />
                        </InputGroup>

                    </Form>
                    <div >
                        <Button id="entrar" variant="outline-success" onClick = {this.handleSubmit}>
                            Entrar
                            </Button>

                        <Link to = '/cadastro'>
                        <Button id="cadastrar" variant="outline-primary" type="submit">
                            Cadastre-se
                            </Button>
                        </Link>
                    </div>
                    <ForgetPassword/>
                </Paper>
                
            </div>
            
            {/*<div id='leftside'>
                <div id='buttons'>
                    <VisitNight id = 'visit'/>
                    <Button id='exhibition' variant="primary" onClick={this.setControlEx}>Exposições</Button>
                </div>

                <div id='calendar'>
                    <p id='titleCalendar'>Horários disponíveis para visita</p>
                    <Table id='table' responsive striped>
                        <thead>
                            <tr className='linha1'>
                                <th></th>
                                <th>Segunda</th>
                                <th>Terça</th>
                                <th>Quarta</th>
                                <th>Quinta</th>
                                <th>Sexta</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.calendar.map(item => (
                                <tr>
                                    <td className='linha1' key={item.toString()}>{item}</td>
                                    <td>Disponível</td>
                                    <td>          </td>
                                    <td>Disponível</td>
                                    <td>          </td>
                                    <td>Disponível</td>

                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>*/}
        </div >);
        }
    }
}

