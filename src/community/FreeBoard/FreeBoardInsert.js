import React, { Component, Fragment } from "react";
import axios from "axios";

class FreeBoardInsert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      imagename: "",
      content: "",
      user_name: localStorage.state,
      open: false
    };
  }

  //입력시 state 값 변경
  onKeyChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onImageUpload = e => {
    const uploadFile = e.target.files[0];
    const imagename = e.target.files[0].name; //이미지파일명
    console.log("이미지 파일명:" + imagename);
    this.setState({
      imagename
    });

    //서버로  사진 업로드
    const stufile = new FormData();
    stufile.append("uploadFile", uploadFile);
    axios({
      method: "post",
      url: "http://localhost:9000/controller/community/freeboardinsert/save",
      data: stufile,
      headers: { "Content-Type": "multipart/form-data" }
    })
      .then(res => {
        console.log(res.data);
      })
      .catch(error => {
        console.log("업로드 오류:" + error.data);
      });
  };

  onSubmit = e => {
    e.preventDefault();

    const uploadFile = this.state;
    var url =
      "http://localhost:9000/controller/community/freeboardinsert/input";
    axios
      .post(url, uploadFile)
      .then(res => {
        this.setState({
          msg: res.data,
          title: "",
          imagename: "",
          content: "",
          user_name: localStorage.state
        });
        this.props.history.push("/community/freeboardlist");
      })
      .catch(err => {
        console.log("submit 오류:" + err.data);
      });
  };

  render() {
    return (
      <Fragment>
        <form onSubmit={this.onSubmit}>
          <table>
            <tbody>
              <tr>
                <th>제목</th>
                <td>
                  <input
                    type="text"
                    name="title"
                    value={this.state.title}
                    onChange={this.onKeyChange}
                  ></input>
                </td>
              </tr>
              <tr>
                <th>내용</th>
                <td>
                  <textarea
                    style={{ width: "350px", height: "100px" }}
                    name="content"
                    value={this.state.content}
                    onChange={this.onKeyChange}
                  ></textarea>
                </td>
              </tr>
              <tr>
                <th>사진</th>
                <td>
                  <input
                    type="file"
                    name="imagename"
                    onChange={this.onImageUpload}
                  ></input>
                </td>
              </tr>
              <tr>
                <th>작성자</th>
                <td>
                  <input
                    type="text"
                    name="user_name"
                    value={localStorage.state}
                    readOnly
                  ></input>
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <button type="submit">저장</button>
                  <button
                    type="button"
                    onClick={() => {
                      this.props.history.push("/community/freeboardlist");
                    }}
                  >
                    취소
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </Fragment>
    );
  }
}

export default FreeBoardInsert;
