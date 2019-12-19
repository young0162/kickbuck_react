import React, { Component } from 'react';
import MyPage from './mypage/MyPage';
import SignUp from './sign/SignUp';
import Home from './Home';
import Menu from './Menu';
import Mylist from './mypage/MyList';
import Our from './mypage/OurList';
import Off from './mypage/OffList';
import Empathize from './mypage/Empathize';
import Standby from './mypage/Standby';
import { Route } from 'react-router-dom';

export default class Main extends Component {
    render() {
        return (
            <div>
                <Menu/>
                <Route exact path='/' component={Home} />
                <Route exact path='/mypage' component={MyPage} />
                <Route exact path='/signup' component={SignUp} />
            
                <Route exact path='/mylist' component={Mylist} />
                <Route exact path='/ourlist' component={Our} />
                <Route exact path='/offlist' component={Off} />
                <Route exact path='/Empathize' component={Empathize} />
                <Route exact path='/Standby' component={Standby} />
            </div>
        )
    }
}