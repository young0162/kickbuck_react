import React, { Component, Fragment } from 'react';
import './faq.css';
import {NavLink} from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.css';
//import Collapsible from 'react-collapsible';

export default class FAQ_contents extends Component {

  render() {
 
    return (
      <Fragment>

<div style={{textAlign:'center', paddingLeft:'30px', paddingRight:'100px', position:"relative"}}>
                <form className="form-group">
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
{/* 
      <div className="faqwrap">
        <div className="container">

          <span> &nbsp; FAQ (yarn add react-collapsible 설치 필요)</span>
          <ul>
              <li>
                  <Collapsible trigger="Q. kickbuck이란 무슨뜻인가요?" className="question">
                        <p className="answer">
                      영어 속어 중에 kick the bucket이라는 속어가 있는데 죽다라는 의미를 가지고 있습니다.<br />
                          이 속어에서 버킷리스트라는 말이 유래해서 쓰게되었습니다.
                          누구나 죽기전에 해보고싶은것들이 있는데 혼자서는 도전하기가 힘든분들을 위해 만들었습니다.
                        </p>
                  //</Collapsible>
              </li>

              <li>
                  <Collapsible trigger="Q. 이용하는 방법이 궁금해요" className="question">
                          <p className="answer">
                          회원가입 후 로그인을하고 자신이 원하는 버킷리스트를 작성or참여하기를 눌러 시작하면됩니다.<br />
                          작성시 같이하고 싶으면 공개를 선택 혼자하고 싶다면 비공개를 선택할 수 있습니다.
                          </p>
                    </Collapsible>
              </li>

              <li>
                  <Collapsible trigger="Q. 나이 제한은 없나요?" className="question">
                          <p className="answer">
                          나이와 관계없이 누구나 참여할 수 있습니다.
                          </p>
                    </Collapsible>
              </li>
           
              <li>
                  <Collapsible trigger="Q. 원하는 글을 찾으려면 어떻게 하면 되나요?" className="question">
                          <p className="answer">
                          ~
                          </p>
                    </Collapsible>
              </li>

              <li>
                  <Collapsible trigger="Q. 디데이 날짜를 변경하고 싶어요" className="question">
                          <p className="answer">
                          ~
                          </p>
                    </Collapsible>
              </li>
              <li>
                  <Collapsible trigger="Q. 디데이가 지난 버킷리스트를 되살리고 싶어요" className="question">
                          <p className="answer">
                          ~
                          </p>
                    </Collapsible>
              </li>
          </ul>
      </div>
      </div>  */}
      </Fragment>
    );
  }
}