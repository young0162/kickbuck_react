import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Category extends Component {
  render() {
    return (
      <div className="category_bar">
          <ul>
              <NavLink exact to='/mylist'>
                  <li>나의 버킷리스트</li>
              </NavLink>
              <NavLink exact to='/ourlist'>
                  <li>우리의 버킷리스트</li>
              </NavLink>
              <NavLink exact to='/standby'>
                  <li>우리의 버킷리스트 대기중</li>
              </NavLink>
              <NavLink exact to='/offlist'>
                  <li>오프 버킷리스트</li>
              </NavLink>
              <NavLink exact to='/empathize'>
                  <li>공감한 버킷리스트</li>
              </NavLink>
          </ul>
      </div>
    );
  }
}
