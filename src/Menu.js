import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import search_icon from './image/main/search_icon.png';
import { HighlightOff , Add} from '@material-ui/icons';
import Login from './sign/Login';
import './css/login.css';


export default class Menu extends Component {

  constructor() {
      super();

      this.state = {
          active: '-300px',
          opacSide: 0,
          visibiSide: 'hidden',
          opac: 0,
          visibi: 'hidden',
          classSide: '',
          loginShow: 'none'
      }

      this.onLogin = this.onLogin.bind(this);
      this.onLogOut = this.onLogOut.bind(this);
      this.addActive = this.addActive.bind(this);
      this.goSearch = this.goSearch.bind(this);
  }

  addActive() {
    if(this.state.active === '-300px') {
      this.setState({
        active: '0px',
        opacSide: 1,
        visibiSide: 'inherit',
        classSide: 'classSide'
      })
    }
    else {
      this.setState({
        active: '-300px',
        opacSide: 0,
        visibiSide: 'hidden',
        classSide: ''
      })
    }

  }

  goSearch() {
    if(this.state.visibi === 'hidden') {
      this.setState({
        opac: 1,
        visibi: 'inherit'
      })
    }
    else {
      this.setState({
        opac: 0,
        visibi: 'hidden'
      })
    }
  }

  onLogin() {
    if (this.state.loginShow === 'none'){
      this.setState({
        loginShow: 'block'
      })
    }
    else {
      this.setState({
        loginShow: 'none'
      })
    }
  }

  onLogOut() {
    localStorage.clear();
    window.location.reload();
  }



  render() {

    const sideActive = {
      right: this.state.active
    }

    const sideBg = {
      opacity: this.state.opacSide,
      visibility: this.state.visibiSide
    }

    const searchBg = {
      opacity: this.state.opac,
      visibility: this.state.visibi
    }

    const loginShow = {
      display: this.state.loginShow
    }

    let loginState = null;

    if(localStorage.state)
    {
        loginState = <p className="plus" onClick={this.onLogOut}>로그아웃</p>
    }
    else
    {
        loginState = <p className="plus" onClick={this.onLogin}>로그인</p>
    }

    return (
      <div>
        <div className="menubar">
          <ul>
              <li>
                <p className="logo">
                 <NavLink exact to='/'>
                    홈
                  </NavLink>
                </p>
              </li>
              <li>
                <div className="search_box">
                  <input type="text" />
                  <img src={search_icon} alt="" onClick={this.goSearch} />
                </div>
              </li>
              <li>
                  <NavLink exact to='/add'>
                    <p className="plus"><Add/></p>
                  </NavLink>
              </li>
              <li>
                  {loginState}
                  <Login loginShow={loginShow} onLogin={this.onLogin} />
              </li>
              <li>
                <div className={`menu_but ${this.state.classSide}`} onClick={this.addActive}>
                  <span className="one"></span>
                  <span className="two"></span>
                  <span className="thr"></span>
                </div>
              </li>
          </ul>

          <div className="searchbox" style={searchBg}>
            <p>검색리스트</p>
            <div className="close_but" onClick={this.goSearch}>
              <HighlightOff/>
            </div>
          </div>


          <div className="bgon" style={sideBg}></div>
          <div className="sidebox" style={sideActive}>
            <NavLink exact to = '/community'>
              커뮤니티
            </NavLink>
            <NavLink exact to="/community/freeboardlist">
              자유게시판
            </NavLink>
            <NavLink exact to='/community/qnaboard'>
              Q&A 게시판
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
