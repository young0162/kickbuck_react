import React, { Component, Fragment } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import OffBucketCommentUpdate from "./OffBucketCommentUpdate";

class BucketCommentList extends Component {
  state = {
    open: false,
    subject: "",
    image: "",
    content: "",
    user_Name: "",
    endday: "",
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
          user_Name: responseData.data.user_name
        });
        console.log("commentData=" + this.state.commentData);
      })
      .catch(error => {
        console.log("commentData error");
      });
  };

  componentWillMount = () => {
    this.onSelect();
  };

  render() {
    const url = "http://localhost:9000/controller/save/";
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

          <OffBucketCommentUpdate commentData={this.state.commentData} />
        </div>
        <hr></hr>
      </Fragment>
    );
  }
}

export default BucketCommentList;
