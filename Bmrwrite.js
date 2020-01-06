import React, { Component } from 'react';
import axios from 'axios';

export default class Bmrwrite extends Component {
    constructor (props) {
        super(props);

        this.state={
            nickname:'',
            content:'',
        }
    }

      // 입력 시 바로 state값 변경하는 이벤트    
    onKeyChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit=(e)=>{
        e.preventDefault();

        const uploadFile= JSON.stringify(this.state);
        console.log(uploadFile)
        var url="http://localhost:8080/bmr/save";
        axios.post(url, uploadFile, { headers: {'Content-Type': 'application/json'}})
            .then((res)=>{
                console.log(res.data, res.status);

                this.setState({
                    nickname:'',
                    content:'',
                })
            })
            .catch((err)=>{
                console.log("submit 오류:" + err);
            });
    }

    render(){
        return (
            <div>
                <div align="left">
                        <form className="form-group" onSubmit={this.onSubmit}>
                            <table  className="table table-bordered">
                                <tbody>
                                    <tr>
                                        <td>
                                            <input type="text" placeholder="닉네임"
                                            style={{width: "50px"}}
                                            value={this.state.nickname}
                                            onChange={this.onKeyChange}
                                            name="nickname"/>
                                        </td>
                                    </tr>
                                    <tr>   
                                        <td>
                                            <input type="text" placeholder="내용" className="form-control"
                                            style={{width: "500px"}}
                                            value={this.state.content}
                                            onChange={this.onKeyChange}
                                            name="content"/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2">
                                            <button type="submit"
                                            className="btn btn-md btn-success">전송</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </form>
                    </div>
        </div>
        )
    }
}