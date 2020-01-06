import React, { Component } from "react";
import axios from "axios";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import Dialogtitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import TextFieldAutosize from "@material-ui/core/TextareaAutosize";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  hidden: {
    display: "none"
  }
});

class OffbucketCommentInsert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: localStorage.state,
      num: 41,
      subject: "",
      image: "",
      content: "",
      endday: "",
      file: "",
      fileName: "",
      open: false
    };
  }

  modalClickOpen = () => {
    this.setState({
      open: true
    });
  };

  modalClickClose = () => {
    this.setState({
      open: false,
      subject: "",
      content: "",
      image: "",
      num: "",
      endday: "",
      fileName: "",
      file: null
    });
  };

  //입력시 state 값 변경
  onKeyChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onImageUpload = e => {
    const uploadFile = e.target.files[0];
    const image = e.target.files[0].name; //이미지파일명
    console.log("이미지 파일명:" + image);
    this.setState({
      image
    });

    //서버로  사진 업로드
    const stufile = new FormData();
    stufile.append("uploadFile", uploadFile);
    axios({
      method: "post",
      url: "http://localhost:9000/controller/bucket/off/save",
      data: stufile,
      headers: { "Content-Type": "multipart/form-data" }
    })
      .then(res => {
        console.log(res.data);
      })
      .catch(error => {
        console.log("업로드 오류:" + error.data);
      });
    console.log("사진이 올라가냐?");
  };

  onSubmit = e => {
    e.preventDefault();

    const uploadFile = this.state;
    var url = "http://localhost:9000/controller/bucket/bucketcomment/input";
    axios
      .post(url, uploadFile)
      .then(res => {
        this.setState({
          subject: "",
          content: "",
          image: "",
          num: "",
          endday: "",
          fileName: "",
          open: false
        });
        console.log("submit=" + this.state.subject);
        window.location.reload();
      })
      .catch(err => {
        console.log("submit 오류:" + err.data);
      });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button
          variant="outlined"
          color="primary"
          onClick={this.modalClickOpen}
        >
          후기입력
        </Button>
        <Dialog open={this.state.open} onClose={this.modalClickClose}>
          <Dialogtitle>후기</Dialogtitle>
          <DialogContent align="center">
            <TextField
              label="제목"
              type="text"
              name="subject"
              onChange={this.onKeyChange}
              autoFocus
              margin="dense"
            ></TextField>
            <br></br>
            <TextField
              label="작성자"
              type="text"
              value={localStorage.state}
              name="user_name"
              margin="dense"
            ></TextField>
            <br></br>
            <br></br>
            <TextFieldAutosize
              name="content"
              value={this.state.content}
              onChange={this.onKeyChange}
              placeholder="내용입력"
              margin="dense"
              variant="outlined"
              rows="5"
            ></TextFieldAutosize>

            <input
              className={classes.hidden}
              id="raised-button-file"
              type="file"
              onChange={this.onImageUpload}
              file={this.state.fileName}
            ></input>
            <label htmlFor="raised-button-file">
              <Button
                variant="outlined"
                color="primary"
                component="span"
                name="image"
              >
                이미지 선택
              </Button>
            </label>
            <br></br>
            <br></br>
            <TextField
              type="date"
              name="endday"
              onChange={this.onKeyChange}
              margin="dense"
            ></TextField>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" color="primary" onClick={this.onSubmit}>
              추가
            </Button>

            <Button
              variant="outlined"
              color="primary"
              onClick={this.modalClickClose}
            >
              닫기
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      //  <form onSubmit={this.onSubmit}>
      //   <table>
      //     <tbody>
      //       <tr>
      //         <th>제목</th>
      //         <input
      //           type="text"
      //           name="subject"
      //           onChange={this.onKeyChange}
      //         ></input>
      //       </tr>
      //       <tr>
      //         <th>사진</th>
      //         <td>
      //           <input
      //             type="file"
      //             name="image"
      //             onChange={this.onImageUpload}
      //           ></input>
      //         </td>
      //       </tr>
      //       <tr>
      //         <th>작성자</th>
      //         <td>
      //           <input
      //             type="text"
      //             value={localStorage.state}
      //             readOnly
      //             name="user_name"
      //           ></input>
      //         </td>
      //       </tr>
      //       <tr>
      //         <th>내용</th>
      //         <td>
      //           <textarea
      //             name="content"
      //             value={this.state.content}
      //             onChange={this.onKeyChange}
      //           ></textarea>
      //         </td>
      //       </tr>
      //       <tr>
      //         <th>endday</th>
      //         <td>
      //           <input
      //             type="text"
      //             name="endday"
      //             onChange={this.onKeyChange}
      //           ></input>
      //         </td>
      //       </tr>
      //       <tr>
      //         <th colSpan="2">
      //           <button type="submit">등록</button>
      //           <button
      //             type="button"
      //             onClick={() => {
      //               this.props.history.push("/bucket/offbucketdetail");
      //             }}
      //           >
      //             취소
      //           </button>
      //         </th>
      //       </tr>
      //     </tbody>
      //   </table>
      // </form>
    );
  }
}

export default withStyles(styles)(OffbucketCommentInsert);
