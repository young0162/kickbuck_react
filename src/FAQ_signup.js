import React, { Component, Fragment } from 'react';
import './faq.css';
import Collapsible from 'react-collapsible';
import {NavLink} from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.css';

export default class FAQ_signup extends Component {


  render() {
    
    return (
      <Fragment>

            <div style={{textAlign:'center',  paddingLeft:'30px', paddingRight:'100px', position:"relative"}}>
                <form className="form-group">
                    <table  className="table table-bordered">
                        
                        <tbody>
                            <tr>
                                
                                <td width="250">
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

      <div className="faqwrap">
        <div className="container">
          <div>
          </div>
          <span> &nbsp; FAQ (yarn add react-collapsible 설치 필요)</span>
          <ul>
            
              <li>
                  <Collapsible trigger="Q. 회원 가입에 실패했어요" className="question">
                          <p className="answer">
                          ~
                          </p>
                    </Collapsible>
                    <br></br>
              </li>
              <li>
                  <Collapsible trigger="Q. 로그인에 실패했어요" className="question">
                          <p className="answer">
                          ~
                          </p>
                    </Collapsible>
                    <br></br>
              </li>
              <li>
                  <Collapsible trigger="Q. 이메일 인증에 문제가 있어요" className="question">
                          <p className="answer">
                          ~
                          </p>
                    </Collapsible>
              </li>
              <li>
                  <Collapsible trigger="Q. 이메일말고 다른 본인 인증 수단은 없나요?" className="question">
                          <p className="answer">
                          ~
                          </p>
                    </Collapsible>
              </li>
    
          </ul>
      </div>
      </div>
      </Fragment>
    );
  }
}