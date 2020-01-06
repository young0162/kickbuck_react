import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import search_icon from './image/main/search_icon.png';
import { Add } from '@material-ui/icons';
import Login from './sign/Login';
import './css/login.css';
import logoimg from './image/main/tick_off_logo2.png';


export default class Menu extends Component {
  constructor() {
      super();

      this.state = {
          active: '-300px',
          opacSide: 0,
          visibiSide: 'hidden',
          visibi: 'hidden',
          classSide: '',
          loginShow: 'none'
      }

      this.onLogin = this.onLogin.bind(this);
      this.onLogOut = this.onLogOut.bind(this);
      this.addActive = this.addActive.bind(this);
  }

  addActive() {
    if (this.state.active === "-300px") {
      this.setState({
        active: "0px",
        opacSide: 1,
        visibiSide: "inherit",
        classSide: "classSide"
      });
    } else {
      this.setState({
        active: "-300px",
        opacSide: 0,
        visibiSide: "hidden",
        classSide: ""
      });
    }
  }

  

  onLogin() {
    if (this.state.loginShow === "none") {
      this.setState({
        loginShow: "block"
      });
    } else {
      this.setState({
        loginShow: "none"
      });
    }
  }

  onLogOut() {
    localStorage.clear();
    window.location.reload();
  }

  render() {
    const sideActive = {
      right: this.state.active
    };

    const sideBg = {
      opacity: this.state.opacSide,
      visibility: this.state.visibiSide
    };

    

    const loginShow = {
      display: this.state.loginShow
    };

    let loginState = null;

    if(localStorage.state)
    {
        loginState = <p className="plus" onClick={this.onLogOut}>로그아웃</p>
    }
    else
    {
        loginState = <p className="plus" onClick={this.onLogin}>로그인ㆍ회원가입</p>
    }

    return (
      <div style={{marginBottom:'100px'}}>
        <div className="menubar">
          <div className="login_bar">
            <p className="login_text">
              {loginState}
              <Login loginShow={loginShow} onLogin={this.onLogin} />
            </p>
          </div>
          <ul>
              <li>
                <p className="logo">
                 <NavLink exact to='/'>
                    <img src={logoimg} alt=""/>
                  </NavLink>
                </p>
              </li>
              <li className="plus_li">
                  <NavLink exact to='/add'>
                    <p className="plus"><Add/></p>
                  </NavLink>
              </li>
              <li>
                <div className={`menu_but ${this.state.classSide}`} onClick={this.addActive}>
                  <span className="one"></span>
                  <span className="two"></span>
                  <span className="thr"></span>
                </div>
              </li>
          </ul>

          


          <div className="bgon" style={sideBg} onClick={this.addActive}></div>
          <div className="sidebox" style={sideActive}>
            <NavLink exact to = '/community'>
              커뮤니티
            </NavLink>
            <NavLink exact to="/community/freeboardlist" onClick={this.addActive}>
              <span>
                자유게시판
              </span>
            </NavLink>
            <NavLink exact to='/community/qnaboard' onClick={this.addActive}>
              <span>
                Q&A 게시판
              </span>
            </NavLink>
            <NavLink exact to='/community/qnaboard' onClick={this.addActive}>
              <span>
                FAQ
              </span>
            <NavLink exact to="/bucket/offbucketdetail">
              offcomment
            </NavLink>
            <NavLink exact to='/bucketlist/togetherboard'>
              함께하기
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}
