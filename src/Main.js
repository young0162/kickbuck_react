import React, { Component } from 'react';
import MyPage from './mypage/MyPage';
import SignUp from './sign/SignUp';
import Home from './Home';
import Menu from './Menu';
import Solo from './bucketlist/Solo';
import Together from './bucketlist/Together';
import Off from './bucketlist/Off';
import With from './bucketlist/With';
import All from './bucketlist/All';
import Category from './Category';
import { Route } from 'react-router-dom';
import './css/main.css';

export default class Main extends Component {
    render() {
        return (
            <div>
                {/* 메인페이지 로딩 되는 컴포넌트 */}
                <Menu/>
                <Category/>
                
                {/* 페이지 이동 로딩 컴포넌트 */}
                <Route exact path='/' component={All} />
                <Route exact path='/mypage' component={MyPage} />
                <Route exact path='/signup' component={SignUp} />

                {/* 메인 버킷리스트 카테고리 변경시 출력 컴포넌트 */}
                <Route exact path='/solo' component={Solo} />
                <Route exact path='/together' component={Together} />
                <Route exact path='/off' component={Off} />
                <Route exact path='/with' component={With} />
                <Route exact path='/all' component={All} />
            </div>
        )
    }
}