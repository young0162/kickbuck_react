import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

export default class OurListItem extends Component {


  onClick = () => {
    this.detailShow();
    this.bucketSelect();
  }

  detailShow = () => {
    this.props.detailShow();
  }

  bucketSelect = () => {
      this.props.bucketSelect(this.props.row.num);
  }

  render() {

    console.log(this.props.row)

    const url = "http://localhost:9000/controller/save/"
    
    return (
        <div className="mybucket_form">
          <div className="list_img" onClick={this.onClick}>
            <img src={url+this.props.row.imgarr[0]} alt=""/>
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
          <div className="but_box">
            <p className="withgo" style={{fontSize:'12px',textAlign:'center'}}>
            <NavLink exact to='/bucketlist/togetherboard'>
              함께하기 게시판으로 이동하기
            </NavLink>
            </p>
          </div>
        </div>
    );
  }
}

