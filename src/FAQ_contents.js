import React, { Component, Fragment } from 'react';
import './main.css';
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

        <div style={{textAlign:'center', paddingLeft:'500px',  position:"relative"}}>
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
                     <br/>  이용 방법이 궁금해요                           
                           
                            {  this.state.yashow?
                                 <p className="answer"> 
                                    A. 회원가입 후 로그인을하고 자신이 원하는 버킷리스트를 작성하거나 이미 있는 버킷리스트에
                                    참여하기를 눌러 시작하면됩니다.<br />
                                    작성시 같이하고 싶으면 공개를 선택 혼자하고 싶다면 비공개를 선택할 수 있습니다.
                                </p>
                            :null
                            }                           
                </li>
                <li className="question" onClick={()=>this.ybtoggle()} name="ab">
                    나이 제한은 없나요?                       
                           
                            {  this.state.ybshow?
                                 <p className="answer"> 
                                        A. 나이와 관계없이 누구나 참여할 수 있습니다.
                                  </p>
                            :null
                            }                           
                </li>
                <li className="question" onClick={()=>this.yctoggle()} name="ac">
                        어떤 내용이든 올려도 되나요?         
                           
                            {  this.state.ycshow?
                                 <p className="answer"> 
                                    A. 하고 싶은 일을 자유롭게 올리실 수 있지만 비방/욕설이나 개인정보가 노출되는 내용 등 불법적인 게시물은 허용하지 않습니다. 
                                  </p>
                            :null
                            }                           
                </li>
                <li className="question" onClick={()=>this.ydtoggle()} name="ad">
                    버킷리스트 등록할 때 공개와 비공개는 어떤 차이가 있나요?                          
                           
                            {  this.state.ydshow?
                                 <p className="answer"> 
                                    A. 공개를 선택하면 여러 사람이 구경하고 참여할 수 있습니다. 다른 사람과 같이 하고 싶으면 공개 옵션을 선택하셔야 합니다.
                                 </p>
                            :null
                            }                           
                </li>
                <li className="question" onClick={()=>this.ydtoggle()} name="ae">
                    버킷리스트 등록할 때 위치를 안 적어도 되나요?                          
                           
                            {  this.state.ydshow?
                                 <p className="answer"> 
                                    A. 다른 사람과 하고 싶은 일이 같아도 위치가 다르면 같이 못할 수 있으니 정확하게 적어주시는 것이 바람직합니다.
                                 </p>
                            :null
                            }                           
                </li>
                <li className="question" onClick={()=>this.ydtoggle()} name="ae">
                    버킷리스트 내용을 수정하고 싶어요                         
                           
                            {  this.state.ydshow?
                                 <p className="answer"> 
                                    A. 이미 등록해서 공개된 글이라도 수정하는 것이 가능합니다. 디데이, 장소 등을 수정해서 회원님이
                                    버킷리스트를 완전하게 성취하시기를 바랍니다.
                                 </p>
                            :null
                            }                           
                </li>
            </ul>
                  
      </Fragment>
    );
  }
}