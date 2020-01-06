import React, { Component } from 'react';
import axios from 'axios';
import OffListItem from './OffListItem';
import MyPage from './MyPage';
import '../css/table.css';

export default class OffList extends Component {
  constructor() {
    super();
    this.state = {
      mypageData: [],//스프링에서 게시물 목록을 받아서 저장할 변수
      start:0,
      flag:false,
      flag2:false
    };
  }

  //리스트를 가져올 함수
  list = () => {
    var url = "http://localhost:9000/controller/mypage/list?start=" +
    this.state.start;
    axios.get(url)
      .then((responseData) => {
        console.log(responseData.data);
        //스프링 서버로부터 받은 데이타로 mypageData 수정
        this.setState({
          mypageData: responseData.data
        });
      })
      .catch((error) => {
        console.log("mypage list error" + error.data);
      });
  };
  onClickNext=()=>{
    console.log(this.state.mypageData.length);
    if(this.state.mypageData.length!==0){
      this.setState((prevState, props) => ({
        start: prevState.start + 5,
        flag: true
      }));
    }
  };

  onClickPre = () => {
    if (this.state.start > 0) {
      this.setState((prevState, props) => ({
        start: prevState.start - 5,
        flag2: true
      }));
    }
  };

  handleClickOpen() {
    this.setState({
      open: true
    });
  }

  componentDidUpdate = () => {
    if (this.state.flag) {
      this.list();
      this.setState({
        flag: false
      });
    } else if (this.state.flag2) {
      this.list();
      this.setState({
        flag2: false
      });
    }
  };


  componentWillMount() {
    //랜더링 직전 스프링으로부터 목록을 받아온다
    this.list();
  }

  render() {
    return (
      <div className="list_my">
        <MyPage />
        <table className="list_table">
          <thead>
            <tr className="list_tr">
              <th className="list_image">이미지</th>
              <th className="list_subject">제목</th>
              <th className="list_content">내용</th>
              <th className="list_nickname">작성자</th>
              <th className="list_dday">디데이</th>
              <th className="list_writeday">작성일</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.mypageData.map((row, idx) => (
                <OffListItem idx={idx} key={row.num} row={row} />))
            }
          </tbody>
        </table>
        <div>
        <button type="button" onClick={this.onClickPre}>
              pre
            </button>
            <button type="button" onClick={this.onClickNext}>
              next
            </button>
        </div>
      </div>
    )
  }
}