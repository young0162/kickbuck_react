import React,{Component} from 'react';
//import axios from 'axios';
 
export default class Bmrwrite extends Component
{
    constructor(props)
    {
        super(props);
 
        this.state={
            nickname:'',
            contents:'내용 입력'
        }
    }
 
    //입력시 바로 state값 변경하는 이벤트    
    onKeyChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        });
    }
 
    
    render(){
        return (
            <div style={{textAlign:'center'}}>
                <form className="form-group" onSubmit={this.onSubmit}>
                    <table  className="table table-bordered">
                        <caption><b>학생성적정보입력</b></caption>
                        <tbody>
                            <tr>
                                <th width="100" bgcolor="orange">nickname</th>
                                <td>
                                    <input type="text" className="form-control"
                                    value={this.state.nickname}
                                    onChange={this.onKeyChange}
                                    name="nickname"/>
                                </td>
                            </tr>
                            
                            <tr>
                                <th width="100" bgcolor="orange">contents</th>
                                <td>
                                    <input type="text" className="form-control"
                                    value={this.state.contents}
                                    onChange={this.onKeyChange}
                                    name="contents"/>
                                </td>
                            </tr>
                        
                            <tr>
                                <td colSpan="2" align="center">
                                    <button type="submit"
                                    className="btn btn-md btn-success">서버에저장</button>
 
                                </td>
                            </tr>
                        </tbody>
 
                    </table>
                </form>
            </div>
        )
    }
}