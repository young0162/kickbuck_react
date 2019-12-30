import React, { Component } from 'react';
import axios from 'axios';
import QnaBoardItem from './QnaBoardItem';





class QnaBoard extends Component {

    constructor({history}){
        
        super();

        this.state = {

            // 스프링에서 게시판 목록을 받아서 저장할 변수
            qnaData: []

        }

        this.history=history;
    }

    
   

    // 목록을 가져올 함수
    qnaList=()=>{
        var url="http://localhost:9000/controller/qnaboard/list"
        axios.get(url)
        .then((resData)=>{
            // 스프링 서버로부터 받은 데이타로 qnaData로 수정
            this.setState({
                qnaData: resData.data
            })
        })
        .catch((error)=>{
            console.log("qnaboard list 오류!");
        })
    }



    componentDidMount(){
        // 랜더링 직전 스프링으로 목록을 받아온다
        this.qnaList();
    }

    render() {
        return (
            <div>
                <hr/>
                <div>
                    <h2> Q&A 게시판 </h2>
                </div>
                <br/><br/>

                <table className="qnaboard board" style={{width: '1000px'}}>
                    <thead>
                        <tr>
                            <td style={{textAlign: 'center'}}>번호</td>
                            <td style={{textAlign: 'center'}}>제목</td>
                            <td style={{textAlign: 'center'}}>사용자이름</td>
                            <td style={{textAlign: 'center'}}>조회수</td>
                            <td style={{textAlign: 'center'}}>작성일</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.qnaData.map((row,idx)=>(
                                <QnaBoardItem row={row} idx={idx} key={row.num}
                                onSelect={this.onSelect}/>
                            ))
                        }
                    </tbody>
                </table>

                <br/><br/><br/>

                <div>                    
                    <button className="btn btn-md btn-success" style={{width:'150px', height:'50px'}}
                        onClick={()=>{this.history.push("/community/qnaboardwrite");}}>글쓰기</button>                  
                </div>
            </div>
        );
    }
}

export default QnaBoard;