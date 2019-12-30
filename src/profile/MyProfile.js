import React, { Component } from 'react';
import '../css/profile.css'
import myimg from '../image/VS.jpg'

export default class MyProfile extends Component {
  render() {
    return (
      <div>
        <div className="profile">
          <tr>
            <td>프로필</td>
            <td><img className="my_img" src={myimg} alt="내이미지" /></td>
          </tr>
          <tr>
            <td>이름</td>
            <td><b>김그나</b></td>
          </tr>
          <tr>
            <td>닉네임</td>
            <td><input type="text" className="text" /></td>
          </tr>
          <tr>
            <td>비밀번호</td>
            <td><input type="password" className="pass1" /></td>
          </tr>
          <tr>
            <td>비밀번호확인</td>
            <td><input type="password" className="pass2" /></td>
          </tr>
          <tr>
            <td>연락처</td>
            <td>
              <select >
                <option value="010">010</option>
                <option value="011">011</option>
                <option value="016">016</option>
                <option value="017">017</option>
                <option value="018">018</option>
                <option value="019">019</option>
              </select>-
              <input className="tel1" type="tel" maxLength="4" />-
              <input className="tel2" type="tel" maxLength="4" />
            </td>
          </tr>
          <tr>
            <td>이메일</td>
            <td>
              <input className="mail1" type="text"/>@
              <input className="mail2" type="text"/>
            </td>
          </tr>
          <div className="save">
            <button type="button">회원정보 수정하기</button>
          </div>
        </div>
      </div>
    );
  }
}
