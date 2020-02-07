import React from 'react'
import { Button, Card, Container, Row, Col, Form, Carousel, ButtonToolbar, Tabs, Tab, Sonnet, Table, FormControl, InputGroup, Modal } from 'react-bootstrap';
//import { Link } from 'react-router-dom'
//import api from "../../services/api"
import './style.css';

export default class ConfirmBack extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            control: false,
        };
        this.setControl = this.setControl.bind(this);
    }
    setControl(event) {
        this.setState({ control: true })
    }

    returnBegin(event){
        //retornar para tela inicial
    }

    render(){
        return ( <div id = 'back'>
        
        <Button id='buttonBack' variant="primary" onClick={this.setControl} > Sair</Button>

        <Modal
            size="lg"
            show={this.state.control}
            onHide={() => this.setState({ control: false })}
            aria-labelledby="example-modal-sizes-title-lg"
        >
            <Modal.Header closeButton id = 'header'>
                <Modal.Title id="example-modal-sizes-title-lg">
                    Sair
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Button variant="primary"  onClick={this.returnBegin}>
                    Sair
                </Button>
            </Modal.Body>
        </Modal>

    </div>)
}
}

