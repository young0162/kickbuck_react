import React, { Component } from 'react';
import MyPage from './MyPage';
import SignUp from './SignUp';
import Menu from './Menu';
import { Route } from 'react-router-dom';

export default class Main extends Component {
    render() {
        return (
            <div>
                <Menu/>
                <Route exact path='/mypage' component={MyPage} />
                <Route exact path='/signup' component={SignUp} />
            </div>
        )
    }
}