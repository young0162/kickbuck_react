import React, { Component, Fragment } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import BucketCommentList from "./BucketCommentList";
import OffbucketCommentInsert from "./OffbucketCommentInsert";

class Bucketdetail extends Component {
  constructor({ history, match }) {
    super();

    this.state = {
      num: 41,
      bucketData: [], //오프버킷 받아서 저장
      offBucketCommentData: [] //오프 버킷리스트 후기 받아서 저장
    };
    console.log("bucketData=" + this.state.bucketData);
    console.log("offbuckcetComment=" + this.state.offBucketCommentData);
    this.bucket = this.bucket.bind(this);
  }

  bucket = () => {
    var url =
      "http://localhost:9000/controller/bucket/detail?num=" + this.state.num;

    axios
      .get(url)
      .then(responseData => {
        console.log(responseData.data);
        this.setState({
          bucketData: responseData.data
        });
        console.log("axiosbucket=" + this.state.bucketData);
      })
      .catch(error => {
        console.log("bucketdatail error");
      });
  };

  offBucketCommentList = () => {
    var url =
      "http://localhost:9000/controller/bucket/offbucketcommentlist?num=" +
      this.state.num;
    axios
      .get(url)
      .then(responseData => {
        console.log(responseData.data);
        this.setState({
          offBucketCommentData: responseData.data
        });
        console.log(
          "offBucketComment=" + JSON.stringify(this.state.offBucketCommentData)
        );
      })
      .catch(error => {
        console.log("offBucketCommentlist error");
      });
  };

  componentDidMount = () => {
    this.bucket();
    this.offBucketCommentList();
  };
  render() {
    return (
      <Fragment>
        <table>
          <tbody>
            <tr>
              <th>넘버</th>
              <th>이름</th>
              <th>제목</th>
              <th>내용</th>
              <th>이미지</th>
              <th>타입</th>
            </tr>
            <tr>
              <td>{this.state.bucketData.num}</td>
              <td>{this.state.bucketData.user_name}</td>
              <td>{this.state.bucketData.subject}</td>
              <td>{this.state.bucketData.content}</td>
              <td>{this.state.bucketData.image}</td>
              <td>{this.state.bucketData.type}</td>
            </tr>
          </tbody>
        </table>
        <OffbucketCommentInsert />
        <hr></hr>

        {this.state.offBucketCommentData.map((row, idx) => (
          <BucketCommentList row={row} idx={idx} key={row.pk} />
        ))}
      </Fragment>
    );
  }
}

export default Bucketdetail;
