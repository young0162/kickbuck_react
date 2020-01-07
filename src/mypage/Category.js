import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Category extends Component {
  render() {
    return (
      <div className="category_bar">
          <ul>
              <NavLink exact to='/mypage/mylist'>
                  <li>나의 버킷리스트</li>
              </NavLink>
              <NavLink exact to='/mypage/ourlist'>
                  <li>우리의 버킷리스트</li>
              </NavLink>
              <NavLink exact to='/mypage/standby'>
                  <li>대기중인 버킷리스트</li>
              </NavLink>
              <NavLink exact to='/mypage/offlist'>
                  <li>오프 버킷리스트</li>
              </NavLink>
              <NavLink exact to='/mypage/likelist'>
                  <li>공감한 버킷리스트</li>
              </NavLink>
          </ul>
      </div>
    );
  }
}
