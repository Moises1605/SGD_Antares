import React from 'react'
import './style.css';
import LateralBar from './list/List'
import ScheduleScholarship from "./mySchedule/ScheduleScholarship"
import FollowVisit from "./FollowVisit/followVisit"
import NavBar from '../components/NavBar/NavBar'
import Info from "./infoScholarship/infoScholarship"

export default class Scholarship extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            idScholarship: '',
            screens: [
                <ScheduleScholarship idScholarship = "0"/>,
                <FollowVisit />,
                <Info />,
                null
              ],
              active: null
        };
    }

    componentDidMount = screen => {
        screen == null
          ? this.setState({ active: this.state.screens[0] })
          : this.setState({ active: this.state.screens[screen] });
      };

    render() {
        return (
            <div id='scholarship'>
                <NavBar/>
                <div id='contentScholarship'>
                    <div id='leftScholarship'>

                        <LateralBar
                             screens={this.state.screen}
                             onClick={this.componentDidMount}
                        />

                    </div>
                    <div id='rightScholarship'>

                        {this.state.active}
                    
                    </div>
                </div>
            </div>
        )
    }
}
