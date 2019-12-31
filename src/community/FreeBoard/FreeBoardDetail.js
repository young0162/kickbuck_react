import React, { Component, Fragment } from "react";
import axios from "axios";
import { Button, Table } from "reactstrap";
import FreeBoardCommentInsert from "./FreeBoardCommentInsert";

export default class FreeBoardDetail extends Component {
  constructor({ history, match }) {
    super();

    this.history = history;
    this.num = match.params.num;
    this.state = {
      selectData: "", //스프링으로부터 dto 데이타를 받을변수
      freeboardcommentListData: ""
    };

    this.onSelect = this.onSelect.bind(this);
  }
  //글선택 함수
  onSelect = () => {
    var url =
      "http://localhost:9000/controller/community/freeboarddetail?num=" +
      this.num;

    axios
      .get(url)
      .then(responseData => {
        console.log(responseData.data);
        this.setState({
          selectData: responseData.data
        });
      })
      .catch(error => {
        console.log("select error");
      });
  };

  onDelete = () => {
    var url =
      "http://localhost:9000/controller/community/freeboarddetail/delete?num=" +
      this.num;

    axios
      .get(url)
      .then(responseData => {
        //삭제후 돌아가기
        this.history.push("/community/freeboardlist");
      })
      .catch(error => {
        console.log("delte error");
      });
  };

  componentDidMount = () => {
    this.onSelect();
  };

  render() {
    const url = "http://localhost:9000/controller/save/";
    return (
      <Fragment>
        <Table borderless>
          <tbody>
            <tr>
              <th>제목</th>
              <td>{this.state.selectData.title}</td>
            </tr>

            <tr>
              <th>내용</th>
              <td>
                <div>
                  <img src={url + this.state.selectData.imagename} alt="" />
                </div>
                {this.state.selectData.content}
              </td>
            </tr>

            <tr>
              <th>작성자</th>
              <td>{this.state.selectData.writer}</td>
            </tr>

            <tr>
              <th>조회수</th>
              <td>{this.state.selectData.readcnt}</td>
            </tr>

            <tr>
              <th>작성일</th>
              <td>{this.state.selectData.day}</td>
            </tr>
          </tbody>
        </Table>
        <button
          type="button"
          onClick={() => {
            this.history.push("/community/freeboardlist");
          }}
        >
          목록
        </button>
        <Button type="button" onClick={this.onDelete.bind(this)} color="danger">
          삭제
        </Button>
        <button
          type="button"
          onClick={() => {
            this.history.push(
              "/community/freeboardupdate/" + this.state.selectData.num
            );
          }}
        >
          수정
        </button>
        <div>
          <FreeBoardCommentInsert num={this.num} />
        </div>
      </Fragment>
    );
  }
}
