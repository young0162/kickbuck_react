import React, { Component, Fragment } from "react";
import Kickbuckmain from "./kickbuck.jpg";
import "./FreeBoardList.css";
import axios from "axios";
import FreeBoardItem from "./FreeBoardItem";
import freeboarddetail from "./FreeBoardDetail";

class FreeBoardList extends Component {
  constructor() {
    super();

    this.state = {
      freeBoardListData: [], //스프링으로부터  게시판 목록 받아서 저장할 변수

      selectData: "" //스프링으로부터 dto 데이타를 받을변수
    };

    // this.onDataSave = this.onDataSave.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  //리스트 함수
  list = () => {
    var url = "http://localhost:8080/controller/community/freeboardlist";
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

  //글선택 함수
  onSelect = num => {
    var url =
      "http://localhost:8080/controller/community/freeboarddetail?num=" + num;

    axios
      .get(url)
      .then(responseData => {
        this.setState({
          freeBoardListData: responseData.datas
        });
      })
      .catch(error => {
        console.log("select error");
      });
  };

  componentWillMount() {
    this.list(); //랜더링 직전 스프링으로부터 목록을 받아온다
  }
  render() {
    return (
      <Fragment>
        <div>
          <div className="header">
            <div className="mainimg">
              <img src={Kickbuckmain} alt="" className="kickimg"></img>
            </div>
          </div>
          <h3>FreeBoard</h3>
          <div className="table-box">
            <table className="">
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
                    onSelect={this.onSelect.bind(this)}
                  ></FreeBoardItem>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default FreeBoardList;
