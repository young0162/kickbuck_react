import React, { Component } from 'react';


class Toggle extends Component {

    constructor(){
        super()
        this.state={
            yshow:false
        }
    }

    // 아래 메서드는 버튼 누르면 Hide me 글자 사라지는 메서드
    //ytoggle()
    // {
    //     //alert("hi")
    //     this.setState({
    //         yshow:false
    //     })
    // }

    ytoggle()
    {
        this.setState({
            yshow:!this.state.yshow
        })
    }


    onKeyChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }



    render() {
        return (
            <div>
                    <ul>
                        <li className="question" onClick={()=>this.ytoggle()} name="aa" >
                              Q. 이메일 인증이 안 되어서 회원 가입에 실패했어요                                
                           
                            {  this.state.yshow?
                                 <p> 인증메일이 스팸메일함에 들어있지 않은지 확인해주세요 </p>
                            :null
                            }                           
                        </li>
                        <li className="question" onClick={()=>this.ytoggle()} >
                              Q. 로그인에 실패했어요                                
                           
                            {  this.state.yshow?
                                 <p> 인증메일이 스팸메일함에 들어있지 않은지 확인해주세요 </p>
                            :null
                            }                           
                        </li>
                        <li>

                        </li>
                        <li>

                        </li>

                    </ul>

                    
            </div>
        );
    }
}

export default Toggle;