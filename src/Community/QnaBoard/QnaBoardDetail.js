import React, { Component } from 'react';
import axios from 'axios';
import QnaComment from './QnaComment';
import Button from '@material-ui/core/Button';


  

class QnaBoardDetail extends Component {

    constructor({history,match}){
        
        super();

        this.history=history;

        this.num=match.params.num;

        this.state={
            // 스프링으로부터 dto 데이타를 받을 변수
            selectData:''
        }

        this.onSelect=this.onSelect.bind(this);

        this.onDataDelete=this.onDataDelete.bind(this);

        
    }

    // 글 선택 시 호출되는 함수
    onSelect=()=>{
        var url="http://localhost:9000/controller/qnaboard/select?num="+this.num;

        axios.get(url)
        .then((responseData)=>{
            console.log(responseData.data)

            this.setState({
                selectData:responseData.data
            });

        })
        .catch((error)=>{
            console.log("select one error "+error.data);
        })
    }

    

    componentDidMount=()=>{
        // 랜더링 직전 스프링으로부터 목록을 받아온다
        this.onSelect();
    }


    // 삭제하는 함수
    onDataDelete=(num)=>{
        console.log("list num="+this.state.selectData.num);
        var url="http://localhost:9000/controller/qnaboard/delete?num="+this.state.selectData.num;

        axios.get(url)
        .then((responseData)=>{
            // QnaBoard로 이동
            this.history.push("/community/qnaboard");
        })
        .catch((error)=>{
            console.log("delete error");
        });
    }


    render() {

       

        return (
            <div>
                <hr/>
                <div>
                    <h2> Q&A 글보기 </h2>
                </div>
                <br/><br/>

                <table className="board qnaboard detail qnaboarddetail">
                        <tbody>
                            <tr>
                                <td colSpan="2" width="1000px">
                                    <b style={{fontSize: "1.3em"}}>{this.state.selectData.title}</b>
                                </td>
                            </tr>
                            <tr>
                                <td width="900px">
                                    {this.state.selectData.user_name}
                                </td>
                                <td width="100px">
                                    {this.state.selectData.readcnt}
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2" width="1000px">
                                    {this.state.selectData.daytime}
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2" width="1000px" height="600px">
                                    <pre>{this.state.selectData.content}</pre>
                                </td>
                            </tr>                            
                        </tbody>
                    </table>
                    <div >
                    <Button variant="contained" color="primary" style={{width:'150px', height:'50px', margin: '5px'}} 
                     onClick={()=>{this.history.push("/community/qnaboardwrite");}}>글 쓰 기</Button>
                    <Button variant="contained" color="primary" style={{width:'150px', height:'50px', margin: '5px'}} 
                        onClick={()=>{this.history.push("/community/qnaboardupdate/"+this.state.selectData.num);}}>
                        수    정</Button>
                    <Button variant="contained" color="secondary" style={{width:'150px', height:'50px', margin: '5px'}} 
                                    onClick={this.onDataDelete}>삭    제</Button>
                    <Button variant="contained" color="primary" style={{width:'150px', height:'50px', margin: '5px'}} 
                                    onClick={()=>{this.history.push("/community/qnaboard");}}>목    록</Button>

                    </div>
                

                    <br/><br/><br/>
                <QnaComment qnanum={this.num}/>
            </div>
           
                
            
        );
    }
}

export default QnaBoardDetail;