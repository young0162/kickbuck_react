import React, { Component } from "react";
import "./FreeBoardList.css";

export default class FreeBoardItem extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.row.num}</td>
        <td>
          <a href={"/community/freeboarddetail/" + this.props.row.num}>
            {this.props.row.title}
          </a>
        </td>
        <td>{this.props.row.writer}</td>
        <td>{this.props.row.readcnt}</td>
        <td>{this.props.row.day}</td>
      </tr>
    );
  }
}
