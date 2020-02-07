import React from 'react';
import { Button, Card, Container, Row, Col, Form, Carousel, ButtonToolbar, Tabs, Tab, Sonnet, Table, FormControl, InputGroup, Modal, ListGroup } from 'react-bootstrap';
import './style.css';

export default class Content extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            days:[],
            end: "",
            begin: "",
            day: "",
            calendar: ['08:30-09:30', '09:30-10:30', '10:30-11:30', '14:30-15:30', '15:30-16:30', '16:30-17:30', '18:30-19:30', '19:30-20:30', '20:30-21:30'],
            idScholarship: "",
            workload:'0',
            nameScholarship:''
        }
        this.handleChangeDay = this.handleChangeDay.bind(this);
        this.handleChangeBegin = this.handleChangeBegin.bind(this);
        this.handleChangeEnd = this.handleChangeEnd.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }

    componentDidMount() {
        // carrega as informações do usuario
        // chama a função this.loadInfo
    }

    // Busca as informações do bolsista
    loadInfo() {

    }

    changeColor() {

    }

    update(event){
        //adiciona os horarios no state
        var day = {
            day: this.state.day,
            begin: this.state.begin,
            end: this.state.end,
        }
        let a = day.begin.split(':')[0];
        let b = day.end.split(':')[0];
        let c = b - a;
        let d = c + parseInt(this.state.workload);
        this.setState({workload: d})
        this.setState({day: '',begin:'',end:''})
        this.state.days.push(day);
        console.log('--->' + c)
    }
    

    deleteSchedule(){
        //deleta horarios da lista
    }

    handleSubmit(event){
        //envia os dados para o banco
    }

    handleChangeDay(event) {
        this.setState({ day: event.target.value });
    }

    handleChangeBegin(event) {
        this.setState({ begin: event.target.value });
    }

    handleChangeEnd(event) {
        this.setState({ end: event.target.value });
    }

    getDay(){
    }

    render() {
        return (
            <div id = 'content'>
                <div id = 'headerContent'>
                    
                </div>
                 <div id = 'bodyContent'>
                     <div id = 'contentLeft'>
                        {/* dashboard */}
                    </div>
                    <div id = 'contentRight'>
                         <div id='leftSideContent'>
                            <h1 id = 'titleContent'>Cadastro de horários</h1>
                            <div id='info'>
                                <Card  border="primary" style={{ width: '18rem' }}>
                                    <Card.Header>{`Nome do bolsista: ${this.state.nameScholarship}`}</Card.Header>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>Carga horária: {`${this.state.workload} horas`}</ListGroup.Item>
                                    </ListGroup>
                                </Card>
                            </div>
                            <div id='buttonsCalendar'>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridDay">
                                        <Form.Label>Dia</Form.Label>
                                                <Form.Control as="select" placeholder="Dia" value={this.state.day} onChange={this.handleChangeDay}>
                                                    <option></option>
                                                    <option>Segunda</option>
                                                    <option>Terça</option>
                                                    <option>Quarta</option>
                                                    <option>Quinta</option>
                                                    <option>Sexta</option>
                                                </Form.Control>                                        
                                    </Form.Group>
                                {/* </Form.Row>
                                <Form.Row> */}
                                    <Form.Group as={Col} controlId="formGridBegin">
                                        <Col>
                                        <Form.Label>Incío</Form.Label>
                                        <Form.Control as="select" placeholder="escolha" value={this.state.begin} onChange={this.handleChangeBegin}>
                                                <option></option>
                                                <option>08:30</option>
                                                <option>09:30</option>
                                                <option>10:30</option>
                                                <option>11:30</option>
                                                <option>14:30</option>
                                                <option>15:30</option>
                                                <option>16:30</option>
                                                <option>17:30</option>
                                                <option>18:30</option>
                                                <option>19:30</option>
                                                <option>20:30</option>
                                                <option>21:30</option>
                                            </Form.Control>
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridName">
                                        <Form.Label>Término</Form.Label>
                                        <Form.Control as="select" placeholder="escolha" value={this.state.end} onChange={this.handleChangeEnd}>
                                                <option></option>
                                                <option>08:30</option>
                                                <option>09:30</option>
                                                <option>10:30</option>
                                                <option>11:30</option>
                                                <option>14:30</option>
                                                <option>15:30</option>
                                                <option>16:30</option>
                                                <option>17:30</option>
                                                <option>18:30</option>
                                                <option>19:30</option>
                                                <option>20:30</option>
                                                <option>21:30</option>
                                            </Form.Control>
                                    </Form.Group>
                                    <Col></Col>
                                    <Col></Col>
                                    <Col></Col>
                                    <Button id = 'add' onClick = {this.update} >Adicionar Horário</Button>
                                </Form.Row>
                                
                            </div>
                            
                        </div>
                    
                        <div id='rightSideContent'>
                        <div id = 'Registers'>
                                <Card border="primary" style={{ width: '20rem' }} id = 'listCards'>
                                    <Card.Header>Horários cadastrados</Card.Header>
                                    <ListGroup variant="flush">
                                        {this.state.days.map(item => (
                                            <ListGroup.Item key = {this.state.days.indexOf(item).toString()}>
                                                {`${item.day} : ${item.begin}--${item.end}`}
                                            </ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                </Card>
                            </div>
                            <div id='buttons'>
                                <Button id = 'save'>Salvar horário</Button>
                                <Button id = 'cancel' >Cancelar</Button>
                            </div>
                        </div>  
                    </div> 
                </div> 
            </div >
        )
    }
}


