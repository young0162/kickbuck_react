import React, { Component } from 'react';
import '../css/sign.css';
import { NavLink } from 'react-router-dom';
import Axios from 'axios';

class SignUp extends Component {

  MemberInsert = (data) => {
    const {name, email1, email2, password, hp1, hp2, hp3,} = this.refs;

    var url = "http://localhost:9000/controller/signup";
    Axios.post( url, 
      {
        name: name.value,
        email1: email1.value + '@' + email2.value,
        email2: email2.value,
        password: password.value,
        phone : hp1.value + hp2.value + hp3.value
      })
      .then( (resData) => {
        
      })
      .catch( (error) => {
        console.log("insert error");
      })

      console.log(name.value, email1.value, email2.value, password.value, hp1.value, hp2.value, hp3.value);
  }

  render() {
    return (
      <div>
        <div className="sign_box"> 
          <p className="title">이메일 주소 회원가입</p>
          <div className="input_box">
            <div className="mb">
              <input type="text" placeholder="이름" className="pull" ref="name" />
            </div>
            <div className="mb">
              <input type="text" placeholder="이메일" className="pull email" ref="email1" />
              @
              <input type="text" className="pull email2" ref="email2" />
              <select className="pull sel">
                <option>naver.com</option>
                <option>daum.net</option>
                <option>gmail.com</option>
              </select>
              <span className="email_check">
                중복확인
              </span>
            </div>
            <div className="mb">
              <input className="pull mb5" placeholder="비밀번호" type="password" ref="password" /> 
              <input className="pull" placeholder="비밀번호 확인" type="password" /> 
            </div>
            <div className="mb hp_box">
              <select className="pull hp1" ref="hp1">
                <option value="010">010</option>
                <option value="011">011</option>
                <option value="016">016</option>
              </select>
              <input type="text" className="pull hp2" ref="hp2" />
              <input type="text" className="pull hp3" ref="hp3" />
            </div>
            <div>
              <p>이용약관 동의</p>
              <div className="agree">
                이용약관
              </div>
            </div>
            <div>
              <p>개인정보 수집 및 이용 동의</p>
              <div className="agree">
                개인정보 수집 약관
              </div>
            </div>
            <p className="all_agree">위 약관에 전체 동의</p>
            <div className="but_box">
              <NavLink className="ok" exact to='/' onClick={this.MemberInsert.bind(this)}>
                회 원 가 입
              </NavLink>
              <NavLink className="cancel" exact to='/'>
                취소
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
