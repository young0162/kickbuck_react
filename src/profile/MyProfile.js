import React, { Component } from 'react';
import '../css/profile.css'
import myimg from '../image/VS.jpg'

export default class MyProfile extends Component {
  render() {
    return (
      <div>
        <div className="profile">
          <p>프로필　　　　　<img className="my_img" src={myimg} alt="내이미지" /></p>
          <p>이름　　　　　　<input type="text" className="text"/></p>
          <p>닉네임　　　　　<input type="text" className="text"/></p>
          <p>비밀번호　　　　<input type="text" className="text"/></p>
          <p>비밀번호확인　　<input type="text" className="text"/></p>
          <p>연락처　　　　　<input type="text" className="text"/></p>
          <p>이메일　　　　　<input type="text" className="text"/></p>
        <div>
          <button type="button" className="save">저장하기</button>
        </div>
        </div>
      </div>
    );
  }
}
