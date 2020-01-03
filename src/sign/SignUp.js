import React, { Component } from 'react';
import '../css/sign.css';
import { NavLink } from 'react-router-dom';
import Axios from 'axios';

class SignUp extends Component {

  constructor() {
    super();
    
    this.state = {
      emailState: false
    }

  }

  MemberInsert = (data) => {
    const { user_name, email1, email2, password } = this.refs;

    var url = "http://localhost:9000/controller/signup";
    Axios.post( url, 
      {
        user_name: user_name.value,
        email: email1.value + '@' + email2.value,
        password: password.value,
      })
      .then( (resData) => {
        
      })
      .catch( (error) => {
        console.log("insert error");
      })

  }

  emailCheck = () => {
    const { email1, email2 } = this.refs;
    const email = email1.value + '@' + email2.value;

    var url = "http://localhost:9000/controller/emailcheck?email=" + email;
    Axios.get(url)
      .then( (resData) => {
        if(resData.data === 0)
        {
          this.setState({
            emailState: true
          })
        }
        else
        {
          this.setState({
            emailState: false
          })
        }
        
        console.log(resData.data);
      })
      .catch( (error) => {
        console.log("check error : " + error);
      })

      console.log(email);
    
  }

  render() {

    let stateP;

    if(this.state.emailState) {
      stateP = <p>사용가능한 이메일 입니다.</p>
    }
    else 
    {
      stateP = <p>중복된 이메일 입니다.</p>
    }

    return (
      <div>
        <div className="sign_box"> 
          <p className="title">이메일 주소 회원가입</p>
          <div className="input_box">
            <div className="mb">
              <input type="text" placeholder="사용자 이름" className="pull" ref="user_name" />
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
              <span className="email_check" onClick={this.emailCheck.bind(this)}>
                중복확인
              </span>
              {stateP}
            </div>
            <div className="mb">
              <input className="pull mb5" placeholder="비밀번호" type="password" ref="password" /> 
              <input className="pull" placeholder="비밀번호 확인" type="password" /> 
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
