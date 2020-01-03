import React, { Component } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';

class QnaCommentItem extends Component {

    constructor(history){
        super();

        this.history=history;

        this.state={
            qnaCommentData: [],
            group_num:'',
            num:'',
            recomment: '',
            display: "none",
            isvisible: "visible"
        }

        this.onKeyChange =  this.onKeyChange.bind(this);

    }

    onKeyChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value,
            num: this.props.row.num,
            group_num: this.props.row.group_num
        });        
        console.log(this.state);
    }

    visibleEvent=()=>{
        this.setState({
            display: 'table-row',
            isvisible: 'hidden'
        })
    }

    unvisibleEvent=()=>{
        this.setState({
            display: 'none',
            isvisible: 'visible'
        })
    }

    onSubmit=(e)=>{
        e.preventDefault();

        axios.post(
            "http://localhost:9000/controller/qnacomment/recommentwrite",
            {
                group_num: this.state.group_num,
                num: this.state.num,
                user_name: localStorage.state,
                comment: this.state.recomment
            }
        )
            .then((responseData)=>{
                // 추가를 한 후에 필요한 코드    

                // 코멘트 리스트 다시 호출
                this.props.onList();

                // 코멘트 입력란 지우기
                this.setState({            
                    recomment:''
                });

            })
            .catch((error)=>{
                console.log("add error");
            });
               
    }

    // 삭제하는 함수
    onDataDelete=(num)=>{
        
        var url="http://localhost:9000/controller/qnacomment/commentdelete?comment_num="+this.props.row.comment_num;

        axios.get(url)
        .then((responseData)=>{
            // 코멘트 리스트 다시 호출
            this.props.onList();
        })
        .catch((error)=>{
            console.log("delete error");
        });
    }

    

    render() {

        let step = this.props.row.step_num;

        return (
            <tbody >
                <tr height="60px;" >

                    <td style={{textAlign: 'center', width: '60px'}}>
                        {
                            step === 1
                            ? this.props.row.comment_num
                            : ""
                        }
                    </td>

                    <td style={{textAlign: 'center', width: '120px'}}>
                        {this.props.row.user_name}
                    </td>

                    <td style={{textAlign: 'left', width: '680px'}}>
                        {
                            step === 1
                            ? this.props.row.comment
                            :"RE:  "+this.props.row.comment
                        
                        }
                    </td>

                    <td style={{textAlign: 'center', width: '140px'}}>
                        {this.props.row.daytime}
                    </td>   

                    <td>
                        <Button variant="contained" style={{width:'90px', height:'40px', margin: '5px',
                         visibility:this.state.isvisible}} onClick={this.visibleEvent.bind(this)}>
                            대댓글
                        </Button>  
                        <Button variant="contained" color="secondary" style={{width:'20px', height:'40px', margin: '5px',
                         visibility:this.state.isvisible}} onClick={this.onDataDelete}>
                            X
                        </Button>  
                    </td>             
                </tr>
                <tr style={{display:this.state.display}}>
                    <td style={{textAlign: 'center'}}>
                        RE:
                    </td>
                    <td style={{width:'120px', height: '40px', textAlign: 'center'}}>
                        {localStorage.state}
                    </td>
                    <td colSpan="2">
                        <input type="text" name="recomment" className="input qnainput contentinput" 
                         style={{width:'820px', height:'40px'}} placeholder="대댓글을 입력하세요." value={this.state.recomment}
                         required="required" onChange={this.onKeyChange}/>
                    </td>
                    
                    <td>   
                        <form onSubmit={this.onSubmit}>                             
                            <Button type="submit" variant="contained" color="primary" style={{width:'60px', height:'40px', margin: '5px'}}
                             onClick={this.unvisibleEvent.bind(this)}>
                                등록
                            </Button>
                            <Button variant="contained" style={{width:'60px', height:'40px', margin: '5px'}}
                             onClick={this.unvisibleEvent.bind(this)}>
                                취소
                            </Button> 
                        </form>                                   
                    </td>
                    
                </tr> 
            </tbody>
                          
                                                    
                
        );
    }
}

export default QnaCommentItem;