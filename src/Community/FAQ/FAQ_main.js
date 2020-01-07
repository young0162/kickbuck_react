import React, { Component, Fragment } from 'react';
import './faq.css';
//import Collapsible from 'react-collapsible';
import {NavLink} from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.css';

export default class FAQ_main extends Component {

  render() {
    
    return (
      <Fragment>

            <div style={{textAlign:'center', paddingLeft:'420px'}}>
                <form className="form-group">
                    <table  className="table table-bordered">
                        
                        <tbody>
                            <tr>
                                
                                <td width="250">
                                    {/* 마우스 갖다대면 메뉴 글씨색이 파랗게 변하는 설정 필요 */}
                                    
                                    <NavLink exact to="/FAQ_signup" className="xmenu">
                                            가입/로그인
                                    </NavLink>
                                </td>
                                <td width="250">
                                    <NavLink exact to="/FAQ_contents" className="xmenu">
                                            서비스/컨텐츠
                                    </NavLink>  
                                </td>
                                <td width="250">
                                    <NavLink exact to="/FAQ_etc" className="xmenu">
                                            기타
                                    </NavLink>
                                </td>
                            </tr>
                            
                        </tbody>
 
                    </table>
                </form>
            </div>

      <br></br>
      </Fragment>
    );
  }
}

