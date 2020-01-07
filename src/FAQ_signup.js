import React, { Component, Fragment } from 'react';
import './main.css';
import './faq.css';
import {NavLink} from 'react-router-dom';

export default class FAQ_signup extends Component {
    // constructor(){
    //     super()
    //     this.state={
    //         yshow:true
    //     }
    // }

    state={ yashow:false, ybshow:false, ycshow:false, ydshow:false}

    yatoggle()
    {
        this.setState({
            yashow:!this.state.yashow
        })
    }

    ybtoggle()
    {
        this.setState({
            ybshow:!this.state.ybshow
        })
    }

    yctoggle()
    {
        this.setState({
            ycshow:!this.state.ycshow
        })
    }

    ydtoggle()
    {
        this.setState({
            ydshow:!this.state.ydshow
        })
    }



  render() {
    
    return (
      <Fragment>
        <div style={{textAlign:'center', paddingLeft:'500px',  position:"relative"}}>
                <form className="yform">
                    <table  className="table table-bordered">                        
                        <tbody>
                            <tr>                                
                                <td width="250" >
                                    {/* style={{ textDecoration: 'none' }}은 NavLink 밑줄 제거하기 위해 적용
                                        xmenu는 hover     */}                                    
                                    <NavLink exact to="/FAQ_signup" style={{ textDecoration: 'none' }}>
                                        <p id="xmenu">가입/로그인</p>
                                    </NavLink>
                                </td>
                                <td width="250">
                                    <NavLink exact to="/FAQ_contents" style={{ textDecoration: 'none' }}>
                                        <p id="xmenu">서비스/컨텐츠</p> 
                                    </NavLink>  
                                </td>
                                <td width="250">
                                    <NavLink exact to="./FAQ_etc" style={{ textDecoration: 'none' }}>
                                        <p id="xmenu">기타</p> 
                                    </NavLink>
                                </td>
                            </tr>                            
                        </tbody> 
                    </table>
                </form>
        </div>
      <br></br>
            <div>
            <ul>
                        <li className="question" onClick={()=>this.yatoggle()} name="aa" >
                                   이메일 인증이 안 되어서 회원 가입에 실패했어요                                
                           
                            {  this.state.yashow?
                                 <p className="answer"> A. 인증메일이 스팸메일함에 들어있지 않은지 확인해주세요 </p>
                            :null
                            }                           
                        </li>
                        <li className="question" onClick={()=>this.ybtoggle()} name="ab">
                            이메일말고 다른 본인 인증 수단은 없나요?                                
                           
                            {  this.state.ybshow?
                                 <p className="answer"> A. ~ </p>
                            :null
                            }                           
                        </li>
                        <li className="question" onClick={()=>this.yctoggle()} name="ac">
                                로그인이 되지 않아요                           
                           
                            {  this.state.ycshow?
                                 <p className="answer"> A. 비밀번호 찾기 진행해보시고 안 되면 관리자에게 문의주세요 </p>
                            :null
                            }                           
                        </li>
                        <li className="question" onClick={()=>this.ydtoggle()} name="ad">
                                    ~                          
                           
                            {  this.state.ydshow?
                                 <p className="answer"> A. ~ </p>
                            :null
                            }                           
                        </li>

            </ul>

                

            </div>
      </Fragment>
    );
  }
}