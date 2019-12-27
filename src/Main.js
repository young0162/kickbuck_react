import React, { Component } from 'react';
import MyPage from './mypage/MyPage';
import SignUp from './sign/SignUp';
import Home from './Home';
import Menu from './Menu';
import FAQ_copy from './FAQ_copy';
import { Route } from 'react-router-dom';

export default class Main extends Component {
    render() {
        return (
            <div>
                <Menu/>
                <Route exact path='/' component={Home} />
                <Route exact path='/mypage' component={MyPage} />
                <Route exact path='/signup' component={SignUp} />
                <Route exact path='/FAQ_copy' component={FAQ_copy}/>
            </div>
        )
    }
}