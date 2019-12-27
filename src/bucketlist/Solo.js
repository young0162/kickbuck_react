import React, { Component } from 'react';
import SoloItem from './SoloItem';
import CardDetail from '../CardDetail';
import Axios from 'axios';

class Solo extends Component {

    constructor() {
        super();

        this.state = {
            show: false,      

            bucketData: []
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

    bucketList = () => {
        var url = "http://localhost:9000/controller/allselect";
        Axios.get(url)
        .then( (resData) => {
            this.setState({
                bucketData: resData.data
            })
        })
        .catch( (error) => {
            console.log("list 오류" + error)
        })

        
    }

    componentWillMount() {
        this.bucketList();
    }

    render() {

        let box;

        if(this.state.show) {
            box = <CardDetail detailHide={this.detailHide} />
        }

        return (
            <div>
                {
                    this.state.bucketData.map( (idx) => (
                        <SoloItem detailShow={this.detailShow} idx={idx} key={idx.num} />        
                    ))
                }
                {box}
            </div>
        );
    }
}

export default Solo;