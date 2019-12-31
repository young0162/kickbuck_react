import React, { Component } from 'react';
import QnaCommentItem from './QnaCommetitem';
import axios from 'axios';
import Button from '@material-ui/core/Button';

class QnaComment extends Component {

    constructor(history){
        super();

        this.history=history;

        this.state={
            qnaCommentData: [],
            num:'',
            user_name: '',
            comment: ''
        }

        this.onKeyChange =  this.onKeyChange.bind(this);

    }

    onKeyChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value,
            num: this.props.qnanum,
            user_name: localStorage.state
        });        
        console.log(this.state);
    }
        
   

    onSubmit=(e)=>{
        e.preventDefault();

        axios.post(
            "http://localhost:9000/controller/qnacomment/commentwrite",
            {
                num: this.state.num,
                user_name: this.state.user_name,
                comment: this.state.comment
            }
        )
            .then((responseData)=>{
                // 추가를 한 후에 필요한 코드    
                // 코멘트 리스트 다시 호출
                this.qnaCommentList();

                // 코멘트 입력란 지우기
                this.setState({
                    comment:''
                });                
                
            })
            .catch((error)=>{
                console.log("add error");
            });
               
    }

    // 목록을 가져올 함수
    qnaCommentList=()=>{
        var url="http://localhost:9000/controller/qnacomment/list?num="+this.props.qnanum;
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
                <table className="qnaboard board" style={{width: '1200px'}}>
                    
                        {
                            this.state.qnaCommentData.map((row,idx)=>(
                                <QnaCommentItem row={row} idx={idx} key={row.comment_num} onList={this.qnaCommentList}/>                                
                            ))
                        }
                    
                </table>
                <hr/>
                <br/><br/>
                <form onSubmit={this.onSubmit}>
                    <table className="board qnaboard write qnaboardwrite">
                        <tbody>
                            <tr>
                                <th style={{width:'150px', height: '60px'}}>
                                    {localStorage.state}
                                </th>
                                <td>
                                    <input type="text" name="comment" className="input qnacomment_input contentinput" 
                                    style={{width:'700px', height:'50px'}} placeholder="댓글을 입력하세요." value={this.state.comment}
                                    required="required" onChange={this.onKeyChange}/>
                                </td>
                                <td>                                
                                    <Button type="submit" variant="contained" color="primary"
                                     style={{width:'150px', height:'50px', margin: '5px'}}>
                                        댓글 등록
                                    </Button>                                    
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