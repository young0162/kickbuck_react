import React, { Component } from 'react';
import Solo from './Solo';
import Together from './Together';
import Off from './Off';
import With from './With';

class All extends Component {
    render() {
        return (
            <div>
                <Together/>
                <Solo/>
                <Off/>
                <With/>
            </div>
        );
    }
}

export default All;