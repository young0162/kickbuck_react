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
          </ul>
      </div>
    );
  }
}
