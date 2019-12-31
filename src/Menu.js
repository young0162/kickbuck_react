import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


export default class Menu extends Component {
  render() {
    return (
      <div>
          <ul>
              <li>
                 <NavLink exact to='/'>
                    홈11
                  </NavLink>
              </li>
              <li>
                  <NavLink exact to='/MyPage'>
                    마이페이지
                  </NavLink>
              </li>
              <li>
                  <NavLink exact to='/SignUp'>
                    회원가입
                  </NavLink>
              </li>
              <li>
                  <NavLink exact to='/FAQ_signup'>
                    FAQ
                  </NavLink>
              </li>

          </ul>
      </div>
    );
  }
}
