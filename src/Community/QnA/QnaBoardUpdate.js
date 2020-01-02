import React, { Component } from "react";
import Axios from "axios";

class QnaBoardUpdate extends Component {
  constructor({ history, match }) {
    super();

    this.history = history;

    this.num = match.params.num;

    this.state = {
      // 스프링으로부터 dto 데이타를 받을 변수
      selectData: "",
      title: "",
      content: ""
    };

    this.onEdit = this.onEdit.bind(this);
  }

  // 글 선택 시 호출되는 함수
  onEdit = () => {
    var url =
      "http://localhost:9000/controller/qnaboard/select?num=" + this.num;

    Axios.get(url)
      .then(responseData => {
        console.log(responseData.data);

        this.setState({
          selectData: responseData.data,
          title: responseData.data.title,
          content: responseData.data.content
        });
      })
      .catch(error => {
        console.log("select one error" + error.data);
      });
  };

  titleChange = e => {
    this.setState({
      title: e.target.value
    });
  };

  contentChange = e => {
    this.setState({
      content: e.target.value
    });
  };

  // 업데이트 함수
  onDataUpdate = (title1, content1, num1) => {
    console.log(title1, content1, num1);
    var url = "http://localhost:9000/controller/qnaboard/update";
    Axios.post(url, { title: title1, content: content1, num: num1 })
      .then(responseData => {
        // 추가를 한 후에 필요한 코드
        // 작성한 글(qnaboarddetail)로 이동
        this.history.push(
          "/community/qnaboarddetail/" + this.state.selectData.num
        );
      })
      .catch(error => {
        console.log("add error");
      });
  };

  // form submit 시 호출할 함수
  onSubmit = e => {
    e.preventDefault();
    // Boardlist의 이벤트 핸들러 호출
    const { title, content } = this.refs;
    const num = this.state.selectData.num;
    console.log(title.value, content.value, num);

    this.onDataUpdate(title.value, content.value, num);
  };

  componentWillMount = () => {
    // 랜더링 직전 스프링으로부터 목록을 받아온다
    this.onEdit();
  };

  render() {
    return (
      <div>
        <hr />
        <div>
          <h2> Q&A 글수정 </h2>
        </div>
        <br />
        <br />
        <form onSubmit={this.onSubmit}>
          <table className="board qnaboard update qnaboardupdate">
            <tbody>
              <tr>
                <th style={{ width: "200px", height: "50px" }}>닉 네 임</th>
                <td>{this.state.selectData.user_name}</td>
              </tr>
              <tr>
                <th style={{ width: "200px", height: "50px" }}>제 목</th>
                <td>
                  <input
                    type="text"
                    ref="title"
                    className="input qnainput titleinput"
                    style={{ width: "800px", height: "50px" }}
                    value={this.state.title}
                    onChange={this.titleChange}
                    required="required"
                  ></input>
                </td>
              </tr>
              <tr>
                <th style={{ width: "200px", height: "50px" }}>질문내용</th>
                <td>
                  <textarea
                    ref="content"
                    className="input qnainput contentinput"
                    style={{ width: "800px", height: "400px" }}
                    value={this.state.content}
                    onChange={this.contentChange}
                    required="required"
                  ></textarea>
                </td>
              </tr>
              <tr>
                <td colSpan="2" align="right">
                  <button
                    type="submit"
                    className="btn btn-md btn-success"
                    style={{ width: "150px", height: "50px" }}
                  >
                    수 정
                  </button>
                  <button
                    type="button"
                    className="btn btn-md btn-success"
                    style={{ width: "150px", height: "50px" }}
                    onClick={() => {
                      this.history.push(
                        "/community/qnaboarddetail/" + this.state.selectData.num
                      );
                    }}
                  >
                    취 소
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    );
  }
}

export default QnaBoardUpdate;
