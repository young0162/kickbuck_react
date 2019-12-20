import React, { Component } from 'react';
import axios from 'axios';


class QnaBoardWrite extends Component {


    constructor({history}){
        
        super();

        this.history=history;

        this.onDataSave=this.onDataSave.bind(this);
    }

    

 

    // 저장하는 함수
    onDataSave=(data)=>{
        var url="http://localhost:9000/controller/qnaboard/write";
        axios.post(url,{nickname:data.nickname.value,title:data.title.value,
            content:data.content.value})
            .then((responseData)=>{
                // 추가를 한 후에 필요한 코드
                // QnaBoard로 이동
                this.history.push("/community/qnaboarddetail");
                
            })
            .catch((error)=>{
                console.log("add error");
            })
    }

    onSubmit=(e)=>{
        e.preventDefault();

        const {nickname,title,content}=this.refs;
        console.log(nickname.value,title.value,content.value);

        
        this.onDataSave({...this.refs});
 
    }

    render() {
        return (
            <div>
                <hr/>
                <div>
                    <h2> Q&A 글쓰기 </h2>
                </div>
                <br/><br/>
                <form onSubmit={this.onSubmit}>
                    <table className="board qnaboard write qnaboardwrite">
                        <tbody>
                            <tr>
                                <th style={{width:'200px', height:'50px'}}>닉 네 임</th>
                                <td>
                                    <input type="text" ref="nickname" className="input qnainput titleinput"
                                    style={{width:'800px', height: '50px'}} placeholder="닉네임을 입력하세요."/>
                                </td>
                            </tr>
                            <tr>
                                <th style={{width:'200px', height:'50px'}}>제    목</th>
                                <td>
                                    <input type="text" ref="title" className="input qnainput titleinput"
                                    style={{width:'800px', height: '50px'}} placeholder="제목을 입력하세요."/>
                                </td>
                            </tr>
                            <tr>
                                <th style={{width:'200px', height:'50px'}}>질문내용</th>
                                <td>
                                    <textarea ref="content" className="input qnainput contentinput" 
                                    style={{width:'800px', height:'400px'}} placeholder="질문을 입력하세요."/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2" align="right">
                                
                                    <button type="submit" className="btn btn-md btn-success" style={{width:'150px', height:'50px'}}>질문 등록</button>
                                    <button type="button" className="btn btn-md btn-success" style={{width:'150px', height:'50px'}}
                                    onClick={()=>{this.history.push("/community/qnaboard");}}>취 소</button>
                                    
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        );
    }
}

export default QnaBoardWrite;