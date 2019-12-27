import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


export default class Menu extends Component {
  render() {
    return (
      <div>
          <ul>
              <li>
                  <NavLink exact to='/'>
                    home
                  </NavLink>
              </li>
              <li>
                  <NavLink exact to='/MyPage'>
                    mypage
                  </NavLink>
              </li>
              <li>
                  <NavLink exact to='/SignUp'>
                    sign
                  </NavLink>
              </li>
              <li>
                  <NavLink exact to='/FAQ'>
                    FAQ
                  </NavLink>
              </li>
              <li>
                  <NavLink exact to='/profile'>
                    profile
                  </NavLink>
              </li>
          </ul>
      </div>
    );
  }
}
