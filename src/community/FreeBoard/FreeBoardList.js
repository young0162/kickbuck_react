import React, { Component, Fragment } from "react";
import Kickbuckmain from "./kickbuck.jpg";
import "./FreeBoardList.css";
import axios from "axios";
import FreeBoardItem from "./FreeBoardItem";

class FreeBoardList extends Component {
  constructor() {
    super();

    this.state = {
      freeBoardListData: [], //스프링으로부터  게시판 목록 받아서 저장할 변수
      start: 0,
      flag: false,
      flag2: false
    };
  }

  //리스트 함수
  list = () => {
    var url =
      "http://localhost:9000/controller/community/freeboardlist?start=" +
      this.state.start;
    axios
      .get(url)
      .then(responseData => {
        this.setState({
          freeBoardListData: responseData.data
        });
      })
      .catch(error => {
        console.log("list 오류");
      });
  };
  onClickNext = () => {
    console.log(this.state.freeBoardListData.length);
    if (this.state.freeBoardListData.length !== 0) {
      this.setState((prevState, props) => ({
        start: prevState.start + 15,
        flag: true
      }));
    }
  };

  onClickPre = () => {
    if (this.state.start > 0) {
      this.setState((prevState, props) => ({
        start: prevState.start - 15,
        flag2: true
      }));
    }
  };

  componentDidMount() {
    this.list(); //랜더링 직전 스프링으로부터 목록을 받아온다
  }

  componentDidUpdate = (p, s) => {
    if (this.state.flag) {
      this.list();
      this.setState({
        flag: false
      });
    } else if (this.state.flag2) {
      this.list();
      this.setState({
        flag2: false
      });
    }
  };

  render() {
    return (
      <Fragment>
        <div className="header">
          <div className="mainimg">
            <img src={Kickbuckmain} alt="" className="kickimg"></img>
          </div>
        </div>
        <h3>FreeBoard</h3>
        <div className="table-box">
          <button
            type="button"
            onClick={() => {
              this.props.history.push("/community/freeboardinsert");
            }}
          >
            추가
          </button>
          <table>
            <thead>
              <tr>
                <th>번호</th>
                <th>제목</th>
                <th>작성자</th>
                <th>조회수</th>
                <th>작성일</th>
              </tr>
            </thead>
            <tbody>
              {this.state.freeBoardListData.map((row, idx) => (
                <FreeBoardItem
                  row={row}
                  idx={idx}
                  key={row.num}
                ></FreeBoardItem>
              ))}
            </tbody>
          </table>
          <div>
            <button type="button" onClick={this.onClickPre}>
              pre
            </button>
            <button type="button" onClick={this.onClickNext}>
              next
            </button>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default FreeBoardList;
