import React, { Component } from "react";
import axios from "axios";
import MyPage from "./MyPage";
import "../css/table.css";
import OurListItem from "./OurListItem";

export default class OurList extends Component {
  constructor() {
    super();
    this.state = {
      ourPageData: [] //스프링에서 게시물 목록을 받아서 저장할 변수
    };
    console.log("ourlistlocalstorage=" + localStorage.state);
    console.log("ourlist=" + this.mypageData);
  }

  //리스트를 가져올 함수
  ourlist = () => {
    var url =
      "http://localhost:9000/controller/mypage/ourlist?user_name=" +
      localStorage.state;
    axios
      .get(url)
      .then(responseData => {
        console.log("ourlistData=" + responseData.data);
        //스프링 서버로부터 받은 데이타로 mypageData 수정
        this.setState({
          ourPageData: responseData.data
        });
      })
      .catch(error => {
        console.log("mypage ourlist error" + error.data);
      });
  };

  componentDidMount() {
    //랜더링 직전 스프링으로부터 목록을 받아온다
    this.ourlist();
  }

  render() {
    const url = "http://localhost:9000/controller/save/";
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
              <th>with_user</th>
            </tr>
          </thead>
          <tbody>
            {this.state.ourPageData.map((row, idx) => (
              <OurListItem idx={idx} key={row.num} row={row} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
