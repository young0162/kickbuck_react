import React, { Component, Fragment } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import TextFieldAutosize from "@material-ui/core/TextareaAutosize";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  hidden: {
    display: "none"
  }
});
class BucketCommentList extends Component {
  state = {
    open: false,
    subject: "",
    image: "",
    content: "",
    user_name: "",
    endday: "",
    pk: "",
    commentData: []
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

  onDelete = () => {
    if (localStorage.state === this.props.row.user_name) {
      var url =
        "http://localhost:9000/controller/bucket/offbucketcomment/delete?pk=" +
        this.props.row.pk;

      axios
        .get(url)
        .then(responseData => {
          //삭제후 돌아가기
          window.location.reload();
        })
        .catch(error => {
          console.log("delte error");
        });
    } else {
      alert("로그인 정보가 일치하지않습니다");
    }
  };

  onSelect = () => {
    var url =
      "http://localhost:9000/controller/bucket/offbucketcommentData?pk=" +
      this.props.row.pk;

    axios
      .get(url)
      .then(responseData => {
        console.log(responseData.data);
        this.setState({
          commentData: responseData.data,
          subject: responseData.data.subject,
          image: responseData.data.image,
          content: responseData.data.content,
          endday: responseData.data.endday,
          user_name: responseData.data.user_name,
          pk: responseData.data.pk
        });
        console.log("commentData=" + this.state.commentData);
      })
      .catch(error => {
        console.log("commentData error");
      });
  };

  onSubmit = e => {
    e.preventDefault();

    const uploadFile = this.state;
    if (localStorage.state === this.props.row.user_name) {
      console.log("bucketcommentupdate=" + this.state.pk);
      var url =
        "http://localhost:9000/controller/bucket/offbucketcomment/update";
      axios
        .post(url, uploadFile)
        .then(res => {
          this.setState({
            msg: res.data,
            title: "",
            image: "",
            content: "",
            pk: ""
          });
          console.log("updatesuccess");
          window.location.reload();
        })
        .catch(err => {
          console.log("submit 오류:" + err.data);
        });
    } else {
      alert("로그인정보가 일치하지않습니다");
    }
  };

  //  입력시 state 값 변경
  onKeyChange = e => {
    console.log("onKeyChange=" + this.state.subject);
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

  componentWillMount = () => {
    this.onSelect();
  };

  render() {
    const url = "http://localhost:9000/controller/save/";
    const { classes } = this.props;
    console.log("pk=" + this.props.row.pk);
    return (
      <Fragment>
        <h3>{this.props.row.subject}</h3> <br></br>
        <img
          src={url + this.props.row.image}
          alt=""
          style={{ maxWidth: "100px" }}
        />
        <br></br>
        {this.props.row.content}
        {this.props.row.user_name}
        <p>{this.props.row.endday}</p>
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
          <div>
            <Button
              variant="outlined"
              color="primary"
              onClick={this.modalClickOpen}
            >
              후기수정
            </Button>
            <Dialog open={this.state.open} onClose={this.modalClickClose}>
              <DialogTitle>후기 수정</DialogTitle>
              <DialogContent align="center">
                <TextField
                  type="text"
                  name="subject"
                  onChange={this.onKeyChange}
                  margin="dense"
                  value={this.state.subject}
                ></TextField>
                <br></br>
                <TextField
                  type="text"
                  name="user_name"
                  value={localStorage.state}
                  margin="dense"
                ></TextField>
                <br></br>
                <br></br>
                <TextFieldAutosize
                  name="content"
                  onChange={this.onKeyChange}
                  placeholder="내용입력"
                  variant="outlined"
                  rows="5"
                  margin="dense"
                  value={this.state.content}
                ></TextFieldAutosize>
                <br></br>

                <input
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
                  value={this.state.endday}
                  margin="dense"
                ></TextField>
              </DialogContent>
              <DialogActions>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.onSubmit}
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
          </div>
        </div>
        <hr></hr>
      </Fragment>
    );
  }
}

export default BucketCommentList;
