import React, { Component } from 'react';
import QnaCommentItem from './QnaCommetitem';
import axios from 'axios';

class QnaComment extends Component {

    constructor(history){
        super();

        this.history=history;

        this.state={
            qnaCommentData: [],
            num:'',
            nickname: '',
            comment: ''
        }

    }

    onKeyChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value,
            num: this.props.qnanum
        });

        
        
        console.log(this.state);
    }
        
   

    onSubmit=(e)=>{
        e.preventDefault();

        axios.post(
            "http://localhost:9000/controller/qnacomment/commentwrite",
            {
                num: this.state.num,
                nickname: this.state.nickname,
                comment: this.state.comment
            }
        )
            .then((responseData)=>{
                // 추가를 한 후에 필요한 코드
                
                // 코멘트 입력란 지우기
                this.setState({
                    nickname:'',
                    comment:''
                });
                
                // 코멘트 리스트 다시 호출
                this.qnaCommentList();
                
                
            })
            .catch((error)=>{
                console.log("add error");
            });
               
    }

    // 목록을 가져올 함수
    qnaCommentList=()=>{
        var url="http://localhost:9000/controller//qnacomment/list?num="+this.props.qnanum;
        axios.get(url)
        .then((resData)=>{
            // 스프링 서버로부터 받은 데이타로 qnaData로 수정
            this.setState({
                qnaCommentData: resData.data
            })
        })
        .catch((error)=>{
            console.log("qnaboard list 오류!");
        })
    }
   
    componentDidMount(){
        // 랜더링 직전 스프링으로 목록을 받아온다
        this.qnaCommentList();
    }
    
    render() {
        return (
            <div>

                <hr/>
                <div>
                    <h2> Q&A 댓글 </h2>
                </div>
                <br/>
                <hr/>
                <table className="qnaboard board" style={{width: '1000px'}}>
                    <tbody>
                        {
                            this.state.qnaCommentData.map((row,idx)=>(
                                <QnaCommentItem row={row} idx={idx} key={row.comment_num}/>
                            ))
                        }
                    </tbody>
                </table>
                <hr/>
                <br/><br/>
                <form onSubmit={this.onSubmit}>
                    <table className="board qnaboard write qnaboardwrite">
                        <tbody>
                            <tr>
                                <th>
                                    <input type="text" name="nickname" className="input qnainput titleinput"
                                        style={{width:'150px', height: '100px'}} placeholder="닉네임을 입력하세요."
                                        required="required" onChange={this.onKeyChange}/>
                                </th>
                                <td>
                                    <input type="text" name="comment" className="input qnainput contentinput" 
                                    style={{width:'700px', height:'100px'}} placeholder="댓글을 입력하세요."
                                    required="required" onChange={this.onKeyChange}/>
                                </td>
                                <td>                                
                                    <button type="submit" className="btn btn-md btn-success" style={{width:'150px', height:'100px'}}>댓글 등록</button>                                    
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <br/><br/><br/>
                </form>
            </div>
        );
    }
}

export default QnaComment;