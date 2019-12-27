import React, { Component } from 'react';
import MyPage from './mypage/MyPage';
import SignUp from './sign/SignUp';
import Home from './Home';
import Menu from './Menu';
import { Route } from 'react-router-dom';
import FAQ from './faq/FAQ';
import MyProfile from './profile/MyProfile';
import Mylist from './mypage/MyList';
import Our from './mypage/OurList';
import Off from './mypage/OffList';
import Empathize from './mypage/Empathize';
import Standby from './mypage/Standby';

export default class Main extends Component {
    render() {
        return (
            <div>
                <Menu />
                <Route exact path='/' component={Home} />
                <Route exact path='/mypage' component={MyPage} />
                <Route exact path='/signup' component={SignUp} />
                <Route exact path='/fAQ' component={FAQ} />
                <Route exact path='/profile' component={MyProfile} />

                <Route exact path='/mypage/mylist' component={Mylist} />
                <Route exact path='/mypage/ourlist' component={Our} />
                <Route exact path='/mypage/offlist' component={Off} />
                <Route exact path='/mypage/Empathize' component={Empathize} />
                <Route exact path='/mypage/Standby' component={Standby} />
            </div>
        )
    }
}