import React, { Component } from 'react';

export default class EnrollItem extends Component {
  render() {
    console.log(this.props.row)
    const url = "http://localhost:9000/controller/enroll/"
    return (
      <tr>
        <td>
            <img src={url + this.props.row.image} alt="" className="image" />
        </td>
        <td><a href={"select/" + this.props.row.num}>{this.props.row.subject}</a></td>
        <td>{this.props.row.content}</td>
        <td>{this.props.row.nickname}</td>
        <td>{this.props.row.dday}</td>
        <td>{this.props.row.day}</td>
      </tr>
    );
  }
}