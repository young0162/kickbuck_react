import React, { Component } from 'react';
import SoloItem from './SoloItem';
import CardDetail from '../CardDetail';

class Solo extends Component {

    constructor() {
        super();

        this.state = {
            show: false,      
        }

        this.detailShow = this.detailShow.bind(this);
        this.detailHide = this.detailHide.bind(this);
    }
    

    detailShow = () => {
        this.setState({
            show : true
        })
    }

    detailHide = () => {
        this.setState({
            show : false
        })
    }

    render() {

        let box;

        if(this.state.show) {
            box = <CardDetail detailHide={this.detailHide} />
        }

        return (
            <div>
                <SoloItem detailShow={this.detailShow} />
                {box}
            </div>
        );
    }
}

export default Solo;