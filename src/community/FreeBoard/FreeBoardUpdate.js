import React, { Component, Fragment } from "react";
import axios from "axios";

export default class FreeBoardDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      imagename: "",
      content: "",
      writer: "",
      msg: "test"
    };
  }

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
      url: "http://localhost:8080/controller/community/freeboardinsert/save",
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
      "http://localhost:8080/controller/community/freeboarddetail/update";
    axios
      .post(url, uploadFile)
      .then(res => {
        this.setState({
          msg: res.data,
          title: "",
          imagename: "",
          content: "",
          writer: ""
        });
        this.props.history.push("/community/freeboardlist");
      })
      .catch(err => {
        console.log("submit 오류:" + err.data);
      });
  };

  render() {
    const url = "http://localhost:8080/controller/save/";
    return (
      <Fragment>
        <form onSubmit={this.onSubmit}>
          <table>
            <tbody>
              <tr>
                <th>제목</th>
                <input type="text"></input>
              </tr>

              <tr>
                <th>내용</th>
                <td>
                  <textarea></textarea>
                </td>
              </tr>
              <tr>
                <th>사진</th>
                <td>
                  <input type="file" onChange={this.onImageUpload}></input>
                </td>
              </tr>
              <tr>
                <th>작성자</th>
                <input type="text"></input>
              </tr>
              <tr>
                <td colSpan="2">
                  <button type="submit">저장</button>
                </td>
              </tr>
            </tbody>
          </table>
          <button
            type="button"
            onClick={() => {
              this.history.push("/community/freeboarddetail/" + this.num);
            }}
          >
            취소
          </button>
        </form>
      </Fragment>
    );
  }
}
