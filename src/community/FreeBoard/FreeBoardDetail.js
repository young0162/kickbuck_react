import React, { Component, Fragment } from "react";
import axios from "axios";
import FreeBoardComment from "./FreeBoardComment";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Typography from "@material-ui/core/Typography";

export default class FreeBoardDetail extends Component {
  constructor({ history, match }) {
    super();

    this.history = history;
    this.num = match.params.num;
    this.state = {
      selectData: "", //스프링으로부터 dto 데이타를 받을변수
      freeboardcommentListData: "",
      open: false
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
    if (localStorage.state === this.state.selectData.user_name) {
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
    } else {
      alert("로그인 정보가 일치하지않습니다");
    }
  };

  handleClickOpen = () => {
    this.setState({
      open: true
    });
  };
  handleClickClose = () => {
    this.setState({
      open: false
    });
  };

  componentDidMount = () => {
    this.onSelect();
  };

  render() {
    const url = "http://localhost:9000/controller/save/";
    return (
      <Fragment>
        <table borderless>
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
              <td>{this.state.selectData.user_name}</td>
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
        </table>
        <button
          type="button"
          onClick={() => {
            this.history.push("/community/freeboardlist");
          }}
        >
          목록
        </button>
        <div>
          <Button
            variant="contained"
            color="secondary"
            type="button"
            onClick={this.handleClickOpen}
          >
            삭제
          </Button>
          <Dialog open={this.state.open} onClose={this.handleClickClose}>
            <DialogTitle onClose={this.handleClickClose}>삭제 경고</DialogTitle>
            <DialogContent>
              <Typography gutterBottom>선택한 게시물이 삭제됩니다</Typography>
            </DialogContent>
            <DialogActions>
              <Button
                variant="contained"
                color="primary"
                onClick={this.onDelete}
              >
                삭제
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={this.handleClickClose}
              >
                닫기
              </Button>
            </DialogActions>
          </Dialog>
        </div>
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
          <FreeBoardComment freeboardnum={this.num} />
        </div>
      </Fragment>
    );
  }
}
