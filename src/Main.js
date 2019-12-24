import React, { Component } from 'react';
import MyPage from './mypage/MyPage';
import SignUp from './sign/SignUp';
import Home from './Home';
import Menu from './Menu';
import QnaBoard from './Community/QnaBoard';
import QnaBoardWrite from './Community/QnaBoardWrite';
import { Route } from 'react-router-dom';
import QnaBoardDetail from './Community/QnaBoardDetail';
import QnaBoardUpdate from './Community/QnaBoardUpdate';

export default class Main extends Component {
    render() {
        return (
            <div>
                <Menu/>
                <Route exact path='/' component={Home} />
                <Route exact path='/mypage' component={MyPage} />
                <Route exact path='/signup' component={SignUp} />
                <Route exact path='/community/qnaboard' component={QnaBoard} />
                <Route exact path='/community/qnaboardwrite' component={QnaBoardWrite} />
                <Route exact path='/community/qnaboarddetail/:num' component={QnaBoardDetail} />
                <Route exact path='/community/qnaboardupdate/:num' component={QnaBoardUpdate} />
            </div>
    
        )
    }
}