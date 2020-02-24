import React from 'react';
import './style.css';
import Scheduling from './scheduling/scheduling'
import Header from '../../components/header/header'

//Tela onde a escola poderá vê os seus agendamentos.
export default class MyScheduling extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            idSchooll:''
        }
    } 
    
    componentDidMount(){
        // carrega o id da escola
    }

    render() {
       return(
        <div id = 'schedulings'>
            <Header/>
            <div id = 'leftSideMy'>
                {/* dashboard */}
            </div>
            <div id = 'rightSideMy'>
                <h1 id = 'titleScheduling'>Meus Agendamentos</h1>
                <Scheduling idSchool = {this.state.idSchooll} /> 
            </div>
        </div>
       )
    }
}