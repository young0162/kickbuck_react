import React, { Component } from "react";
import MyPage from "./mypage/MyPage";
import SignUp from "./sign/SignUp";
import Menu from "./Menu";
import Solo from './bucketlist/Solo';
import Together from './bucketlist/Together';
import Off from './bucketlist/Off';
import With from './bucketlist/With';
import All from './bucketlist/All';
import Add from './bucketlist/Add';
import Category from './Category';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './css/main.css';
import {
  FreeBoard,
  FreeBoardDetail,
  FreeBoardInsert,
  FreeBoardUpdate
} from './community/FreeBoard/Export';
import QnaBoardDetail from './community/QnaBoard/QnaBoardDetail';
import QnaBoardUpdate from './community/QnaBoard/QnaBoardUpdate';
import QnaCommet from './community/QnaBoard/QnaComment';
import QnaBoard from './community/QnaBoard/QnaBoard';
import QnaBoardWrite from './community/QnaBoard/QnaBoardWrite';

export default class Main extends Component {

    render() {
        return (
            <BrowserRouter>
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
                    <Route exact path='/add' component={Add} />
                    <Route exact path="/community/freeboardlist" component={FreeBoard} />
                    <Route
                      path="/community/freeboarddetail/:num"
                      component={FreeBoardDetail}
                    />
                    <Route path="/community/freeboardinsert" component={FreeBoardInsert} />
                    <Route
                      path="/community/freeboardupdate/:num"
                      component={FreeBoardUpdate}
                    />
                    <Route exact path='/community/qnaboard' component={QnaBoard} />
                    <Route exact path='/community/qnaboardwrite' component={QnaBoardWrite} />
                    <Route exact path='/community/qnaboarddetail/:num' component={QnaBoardDetail} />
                    <Route exact path='/community/qnaboardupdate/:num' component={QnaBoardUpdate} />
                    <Route exact path='/community/qnacomment/:num' component={QnaCommet} />
                </div>
            </BrowserRouter>
        )
    }
}
