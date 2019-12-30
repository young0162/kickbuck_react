import React, { Component } from 'react';

export default class EnrollItem extends Component {
  render() {
    console.log(this.props.row)
    const url="http://localhost:9000/controller/enroll/list"
    return (
        <tr>
          <td>{this.props.row.image}</td>
          <td>{this.props.row.subject}</td>
          <td>{this.props.row.content}</td>
          <td>{this.props.row.nickname}</td>
          <td>{this.props.row.dday}</td>
          <td>{this.props.row.day}</td>
          <td>
          <a href={"select/"+this.props.row.num}>
            <img src={url+this.props.row.image} alt="" className="image"/>
          </a>
          </td>
        </tr>
    );
  }
}