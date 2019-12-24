import React, { Component } from 'react';
import kakao from '../image/main/kakao.png';
import naver from '../image/main/naver.png';
import {HighlightOff} from '@material-ui/icons';
import { NavLink } from 'react-router-dom';
import Axios from 'axios';

class Login extends Component {

    constructor({history}) {
        super();
    }

    onLoginClick = () => {
        this.props.onLogin();
        window.location.reload();
    }
 
    loginCheck = () => {

        const {email1,password} = this.refs;

        var url = "http://localhost:9000/react/login";
        Axios.post(url, 
        {
            email1: email1.value,
            password: password.value
        })
        .then( (resData) => {
            console.log(resData.data);
            if(resData.data === 1)
            {
                this.onLoginClick();
                localStorage.state = email1.value;
                console.log("localStorage"  + localStorage.state);
            }
            else{
                alert("아이디와 비밀번호가 일치하지 않습니다");
            }
        })
        .catch( (error) => {
            console.log("login error" + error);
        })

        console.log(email1.value, password.value);
    }


    render() {

      

        return (
            <div className="login_container" style={this.props.loginShow}>
                <div className="login_bg"></div>
                <div className="login_content">
                    <div className="social_sign">
                        <p className="title">SNS 로그인</p>
                        <p className="sns_bar sns_barkakao">
                            <span className="kakao"><img src={kakao} alt="" /></span>
                            <span className="kakao_text">카카오로 회원가입/로그인</span>
                        </p>
                        <p className="sns_bar sns_barnaver">
                            <span className="naver"><img src={naver} alt="" /></span>
                            <span className="naver_text">네이버로 회원가입/로그인</span>
                        </p>
                    </div>
                    <div className="login_form">
                        <p className="title">이메일 로그인</p>
                        <input type="text" placeholder="아이디" ref="email1" />
                        <input type="password" placeholder="비밀번호" ref="password" />
                        <p onClick={this.loginCheck.bind(this)}>
                            로그인
                        </p>
                        <div className="login_menu">
                            <p>이메일 저장</p>
                            <p>비밀번호 찾기</p>
                            <p >
                                <NavLink exact to='/signup' onClick={this.onLoginClick}>
                                    이메일 회원가입
                                </NavLink>
                            </p>
                        </div>
                    </div>
                    <div className="close_but" onClick={this.onLoginClick}>
                        <HighlightOff/>
                    </div> 
                </div>   
                
            </div>
        );
    }
}

export default Login;