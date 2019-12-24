import React, { Component } from "react";

export default class FreeBoardDetail extends Component {
  render() {
    return (
      <div>
        <h4>제목:{this.props.freeBoardListData.title}</h4>
        <h4>내용:{this.props.freeBoardListData.content}</h4>
        <h4>이미지:{this.props.freeBoardListData.imagename}</h4>
        <h4>작성자:{this.props.freeBoardListData.writer}</h4>
        <h4>조회수:{this.props.freeBoardListData.readcnt}</h4>
        <h4>날짜:{this.props.freeBoardListData.writeday}</h4>
      </div>
    );
  }
}
