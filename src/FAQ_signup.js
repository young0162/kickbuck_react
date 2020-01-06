import React, { Component, Fragment } from 'react';
import './faq.css';
import {NavLink} from 'react-router-dom';

export default class FAQ_signup extends Component {
    constructor(){
        super()
        this.state={
            yshow:true
        }
    }


    ytoggle()
    {
        this.setState({
            yshow:!this.state.yshow
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
                                    {/* style={{ textDecoration: 'none' }}은 NavLink 밑줄 제거하기 위해 적용
                                        xmenu는 hover
                                    */}
                                    
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

      <br></br>


            <div>
            <ul>
                        <li className="question" onClick={()=>this.ytoggle()} name="aa" >
                              Q. 이메일 인증이 안 되어서 회원 가입에 실패했어요                                
                           
                            {  this.state.yshow?
                                 <p> 인증메일이 스팸메일함에 들어있지 않은지 확인해주세요 </p>
                            :null
                            }                           
                        </li>
                        <li className="question" onClick={()=>this.ytoggle()} name="ab">
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
      </Fragment>
    );
  }
}