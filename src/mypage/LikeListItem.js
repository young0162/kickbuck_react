import React, { Component } from 'react';

export default class LikeListItem extends Component {
  render() {
    console.log(this.props.row)
    const url = "http://localhost:9000/controller/save/"
    return (
      <div className="mybucket_form">
        <div className="list_img">
          <img src={url+this.props.row.imgarr} alt=""/>
        </div>
        <div className="list_content">
          <p className="day">
            <span>
              D-Day <span className="red">{this.props.row.dday}</span>
            </span>
            <span>
              {this.props.row.day}
            </span>
          </p>
          <p className="title">
            {this.props.row.subject}
          </p>
        </div>
      </div>
    );
  }
}