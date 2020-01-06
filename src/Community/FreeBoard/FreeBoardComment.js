import React, { Component, Fragment } from "react";
import axios from "axios";
import FreeBoardCommentItem from "./FreeBoardCommentItem";

class FreeBoardComment extends Component {
  constructor(history) {
    super();

    this.history = history;

    this.state = {
      freeBoardCommentData: [],
      num: "",
      user_name: "",
      comment: ""
    };

    this.onKeyChange = this.onKeyChange.bind(this);
  }

  onKeyChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      num: this.props.freeboardnum,
      user_name: localStorage.state
    });
    console.log(this.state);
    console.log("his.props.freeboardnum" + this.state.num);
  };

  onSubmit = e => {
    e.preventDefault();

    axios
      .post("http://localhost:9000/controller/freeboardcomment/commentwrite", {
        num: this.state.num,
        user_name: this.state.user_name,
        comment: this.state.comment
      })
      .then(responseData => {
        // 추가를 한 후에 필요한 코드
        // 코멘트 리스트 다시 호출
        this.freeBoardCommentList();

        // 코멘트 입력란 지우기
        this.setState({
          comment: ""
        });
      })
      .catch(error => {
        console.log("add error");
      });
  };

  // 목록을 가져올 함수
  freeBoardCommentList = () => {
    console.log("commentlistnum=" + this.props.freeboardnum);
    var url =
      "http://localhost:9000/controller/freeboardcomment/list?num=" +
      this.props.freeboardnum;
    axios
      .get(url)
      .then(resData => {
        // 스프링 서버로부터 받은 데이타로 qnaData로 수정
        this.setState({
          freeBoardCommentData: resData.data
        });
        console.log("freeBoardCommentData" + this.freeBoardCommentData);
      })
      .catch(error => {
        console.log(
          "freeBoardComment list 오류!" + this.state.freeBoardCommentData
        );
      });
  };

  componentDidMount() {
    // 랜더링 직전 스프링으로 목록을 받아온다
    this.freeBoardCommentList();
  }

  render() {
    return (
      <Fragment>
        <hr />
        <div>
          <h2> freeBoard 댓글 </h2>
        </div>
        <br />
        <hr />
        <table className="freeBoard board" style={{ width: "1150px" }}>
          {this.state.freeBoardCommentData.map((row, idx) => (
            <FreeBoardCommentItem
              row={row}
              idx={idx}
              key={row.comment_num}
              onList={this.freeBoardCommentList}
            />
          ))}
        </table>
        <hr />
        <br />
        <br />
        <form onSubmit={this.onSubmit}>
          <table className="board freeBoard write freeBoardWrite">
            <tbody>
              <tr>
                <th style={{ width: "150px", height: "60px" }}>
                  {localStorage.state}
                </th>
                <td>
                  <input
                    type="text"
                    name="comment"
                    className="input freeBoardinput contentinput"
                    style={{ width: "700px", height: "100px" }}
                    placeholder="댓글을 입력하세요."
                    value={this.state.comment}
                    required="required"
                    onChange={this.onKeyChange}
                  />
                </td>
                <td>
                  <button
                    type="submit"
                    className="btn btn-md btn-success"
                    style={{ width: "150px", height: "100px" }}
                  >
                    댓글 등록
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <br />
          <br />
        </form>
      </Fragment>
    );
  }
}

export default FreeBoardComment;
