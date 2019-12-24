import React, { Component } from "react";
import "./FreeBoardList.css";

export default class FreeBoardItem extends Component {
  onSelectClick = () => {
    this.props.onSelect(this.props.row.num);
  };
  render() {
    return (
      <tr onclick={this.onSelectClick}>
        <td>{this.props.idx + 1}</td>
        <td>{this.props.row.title}</td>
        <td>{this.props.row.writer}</td>
        <td>{this.props.row.readcnt}</td>
        <td>{this.props.row.day}</td>
      </tr>
    );
  }
}
