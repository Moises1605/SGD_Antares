import React from 'react'
import './style.css';
import FormRegister from './form/form'
import NavBar from './NavBar'


export default class Register extends React.Component {

    render(){
        return(
            <div id = 'contentForm'>
                  <div>   
                    <NavBar/>
                 </div>  
                 <div id = 'leftSideT'>
                      <div id = 'formsT'> 
                         <FormRegister/> 
                    </div> 

                </div>
            </div>
        )
    }
}