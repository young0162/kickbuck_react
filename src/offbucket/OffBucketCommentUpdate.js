import React, { Component, Fragment } from "react";
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

class OffBucketCommentUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_Name: "",
      num: 41,
      subject: "",
      image: "",
      content: "",
      endday: "",
      file: "",
      fileName: "",
      open: false
    };
    console.log("image=" + this.state.image);
    console.log("user_Name=" + this.state.user_Name);
    console.log("state.content=" + this.props.commentData.content);
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

  //  입력시 state 값 변경
  onKeyChange = e => {
    console.log("onKeyChange=" + this.props.commentData.subject);
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
  };

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <Button
          variant="outlined"
          color="primary"
          onClick={this.modalClickOpen}
        >
          후기수정
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
              value={this.props.commentData.subject}
            ></TextField>
            <br></br>
            <TextField
              label="작성자"
              type="text"
              name="user_name"
              margin="dense"
              value={this.props.commentData.user_name}
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
              value={this.props.commentData.content}
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
                이미지 추가
              </Button>
            </label>
            <br></br>
            <br></br>
            <TextField
              type="date"
              name="endday"
              onChange={this.onKeyChange}
              margin="dense"
              value={this.props.commentData.endday}
            ></TextField>
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              color="primary"
              onClick={this.onSubmit}
              type="onSubmit"
            >
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
      </Fragment>
    );
  }
}

export default withStyles(styles)(OffBucketCommentUpdate);
