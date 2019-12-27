import React, { Component } from 'react';
import axios from 'axios';
import EnrollItem from './EnrollItem';
import MyPage from './MyPage';

export default class MyList extends Component {

  constructor() {
    super();
    this.state = {
      // //스프링에서 게시물 목록을 받아서 저장할 변수
      enrollData: []
    }
  }

  //목록을 가져올 함수
  list = () => {
    var url = "http://localhost:9000/controller/enroll/list";
    axios.get(url)
      .then((responseData) => {
        console.log(responseData.data);
        //스프링 서버로부터 받은 데이타로 enrollData 수정
        this.setState({
          enrollData: responseData.data
        });
      })
      .catch((error) => {
        console.log("enroll list error" + error.data);
      });
  }

  componentWillMount() {
    //랜더링 직전 스프링으로부터 목록을 받아온다
    this.list();
  }

  render() {
    return (
      <div>
        <MyPage/>
        <table>
          <thead>
            <tr>
              <td>내용</td>
              <td>이미지</td>
              <td>작성자</td>
              <td>작성일</td>
              <td>디데이</td>
            </tr>
          </thead>
          <tbody>
            {
              this.state.enrollData.map((row,idx)=>(
                <EnrollItem idx={idx} key={row.num} row={row}/>
                  
              ))
             
            }
            
          </tbody>
        </table>
      </div>
    )
  }
}
