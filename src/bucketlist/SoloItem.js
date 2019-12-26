import React, { Component } from 'react';
import orora from '../image/main/orora.png';
import { FavoriteBorder, Archive} from '@material-ui/icons';

class SoloItem extends Component {

    detailShow = () => {
        this.props.detailShow();
    }

    render() {
        return (
            <div className="buket_form_box">
                <div className="buket_form" onClick={this.detailShow}>
                    <img src={orora} alt="" />     
                    <div className="buket_content">
                        <p>환상적인 오로라 보러가기</p>
                        <div className="bottom_but">
                            <p>
                                <FavoriteBorder/>
                                <span>함께하기 </span>
                            </p>
                            
                            <p>
                                <Archive/>
                                <span>공유하기</span>
                            </p>
                        </div>                        
                    </div>           
                </div>
            </div> 
        );
    }
}

export default SoloItem;