import React, { Component } from "react";
export default class FreeBoardItem extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.idx + 1}</td>
        <td>
          <a href={"/community/freeboarddetail/" + this.props.row.num}>
            {this.props.row.title}
          </a>
        </td>
        <td>{this.props.row.writer}</td>
        <td>{this.props.row.readcnt}</td>
        <td>{this.props.row.today}</td>
      </tr>
    );
  }
}
