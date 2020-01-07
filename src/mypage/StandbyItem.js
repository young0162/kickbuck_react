import React, { Component } from 'react';
import CheckIcon from '@material-ui/icons/Check';
import Axios from 'axios';

export default class StandbyItem extends Component {

  constructor() {
    super();

    this.waitComplete = this.waitComplete.bind(this);

  }

  waitComplete = () => {
    var url = "http://localhost:9000/controller/waitcomplete?num=" + this.props.row.num;

    Axios.get(url)
    .then( (resData) => {
      alert("우리의 버킷으로 이동 되었습니다.");
      window.location.reload();
    })
    .catch( (error) => {
      console.log("complete error: " + error.data);
    })
  }


  render() {

    
    const url = "http://localhost:9000/controller/save/";

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
          <div className="but_box">
            <p onClick={this.waitComplete} style={{paddingLeft:'75px',width:'100%'}}>
              <CheckIcon/>
              승인하기
            </p>
          </div>
        </div>
      </div>
    );
  }
}