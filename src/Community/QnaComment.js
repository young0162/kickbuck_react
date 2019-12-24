import React, { Component } from 'react';
import axios from 'axios';

class QnaComment extends Component {

  
        
    // 저장하는 함수
    onDataSave=(data)=>{
        var url="http://localhost:9000/controller/qnacomment/commentwrite";
        axios.post(url,{num:data.num.value,nickname:data.nickname.value,comment:data.comment.value})
            .then((responseData)=>{
                // 추가를 한 후에 필요한 코드
                // 코멘트 리스트 다시 호출
                this.list();
                
            })
            .catch((error)=>{
                console.log("add error");
            })
    }

    onSubmit=(e)=>{
        e.preventDefault();

        const num=this.props.qnanum;
        const nickname=this.ref.c_nickname;
        const comment=this.ref.comment;
        
        
        console.log(comment.value);
       
 
    }

 
    componentWillMount(){
        console.log(this.props.qnanum);
    }
   
    
    render() {
        return (
            <div>
                <div>
                    <h2> Q&A 댓글쓰기 </h2>
                </div>
                <br/><br/>
                <form onSubmit={this.onSubmit}>
                    <table className="board qnaboard write qnaboardwrite">
                        <tbody>
                            <tr>
                                <th>
                                    <input type="text" ref="nickname" className="input qnainput titleinput"
                                        style={{width:'200px', height: '200px'}} placeholder="닉네임을 입력하세요."
                                        required="required"/>
                                </th>
                                <td>
                                    <textarea ref="comment" className="input qnainput contentinput" 
                                    style={{width:'800px', height:'200px'}} placeholder="댓글을 입력하세요."
                                    required="required"/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2" align="right">
                                
                                    <button type="submit" className="btn btn-md btn-success" style={{width:'150px', height:'50px'}}>질문 등록</button>
                                    
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        );
    }
}

export default QnaComment;