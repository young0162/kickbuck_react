import React, { Component } from 'react';
import MyPage from './mypage/MyPage';
import SignUp from './sign/SignUp';
import Home from './Home';
import Menu from './Menu';
import FAQ_signup from './FAQ_signup';
import FAQ_contents from './FAQ_contents';
import FAQ_etc from './FAQ_etc';
import { Route } from 'react-router-dom';

export default class Main extends Component {
    render() {
        return (
            <div>
                <Menu/>
                <Route exact path='/' component={Home} />
                <Route exact path='/mypage' component={MyPage} />
                <Route exact path='/signup' component={SignUp} />
                <Route exact path='/FAQ_signup' component={FAQ_signup}/>
                <Route exact path='/FAQ_contents' component={FAQ_contents}/>
                <Route exact path='/FAQ_etc' component={FAQ_etc}/>
            </div>
        )
    }
}