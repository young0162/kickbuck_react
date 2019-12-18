import React, { Component } from 'react';
import orora from '../image/main/orora.png';

class Solo extends Component {
    render() {
        return (
            <div className="buket_form_box">
                <div className="buket_form">
                    <img src={orora} alt="" />     
                    <div className="buket_content">
                        <p>환상적인 오로라 보러가기</p>
                    </div>           
                </div>
            </div>
            
        );
    }
}

export default Solo;