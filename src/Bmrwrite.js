import React, { Component } from 'react';
import axios from 'axios';

export default class Bmrwrite extends Component {
    constructor (props) {
        super(props);

        this.state={
            
            nickname:'',
            content:''
            
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

        const uploadFile= this.state;        
        var url="http://localhost:9000/controller/bmr/save";
        axios.post(url, uploadFile)
            .then((res)=>{
                    this.setState({
                        
                        nickname:'',
                        content:''
                        
                })
            })
            .catch((err)=>{
                console.log("submit 오류:" + err.data);
            });
            window.location.reload(); //새로고침할 필요없이 방명록이 바로 목록에 출력된다
    }

    render(){
        return (
            <div>
                <br></br>
                <span style={{textAlign:'left', marginLeft:'820px'}}> 방명록 작성 </span>
                                   
                        <form className="ydiv" onSubmit={this.onSubmit}>
                            <table  className="table table-bordered">
                                <tbody>
                                    <tr>
                                        <td>
                                            <input type="text" placeholder="닉네임"
                                            style={{width: "150px"}}
                                            value={this.state.nickname}
                                            onChange={this.onKeyChange}
                                            name="nickname"/>
                                        </td>
                                    </tr>
                                    <tr>   
                                        <td>
                                            <input type="text" placeholder="내용" className="form-control"
                                            style={{width: "700px", height:"100px"}}
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
        )
    }
}