import React, { Component } from "react";
import axios from "axios";

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

  componentDidMount = () => {
    this.bucket();
  };
  render() {
    return <div>{this.state.bucketData}</div>;
  }
}

export default bucketdetail;
