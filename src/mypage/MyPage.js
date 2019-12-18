import React, { Component } from 'react';
import './mypage.css'
import myimg from './VS.jpg';

export default class MyPage extends Component {
  render() {
    return (
      <div className="my_page">
        <div className="top_logo">logo</div>
        <div className="top_title">
          <div className="profile_img">
            <img className="my_img" src={myimg} alt="내이미지"></img>
          </div>
          <div className="profile_name">
            <b>그나</b>님의 마이페이지
          </div>
          <div className="list">
            <ul className="list_all">
              <li>
                <a>나의 버킷리스트</a>
              </li>
              <li>
                <a>우리의 버킷리스트</a>
              </li>
              <li>
                <a>우리의 버킷리스트 대기</a>
              </li>
              <li>
                <a>오프 버킷리스트</a>
              </li>
              <li>
                <a>공감한 버킷리스트</a>
              </li>
              <li>
                <a>내정보</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
