import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import search_icon from './image/main/search_icon.png';
import menu_but from './image/main/menu_but.png';



export default class Menu extends Component {
  render() {
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
                  <img src={search_icon} alt="" />
                </div>
              </li>
              <li>
                  <NavLink exact to='/MyPage'>
                    <p className="plus"></p>
                  </NavLink>
              </li>
              <li>
                  <NavLink exact to='/SignUp'>
                    <p className="plus"></p>
                  </NavLink>
              </li>
              <li className="menu_but">
                <img src={menu_but} alt="" />
              </li>
          </ul>
        </div>
      </div>
    );
  }
}
