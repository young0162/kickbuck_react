import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import search_icon from './image/main/search_icon.png';
import { HighlightOff} from '@material-ui/icons';
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

    return (
      <div>
        <div className="menubar">
          <ul>
              <li>
                <p className="logo">
                 <NavLink exact to='/'>
                    로고
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
                  <NavLink exact to='/MyPage'>
                    <p className="plus"></p>
                  </NavLink>
              </li>
              <li>
                  <p className="plus" onClick={this.onLogin}>로그인</p>
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
            <p>
              side_menu
            </p>
          </div>
        </div>
      </div>
    );
  }
}
