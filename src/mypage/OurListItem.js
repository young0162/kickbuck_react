import React, { Component } from "react";

class OurListItem extends Component {
  render() {
    const url = "http://localhost:9000/controller/save/";
    return (
      <tr>
        <td>
          <img
            src={url + this.props.row.imgarr}
            alt=""
            style={{ width: "200px" }}
          />
        </td>
        <td>
          <a href={"select/" + this.props.row.num}>{this.props.row.subject}</a>
        </td>
        <td>{this.props.row.content}</td>
        <td>{this.props.row.user_name}</td>
        <td>{this.props.row.dday}</td>
        <td>{this.props.row.day}</td>
        <td>{this.props.row.with_user}</td>
      </tr>
    );
  }
}

export default OurListItem;
