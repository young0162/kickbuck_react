import React, { Component } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';


class QnaBoardWrite extends Component {


    constructor({history}){
        
        super();

        this.history=history;

  

         
    }


    onSubmit=(e)=>{
        e.preventDefault();

        let title = this.refs.title;
        let content = this.refs.content;
    
        console.log(title.value,content.value);
        
        var url="http://localhost:9000/controller/qnaboard/write";
        axios.post(
            url,
            {
                user_name:localStorage.state,
                title:title.value,
                content:content.value
            })
            .then((responseData)=>{
                // 추가를 한 후에 필요한 코드
                // 작성한 글(qnaboarddetail)로 이동
                this.history.push("/community/qnaboard");
                
            })
            .catch((error)=>{
                console.log("add error");
            })
    
 
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
                                <th style={{width:'200px', height:'50px'}}>사용자이름</th>
                                <td>
                                    {localStorage.state}
                                </td>
                            </tr>
                            <tr>
                                <th style={{width:'200px', height:'50px'}}>제    목</th>
                                <td>
                                    <input type="text" ref="title" className="input qnainput titleinput"
                                    style={{width:'800px', height: '50px'}} placeholder="제목을 입력하세요."
                                    required="required"/>
                                </td>
                            </tr>
                            <tr>
                                <th style={{width:'200px', height:'50px'}}>질문내용</th>
                                <td>
                                    <textarea ref="content" className="input qnainput contentinput" 
                                    style={{width:'800px', height:'400px'}} placeholder="질문을 입력하세요."
                                    required="required"/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2" align="right">
                                
                                    <Button type="submit" variant="contained" color="primary" style={{width:'150px', height:'50px', margin: '5px'}}>
                                        질문 등록
                                    </Button>
                                    <Button variant="contained" style={{width:'150px', height:'50px', margin: '5px'}}
                                     onClick={()=>{this.history.push("/community/qnaboard");}}>
                                        취 소
                                    </Button>
                                    
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