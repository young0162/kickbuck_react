import React, { Component } from 'react';
import Axios from 'axios';


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
    }

    // 글 선택 시 호출되는 함수
    onSelect=()=>{
        var url="http://localhost:8080/controller/qnaboard/select?num="+this.num;

        Axios.get(url)
        .then((responseData)=>{
            console.log(responseData.data)

            this.setState({
                selectData:responseData.data
            });
        })
        .catch((error)=>{
            console.log("select one error"+error.data);
        })
    }

    componentWillMount=()=>{
        // 랜더링 직전 스프링으로부터 목록을 받아온다
        this.onSelect();
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
                                <td colspan="2" width="1000px">
                                    <b style={{fontSize: "1.3em"}}>{this.state.selectData.title}</b>
                                </td>
                            </tr>
                            <tr>
                                <td width="900px">
                                    {this.state.selectData.nickname}
                                </td>
                                <td width="100px">
                                    {this.state.selectData.readcnt}
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2" width="1000px">
                                    {this.state.selectData.daytime}
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2" width="1000px" height="600px">
                                    <pre>{this.state.selectData.content}</pre>
                                </td>
                            </tr>                            
                        </tbody>
                    </table>


                <button type="button" className="btn btn-md btn-success" style={{width:'150px', height:'50px'}}
                                 onClick={()=>{this.history.push("/community/qnaboard");}}>목록으로</button>
            </div>
        );
    }
}

export default QnaBoardDetail;