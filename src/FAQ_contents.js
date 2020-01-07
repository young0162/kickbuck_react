import React, { Component, Fragment } from 'react';
import './faq.css';
import {NavLink} from 'react-router-dom';


export default class FAQ_contents extends Component {

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

        <div style={{textAlign:'center', paddingLeft:'300px',  position:"relative"}}>
                <form className="yform">
                    <table  className="table table-bordered">                        
                        <tbody>
                            <tr>                                
                                <td width="250" >                                    
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

            <ul>
                <li className="question" onClick={()=>this.yatoggle()} name="aa" >
                    kickbuck이란 무슨뜻인가요?"                                
                           
                            {  this.state.yashow?
                                 <p className="answer"> 
                                    영어 속어 중에 kick the bucket이라는 속어가 있는데 죽다라는 의미를 가지고 있습니다.<br />
                                    이 속어에서 버킷리스트라는 말이 유래해서 쓰게되었습니다.
                                    누구나 죽기전에 해보고싶은것들이 있는데 혼자서는 도전하기가 힘든분들을 위해 만들었습니다. 
                                    </p>
                            :null
                            }                           
                </li>
                <li className="question" onClick={()=>this.ybtoggle()} name="ab">
                    이용 방법이 궁금해요                               
                           
                            {  this.state.ybshow?
                                 <p className="answer"> 
                                    회원가입 후 로그인을하고 자신이 원하는 버킷리스트를 작성or참여하기를 눌러 시작하면됩니다.<br />
                                    작성시 같이하고 싶으면 공개를 선택 혼자하고 싶다면 비공개를 선택할 수 있습니다.
                                  </p>
                            :null
                            }                           
                </li>
                <li className="question" onClick={()=>this.yctoggle()} name="ac">
                    나이 제한은 없나요?                           
                           
                            {  this.state.ycshow?
                                 <p className="answer"> 나이와 관계없이 누구나 참여할 수 있습니다. </p>
                            :null
                            }                           
                </li>
                <li className="question" onClick={()=>this.ydtoggle()} name="ad">
                    디데이가 지난 버킷리스트를 되살리고 싶어요                          
                           
                            {  this.state.ydshow?
                                 <p className="answer"> ~ </p>
                            :null
                            }                           
                </li>
            </ul>                      
      </Fragment>
    );
  }
}