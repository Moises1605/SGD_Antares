import React from 'react'
import './style.css';
import LateralBar from './lateralBar/LateralBar'
import ScheduleScholarship from "./mySchedule/ScheduleScholarship"
import NavBar from '../register/NavBar'

export default class Scholarship extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            idScholarship: ''
        }
    }

    render() {
        return (
            <div id='scholarship'>
                <NavBar/>
                <div id='contentScholarship'>
                    <div id='leftScholarship'>

                        <LateralBar/>

                    </div>
                    <div id='rightScholarship'>

                        <ScheduleScholarship idScholarship = {this.state.idScholarship}/>
                    
                    </div>
                </div>
            </div>
        )
    }
}
