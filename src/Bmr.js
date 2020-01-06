import React, { Component } from 'react';
import axios from 'axios';
import Rowitem from './Rowitem_bmr';

export default class Bmr extends Component {
    constructor(props) {
        super(props);

        this.state={
            bmrList: [],
        }
    }

    componentWillMount() {
        this.list();
    }

    list=()=>{
        const url="http://localhost:9000/controller/bmr/list";
        axios.get(url)
            .then((res)=>{
                this.setState({
                    bmrList: res.data
                });
            })
            .catch((err)=>{
                console.log("list error:"+err.data);
            });
    }

    render(){
        return (
            <div style={{textAlign:'center', marginLeft:'15px'}}>
                <table className="table table bordered">
                    <thead>
                        <tr style={{background:'lightgray'}}>
                            <th width="50">번호</th>
                            <th width="100">닉네임</th>
                            <th width="500">내용</th>
                            <th width="220">시간</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.bmrList.map((row, idx)=>(
                        <Rowitem idx={ idx } key={ idx } row={ row }/>  
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}