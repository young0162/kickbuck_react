import React, { Component } from 'react';

export default class OffListItem extends Component {
  render() {
    console.log(this.props.row)
    const url = "http://localhost:9000/controller/Mypage/"
    return (
      <tr>
        <td>
            <img src={this.props.row.imagename} alt="" className="image" />
        </td>
        <td><a href={"select/" + this.props.row.num}>{this.props.row.title}</a></td>
        <td>{this.props.row.content}</td>
        <td>{this.props.row.user_name}</td>
        <td>{this.props.row.readcnt}</td>
        <td>{this.props.row.gaipday}</td>
      </tr>
    );
  }
}