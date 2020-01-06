import React, { Component, Fragment } from "react";
import Kickbuckmain from "./kickbuck.jpg";
import axios from "axios";
import FreeBoardItem from "./FreeBoardItem";
import { Button, Table } from "reactstrap";

class FreeBoardList extends Component {
  constructor() {
    super();

    this.state = {
      freeBoardListData: [], //스프링으로부터  게시판 목록 받아서 저장할 변수
      start: 0
    };
  }

  //리스트 함수
  list = () => {
    var url = "http://localhost:9000/controller/community/freeboardlist";
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
    if (this.state.freeBoardListData.length !== 0) {
      this.setState((prevState, props) => ({
        start: prevState.start + 15
      }));

      console.log("start=" + this.state.start);
      var url =
        "http://localhost:9000/controller/community/freeboardlist?start=" +
        this.state.start;

      axios.get(url).then(responseData => {
        // this.list();
        this.setState({
          freeBoardListData: responseData.data
        });
        console.log(this.state.freeBoardListData.length);
      });
    }
  };

  onClickPre = start => {
    if (this.state.start > 0) {
      this.setState((prevState, props) => ({
        start: prevState.start - 15
      }));
      console.log("start=" + this.state.start);
      var url =
        "http://localhost:9000/controller/community/freeboardlist?=" +
        this.state.start;

      axios.get(url).then(responseData => {
        this.setState({
          freeBoardListData: responseData.data
        });
      });
    }
  };

  componentDidMount() {
    this.list(); //랜더링 직전 스프링으로부터 목록을 받아온다
  }

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
          <Button
            type="button"
            onClick={() => {
              this.props.history.push("/community/freeboardinsert");
            }}
            outline
            color="info"
          >
            추가
          </Button>
          <Table striped>
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
          </Table>
          <div>
            <Button
              type="button"
              color="info"
              outline
              onClick={this.onClickPre}
            >
              pre
            </Button>
            <Button
              type="button"
              color="primary"
              outline
              onClick={this.onClickNext}
            >
              next
            </Button>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default FreeBoardList;
