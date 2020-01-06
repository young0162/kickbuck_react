import React, { Component } from "react";
import MyPage from "./mypage/MyPage";
import SignUp from "./sign/SignUp";
import Menu from "./Menu";
import Solo from './bucketlist/Solo';
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
  FreeBoardUpdate,
  FreeBoardComment
} from "./community/FreeBoard/Export";
import QnaBoardDetail from './community/QnaBoard/QnaBoardDetail';
import QnaBoardUpdate from './community/QnaBoard/QnaBoardUpdate';
import QnaComment from './community/QnaBoard/QnaComment';
import QnaBoard from './community/QnaBoard/QnaBoard';
import QnaBoardWrite from './community/QnaBoard/QnaBoardWrite';
import Bucketdetail from "./offbucket/Bucketdetail";
import OffbucketCommentInsert from "./offbucket/OffbucketCommentInsert";
import OffBucketCommentUpdate from "./offbucket/OffBucketCommentUpdate";
import TogetherBoard from './bucketlist/TogetherBoard/TogetherBoard';

export default class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          {/* 메인페이지 로딩 되는 컴포넌트 */}
          <Menu/>
          
          <Route exact path='/' component={Category} />
          <Route exact path='/all' component={Category} />
          <Route exact path='/solo' component={Category} />
          <Route exact path='/with' component={Category} />
          <Route exact path='/off' component={Category} />
          
          
          {/* 페이지 이동 로딩 컴포넌트 */}
          <Route exact path='/' component={All} />
          <Route exact path='/mypage' component={MyPage} />
          <Route exact path='/signup' component={SignUp} />

          {/* 메인 버킷리스트 카테고리 변경시 출력 컴포넌트 */}
          <Route exact path='/solo' component={Solo} />
          <Route exact path='/off' component={Off} />
          <Route exact path='/with' component={With} />
          <Route exact path='/all' component={All} />
          <Route exact path='/add' component={Add} />



          {/* 자유게시판 */}
          <Route exact path="/community/freeboardlist" component={FreeBoard} />
          <Route
            exact
            path="/community/freeboarddetail/:num"
            component={FreeBoardDetail}
          />
          <Route
            exact
            path="/community/freeboardinsert"
            component={FreeBoardInsert}
          />
          <Route
            exact
            path="/community/freeboardupdate/:num"
            component={FreeBoardUpdate}
          />

          {/* 자유게시판 댓글 */}
          <Route
            exact
            path="/community/freeboardcomment/:num"
            component={FreeBoardComment}
          />

          {/* QnA게시판 */}
          <Route exact path="/community/qnaboard" component={QnaBoard} />
          <Route
            exact
            path="/community/qnaboardwrite"
            component={QnaBoardWrite}
          />
          <Route
            exact
            path="/community/qnaboarddetail/:num"
            component={QnaBoardDetail}
          />
          <Route
            exact
            path="/community/qnaboardupdate/:num"
            component={QnaBoardUpdate}
          />
          <Route
            exact
            path="/community/qnacomment/:num"
            component={QnaComment}
          />

          {/* 오프후기 */}
          <Route
            exact
            path="/bucket/offbucketdetail"
            component={Bucketdetail}
          />

          <Route
            exact
            path="/bucket/offbucketdetail/CommentInsert"
            component={OffbucketCommentInsert}
          />

          <Route
            exact
            path="/bucket/OffBucketCommentUpdate"
            component={OffBucketCommentUpdate}
          />

          <Route exact path='/bucketlist/togetherboard' component={TogetherBoard} />

        </div>
      </BrowserRouter>
    );
  }
}

