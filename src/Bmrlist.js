import React, { Component } from 'react';
import Bmr from './Bmr';
//import Rowitem_bmr from './Rowitem_bmr';
import Bmrwrite from './Bmrwrite';

export default class Bmrlist extends Component {

 
    render(){
        return (
            <div align="left">              
                <Bmrwrite />
                <hr></hr>
                
                
                <br></br>

                <hr></hr>
                <Bmr />
            </div>
        );
    }
}
