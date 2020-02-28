import React from 'react'
import './style.css';
import Calendar from './calendar/calendar'
import LateralBar from './LateralBar/lateral_bar';
import NavBar from '../components/NavBar/NavBar'
import api from "../../services/api"


export default class School extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            idSchool: ''
        }
    }
    async componentDidMount(){
        var dadosEscola= api.post("/retornaDadosEscola",this.idSchool)
        console.log((await dadosEscola).data)
    }
    render() {
        return (
            <div id='school'>
                <NavBar/>
                <div id='contentSchool'>
                    <div id='leftSchool'>
                        <LateralBar/>
                    </div>
                    <div id='rightSchool'>
                    
                        <Calendar/>
                    
                    </div>
                </div>
            </div>
        )
    }
}

// Surfaces ->paper