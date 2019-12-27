import React from 'react';
//import Collapsible from 'react-collapsible';
import {Collapse} from 'react-collapse';
//import {UnmountClosed} from 'react-collapse';
//import xb from './cirque-du-soleil-o.jpg';

export default class Xa extends React.Component{
    render(){
        return(
            <div>
                <Collapse isOpened={true || false}>
                    <div>111</div>
                </Collapse>


                
                <br></br>
                <Collapse isOpened={true}>
                    <p>Paragraph of text</p>
                    <p>Another paragraph is also OK</p>
                    <p>Images and any other content are ok too</p>
                    {/* <img src={xb} alt="" /> */}
                </Collapse>
                
            </div>
        );
    }
}
