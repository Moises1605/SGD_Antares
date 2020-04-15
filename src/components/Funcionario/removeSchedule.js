import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import ptBr from '@fullcalendar/core/locales/pt-br';
import interactionPlugin from '@fullcalendar/interaction';
import { formatDate } from '@fullcalendar/core'
import './Calendar.css';
import { Container, Row, Col, Card, Button, Modal, Tabs } from 'react-bootstrap';
import api from "../../services/api"
import SweetAlert from 'sweetalert2-react';

export default class RemoveSchedule extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            idScholarship: '',
            schedules: this.props.schedules,
            scholarships: this.props.scholarships,
            schedulesAux: [],
            week: ["Seg", "Ter", "Qua", "Qui", "Sex"],
            controlCancel: false,
            showSuccess: false,
        }
        this.removeSchedule = this.removeSchedule.bind(this);
        this.controlDelete = this.controlDelete.bind(this);
    }

    async componentDidMount() {
        const response2 = await api.post('/listarHorarioBolsistas');
        var aux = response2.data.filter((obj) => obj.idBolsista != null);
        this.setState({ schedules: aux });
    }

    handleEditScholarship(scholarship) {
        var id = scholarship.idBolsista;
        this.setState({ idScholarship: id });
        var aux = this.state.schedules.filter((obj) => obj.idBolsista == id);
        this.setState({ schedulesAux: aux });
    }

    controlDelete(){
        this.setState({controlCancel: true});
    }

    removeSchedule() {
        api.post("/removerHorarioBolsista", { idBolsista: this.state.idScholarship });
        this.setState({showSuccess:true});
    }

    render() {
        return (
            <div>
                <SweetAlert
                    show={this.state.showSuccess}
                    title="Sucesso"
                    text="Horário deletado, recarregue a página por favor"
                    onConfirm={() => this.setState({ showSuccess: false, controlCancel: false })}
                />
                <Modal
                    show={this.state.controlCancel}
                    onHide={() => this.setState({ controlCancel: false })}
                    aria-labelledby="example-modal-sizes-title-lg"
                    id="modal"
                >
                    <Modal.Header closeButton id="header">
                        <Modal.Title id="example-modal-sizes-title-lg">
                           Todos os horários serão excluídos,deseja continuar?
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Button
                            variant="outline-danger"
                            id="cancel2"
                            onClick={this.removeSchedule}
                        >
                            Exluir horários
                        </Button>
                    </Modal.Body>
                </Modal>
                <Row>
                    <Col style={{ height: "60vh", overflowY: "auto", }} md='6'>
                        <h5>Bolsistas</h5>
                        {this.state.scholarships.map(type => (
                            <Card key={type.nome} id="itemList">
                                <Card.Body>
                                    {type.nome}{" "}{type.surname}
                                    <div id="eventButton"><Button variant="outline-primary" size='sm' onClick={() => this.handleEditScholarship(type)}>Horários</Button></div>

                                </Card.Body>
                            </Card>
                        ))}
                    </Col>
                    <Col md='4'>
                        <div style={{ height: "50vh", overflowY: "auto" }}>
                            <h5>Horários</h5>
                            {this.state.schedulesAux.map((type, i = 1) => (
                                <Card key={i++} id="itemList">
                                    <Card.Body>
                                        {this.state.week[type.semana - 1]}{" "}{type.inicioPeriodo}{"-"}{type.fimPeriodo}
                                    </Card.Body>
                                </Card>
                            ))}
                        </div>
                        <Button variant="danger" onClick={this.controlDelete}>Excluir Horários</Button>
                    </Col>
                </Row>
            </div>
        )
    }
}