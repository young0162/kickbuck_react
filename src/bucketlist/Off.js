import React, { Component } from 'react';
import OffItem from './OffItem';
import Axios from 'axios';

class Off extends Component {

    constructor() {
        super();

        this.state = {
            bucketOffData: []
        }

        this.bucketOffList = this.bucketOffList.bind(this);
    }

    bucketOffList = () => {
        var url = "http:localhost:9000/controller/offselect";

        Axios.post(url)
        .then( (resData) => {
            this.setState({
                bucketOffData: resData.data
            })
        })
        .catch( (error) => {
            console.log("off error" + error.data);
        })

    }

    componentDidMount() {
        this.bucketOffList();
    }

    render() {
        return (
            <div>
                {
                    this.state.bucketOffData.map( (idx) => (
                        <OffItem idx={idx} key={idx.num} />
                    ))
                }
            </div>
        );
    }
}

export default Off;