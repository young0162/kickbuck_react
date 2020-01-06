import React, { Component } from 'react';
import boxbg from '../image/main/box_bg.png';

class WithItem extends Component {

    onClick = () => {
        this.detailShow();
        this.bucketWithSelect();
    }

    detailShow = () => {
        this.props.detailShow();
    }

    bucketWithSelect = () => {
        this.props.bucketWithSelect(this.props.idx.num);
    }


    render() {

        const url = "http://localhost:9000/controller/save/";

        return (
            <div className="buket_form"  num={this.props.idx.num} >
                <img className="bgimg" src={boxbg} alt=""  />
                <img className="mimg" src={url + this.props.idx.imgarr[0]} alt=""    />     
                <div className="black_bg" onClick={this.onClick}></div>
                <div className="buket_content">
                    <p>{this.props.idx.subject}
                    </p>
                </div>           
            </div>
        );
    }
}

export default WithItem;