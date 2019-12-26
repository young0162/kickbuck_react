import React, { Component } from "react";
import MyPage from "./mypage/MyPage";
import SignUp from "./sign/SignUp";
import Home from "./Home";
import Menu from "./Menu";
import {
  FreeBoard,
  FreeBoardDetail,
  FreeBoardInsert,
  FreeBoardUpdate
} from "./community/FreeBoard/Export";
import { Route } from "react-router-dom";

export default class Main extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Route exact path="/" component={Home} />
        <Route exact path="/mypage" component={MyPage} />
        <Route exact path="/signup" component={SignUp} />
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
      </div>
    );
  }
}
