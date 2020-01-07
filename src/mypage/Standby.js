import React, { Component } from 'react';
import axios from 'axios';
import StandbyItem from './StandbyItem';
import MyPage from './MyPage';

export default class Standby extends Component {
  constructor() {
    super();
    this.state = {
      mypageData: [],//스프링에서 게시물 목록을 받아서 저장할 변수
    };
  }

  //리스트를 가져올 함수
  list = () => {
    var url = "http://localhost:9000/controller/mypage/waitlist?user_name=" +
    localStorage.state;
    axios.get(url)
      .then((responseData) => {
        console.log(responseData.data);
        //스프링 서버로부터 받은 데이타로 mypageData 수정
        this.setState({
          mypageData: responseData.data
        });
        console.log("mypagedata"+this.state.mypageData);
      })
      .catch((error) => {
        console.log("mypage list error" + error.data);
      });
  };

  componentDidMount() {
    //랜더링 직전 스프링으로부터 목록을 받아온다
    this.list();
  }

  render() {
    return (
      <div className="list_my">
        <MyPage />
        <div className="mybucket_box">
            {
              this.state.mypageData.map((row, idx) => (
                <StandbyItem idx={idx} key={row.num} row={row} />))
            }
        </div>
      </div>
    )
  }
}
