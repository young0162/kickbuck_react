import React, { Component, Fragment } from 'react';
import './main.css';
import './faq.css';
import {NavLink} from 'react-router-dom';

export default class FAQ_etc extends Component {
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
                    사기를 당한 것 같아 걱정되어요                                
                           
                            {  this.state.yashow?
                                 <p className="answer"> 
                                    A. 가까운 경찰서 또는 사이버 안전국, KISA(인터넷침해대응센터)으로 신고해 주세요.<br/>
                                    <br/> 경찰청 사이버 안전 지킴이 바로가기->  http://www.police.go.kr/www/security/cyber.jsp
                                    <br/>KISA(인터넷침해대응센터) 바로가기-> https://www.krcert.or.kr/consult/phishing.do
                                    
                                    <br/>  개인정보침해신고센터
                                        - ☎ (국번없이) 118 / privacy.kisa.or.kr
                                    <br/> <br/>사기당한 방법 및 수법을 카페에 알려, 제2의 피해자가 나오지 않도록 합니다.  
                                    &nbsp;사기꾼에게서 온 문자나 연락처, 주소 등 인적 사항을 알아낼 수 있는 정보는 보존하고, 많은 사람과 공유합니다.


                                    아이디 도용/해킹 신고하기

티스토리로 피해 사실이 신고되면 도용 피해가 확산되지 않도록 조치해 드립니다.

그러나 도용/해킹 여부 확인 및 수사와 처벌은 피해자가 직접 수사권을 가진 기관에 신고하여 진행되어야 합니다.



사이버 경찰청

- 명예훼손, 협박, 사기, 음화판매 등 사이버 범죄 신고

- ☎ (국번없이) 182 / www.police.go.kr 



경찰청 사이버안전국

- 사이버상의 정보이용 방해, 정보오용, 인터넷을 이용한 범죄 등 모든 사이버 테러 방지

- ☎ (국번없이) 182 / www.ctrc.go.kr



개인정보침해신고센터

- 개인정보보호에 대한 규정 이행 여부 감사 및 신고

- ☎ (국번없이) 118 / privacy.kisa.or.kr
                                </p>
                            :null
                            }    

                </li>
            </ul>
      </Fragment>
    );
  }
}