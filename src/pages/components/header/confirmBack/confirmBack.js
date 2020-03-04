import React from 'react'
import { Button,  Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './style.css';

export default class ConfirmBack extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            control: false,
        };
        this.setControl = this.setControl.bind(this);
    }
    //controle para a visualização do modal
    setControl(event) {
        this.setState({ control: true })
    }

    render(){
        return ( <div id = 'back'>
        
        <Button  onClick = {this.setControl} >Encerrar Seção</Button>
        {/*Modal de confirmação de saida*/}
        <Modal
            size="lg"
            show={this.state.control}
            onHide={() => this.setState({ control: false })}
            aria-labelledby="example-modal-sizes-title-lg"
        >
            <Modal.Header closeButton id = 'header'>
                <Modal.Title id="example-modal-sizes-title-lg">
                    Tem certeza que deseja sair?
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Link to = '/login'>
                <Button  id = 'buttonBack' variant="primary">
                    Sair
                </Button>
            </Link>
            </Modal.Body>
        </Modal>

    </div>)
}
}

