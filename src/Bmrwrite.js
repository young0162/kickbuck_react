import React, { Component } from 'react';
import axios from 'axios';

export default class Bmrwrite extends Component {
     

      constructor(props)
      {
          super(props);
   
          this.state={
              nickname:'',
              contents:''
          }
      }
   
      //입력시 바로 state값 변경하는 이벤트    
      onKeyChange=(e)=>{
          this.setState({
              [e.target.name]:e.target.value
          });
      }
  

      onSubmit=(e)=>{
        e.preventDefault();

        const uploadFile=this.state;
        var url="http://localhost:9002/final/student/save";
        axios.post(url,uploadFile)
        .then((res)=>{
            this.setState({
                msg:res.data,
                name:'',
                java:'',
                spring:'',
                react:''

            })
        })
        .catch((err)=>{
            console.log("submit 오류:"+err.data);
        });
    }


      render(){
          return (
              <div>
        

                <div style={{textAlign:'left'}}>
                        <form className="form-group" onSubmit={this.onSubmit}>
                            <table  className="table table-bordered">
                                
                                <tbody>
                                    <tr>
                                        
                                        <td>
                                            
                                            <input type="text" placeholder="닉네임" className="form-control"
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
                                            value={this.state.contents}
                                            onChange={this.onKeyChange}
                                            name="contents"/>
                                        </td>
                                    </tr>


                                    <tr>
                                        <th width="100" bgcolor="orange"> spring </th>                                
                                        
                                        <td>
                                                <input type="text" className="form-control" value={this.state.name}
                                                onChange={this.onKeyChange}  name="name"/>
                                        </td>
                                        </tr>

                                        <tr>
                                        <th width="100" bgcolor="orange"> spring </th>                                
                                        
                                        <td>
                                                <input type="text" className="form-control" value={this.state.spring}
                                                onChange={this.onKeyChange}    placeholder="spring 점수"  name="spring"/>
                                        </td>
                                        </tr>

                                    <tr>
                                        <td colSpan="2" align="center">
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