
import React,{Component} from 'react';
import axios from 'axios';

export default class Writeform extends Component{
    constructor(props){
        super(props);

        this.state={
            name:'', java:0, spring:0, react:0, myphoto:'', msg:'test'
        }
    }

     //입력시 바로 state값 변경하는 이벤트  
    onKeyChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onImageUpload=(e)=>{
        const uploadFile=e.target.files[0];
        const myphoto=e.target.files[0].name; //이미지 파일명
        console.log("이미지 파일명:"+myphoto);
        //state의 myphoto 변경
        this.setState({
            myphoto
        });

        //서버로 이미지 업로드(스프링쪽)
        const stufile=new FormData();
            stufile.append('uploadFile',uploadFile);
            axios({
                method:'post', url:'http://localhost:9002/final/student/upload',
                /* url은 스프링 서버로 연결한 것과 controller 참조해서 정확하게 작성하자 */
                data:stufile,
                headers:{'Content-Type':'multipart/form-data'}
            })

            .then((res)=>{
                console.log(res.data);
            })

            .catch((error)=>{
                console.log("업로드 오류: "+error.data);
            });
    }


    //서브밋 함수
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
        return(
            <div style={{textAlign:'center'}}>
                <form className="form-group" onSubmit={this.onSubmit}>
                    <table className="table table-bordered">
                        <caption><b>  학생 성적 정보 입력 </b></caption>
                        <tbody>
                            <tr>
                                <th width="100" bgcolor="orange"> 이름 </th>                                
                                
                                <td>
                                        <input type="text" className="form-control" value={this.state.name}
                                         onChange={this.onKeyChange}  name="name"/>
                                </td>
                            </tr>


                            <tr>
                                <th width="100" bgcolor="orange"> 사진 </th>                                
                                
                                <td>
                                        <input type="file" className="form-control" onChange={this.onImageUpload}
                                          name="myphoto"/>
                                </td>
                            </tr>    

                            <tr>
                                <th width="100" bgcolor="orange"> Java </th>                                
                                
                                <td>
                                        <input type="text" className="form-control" value={this.state.java}
                                         onChange={this.onKeyChange}    placeholder="Java 점수"  name="java"/>
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
                                <th width="100" bgcolor="orange"> React </th>                                
                                
                                <td>
                                        <input type="text" className="form-control" value={this.state.react}
                                         onChange={this.onKeyChange}    placeholder="react 점수"  name="react"/>
                                </td>
                            </tr>


                            <tr>
                                <td colSpan="2" align="center">
                                    <button type="submit"   className="btn btn-md btn-success">서버에 저장</button>
                                </td>
                            </tr>


                        </tbody>
                    </table>
                </form>
            </div>
        )
    }    
}