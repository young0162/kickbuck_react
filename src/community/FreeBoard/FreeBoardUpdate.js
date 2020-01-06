import React, { Component, Fragment } from "react";
import axios from "axios";

export default class FreeBoardDetail extends Component {
  constructor({ history, match }) {
    super();

    this.history = history;
    this.num = match.params.num;
    this.state = {
      //스프링으로부터 dto 데이타를 받을변수
      selectData: "",
      title: "",
      content: "",
      imagename: "",
      user_name: "",
      num: this.num
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
          title: responseData.data.title,
          content: responseData.data.content,
          imagename: responseData.data.imagename,
          user_name: responseData.data.user_name
        });
      })
      .catch(error => {
        console.log("select error");
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

  onKeyChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const uploadFile = this.state;

    console.log(this.num);
    var url =
      "http://localhost:9000/controller/community/freeboarddetail/update";
    axios
      .post(url, uploadFile)
      .then(res => {
        this.setState({
          msg: res.data,
          title: "",
          imagename: "",
          content: ""
        });
        console.log(res.data);
        this.props.history.push("/community/freeboarddetail/" + this.num);
      })
      .catch(err => {
        console.log("submit 오류:" + err.data);
      });
  };

  componentWillMount = () => {
    this.onSelect();
  };

  render() {
    return (
      <Fragment>
        <form onSubmit={this.onSubmit}>
          <table>
            <tbody>
              <tr>
                <th>제목</th>
                <input
                  type="text"
                  value={this.state.title}
                  onChange={this.onKeyChange}
                  name="title"
                ></input>
              </tr>

              <tr>
                <th>내용</th>
                <td>
                  <textarea
                    value={this.state.content}
                    onChange={this.onKeyChange}
                    name="content"
                  ></textarea>
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
                <td>
                  <input
                    value={this.state.user_name}
                    onChange={this.onKeyChange}
                    name="user_name"
                  ></input>
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <button type="submit">저장</button>
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <button
                    type="button"
                    onClick={() => {
                      this.history.push(
                        "/community/freeboarddetail/" + this.num
                      );
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
