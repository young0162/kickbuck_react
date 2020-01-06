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
        const url="http://localhost:9005/bmr/list";
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
            <div style={{textAlign:'center'}}>
                <table className="table table bordered">
                    <caption><b>방명록</b></caption>
                    <thead>
                        <tr style={{background:'orange'}}>
                            <th width="50">번호</th>
                            <th width="50">닉네임</th>
                            <th width="100">내용</th>
                            <th width="50">시간</th>
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