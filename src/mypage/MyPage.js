import React, { Component } from 'react';
import Category from './Category';
import myimg from '../image/VS.jpg'
import '../css/mypage.css'

export default class MyPage extends Component {
  render() {
    return (
      <div>
        <div className="top_logo">
          <img src="" alt="logo"></img>
        </div>
        <div className="profile_img">
          <img className="my_img" src={myimg} alt="내이미지"></img>
        </div>
        <div className="profile_name">
          <b>그나</b>님의 마이페이지
          </div>
        <Category />
      </div>
    );
  }
}
