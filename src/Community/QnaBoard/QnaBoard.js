import React, { Component } from 'react';
import axios from 'axios';
import QnaBoardItem from './QnaBoardItem';
import Button from '@material-ui/core/Button';
import '../Board.css';



class QnaBoard extends Component {

    constructor({history}){
        
        super();

        this.state = {

            // 스프링에서 게시판 목록을 받아서 저장할 변수
            qnaData: [],

            // 페이징 관련 
            start: 0,
            flag: false,
            flag2: false

        };

        this.history=history;
    }

    
   

    // 목록을 가져올 함수
    qnaList=()=>{
        var url="http://localhost:9000/controller/qnaboard/list?start=" + 
        this.state.start;
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


    // 다음 페이지 함수
    onClickNext = () => {
        console.log(this.state.qnaData.length);
        if (this.state.qnaData.length !== 0)
        {
            this.setState((prevState, props) => ({
                start: prevState.start + 15,
                flag: true
            }));
        }
    }

    // 이전 페이지 함수
    onClickPre = () => {
        console.log(this.state.qnaData.length);
        if (this.state.start > 0)
        {
            this.setState((prevState, props) => ({
                start: prevState.start - 15,
                flag2: true
            }));
        }
    }

    componentDidMount(){
        // 랜더링 직전 스프링으로 목록을 받아온다
        this.qnaList();
    }

    componentDidUpdate = (p, s) => {
        if (this.state.flag)
        {
            this.qnaList();
            this.setState({
                flag: false
            });
        }
        else if (this.state.flag2)
        {
            this.qnaList();
            this.setState({
                flag2: false
            })
        }
    }

    render() {
        return (
            <div>
                
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

                <br/>
                <div>
                    <Button variant="contained" onClick={this.onClickPre} style={{margin: '5px'}}>
                         ＜ Pre
                    </Button>
                    <Button variant="contained" onClick={this.onClickNext} style={{margin: '5px'}}>
                         Next ＞
                    </Button>
                </div>
                <br/><br/>

                <div>                    
                    <Button variant="contained" color="primary" style={{width:'150px', height:'50px', margin: '5px'}}
                        onClick={()=>{this.history.push("/community/qnaboardwrite");}}>글쓰기</Button>                  
                </div>
            </div>
        );
    }
}

export default QnaBoard;