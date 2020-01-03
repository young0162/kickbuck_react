import React, { Component } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";

class bucketdetail extends Component {
  constructor({ history, match }) {
    super();

    this.state = {
      num: 41,
      bucketData: ""
    };
    console.log(this.state.num);
    console.log("bucketData=" + this.state.bucketData);
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
        console.log("select error");
      });
  };

  comment = () => {
    var url = "";
  };

  componentDidMount = () => {
    this.bucket();
  };
  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td>{this.state.bucketData.user_name}</td>
            </tr>
            <tr>
              <td>{this.state.bucketData.subject}</td>
            </tr>
            <tr>
              <td>{this.state.bucketData.content}</td>
            </tr>
            <tr>
              <td>{this.state.bucketData.image}</td>
            </tr>
          </tbody>
        </table>
        <Button color="info">후기 입력</Button>
      </div>
    );
  }
}

export default bucketdetail;
