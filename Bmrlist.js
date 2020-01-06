import React, { Component } from 'react';
import Bmr from './Bmr';
import Bmrwrite from './Bmrwrite';

export default class Bmrlist extends Component {
    render(){
        return (
            <div align="left">
                <hr />
                <Bmrwrite />
                <hr />
                <Bmr />
            </div>
        );
    }
}