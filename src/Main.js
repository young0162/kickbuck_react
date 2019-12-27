import React, { Component } from 'react';
import MyPage from './mypage/MyPage';
import SignUp from './sign/SignUp';
import Home from './Home';
import Menu from './Menu';
import Faq_copy from './Faq_copy';
import { Route } from 'react-router-dom';
import Xa from './slide/Xa';

export default class Main extends Component {
    render() {
        return (
            <div>
                <Menu/>
                <Route exact path='/' component={Home} />
                <Route exact path='/mypage' component={MyPage} />
                <Route exact path='/signup' component={SignUp} />
                <Route exact path='/Faq_copy' component={Faq_copy}/>
                <Route exact path='/xa' component={Xa}/>
            </div>
        )
    }
}