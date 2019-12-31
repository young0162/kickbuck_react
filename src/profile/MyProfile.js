import React, { Component } from 'react';
import '../css/profile.css'
import axios from 'axios';

export default class MyProfile extends Component {
  constructor() {
    super();
    this.state = {
      //스프링으로부터 dto 데이타를 받을 변수
      selectData: '',
      num: 9,
      user_name: '',
      email: '',
      password: '',
      phone: ''
    }
    this.onSelect = this.onSelect.bind(this);
  }
  //마이메이지 호출되는 함수
  onSelect = () => {
    console.log("num=" + this.state.num)
    var url = "http://localhost:9000/controller/select?num=" + this.state.num;

    axios.get(url)
      .then((responseData) => {
        console.log(responseData.data);

        this.setState({
          selectData: responseData.data,
          user_name: responseData.data.user_name,
          email1: responseData.data.email1,
          password: responseData.data.password,
          phone: responseData.data.phone
        });
      })
      .catch((error) => {
        console.log("select one error");
      })
  }
  componentWillMount() {
    //렌더링 직전 스프링으로부터 목록을 받아온다
    this.onSelect();
  }

  changeEvent = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div>
        <div className="profile">
          <tbody>
            {/* <tr>
            <td>프로필</td>
            <td><img className="my_img" src={myimg} alt="내이미지" /></td>
          </tr> */}
            <tr>
              <td>프로필</td>
              <td>
                {/* <img src={url+this.state.selectData.imagename} alt=""/> */}
                <input type="file" /></td>
            </tr>
            <tr>
              <td>닉네임</td>
              <td><b>{this.state.user_name}</b></td>
            </tr>
            <tr>
              <td>비밀번호</td>
              <td><input type="password" className="pass1"
                value={this.state.password}
                onChange={this.changeEvent} /></td>
            </tr>
            <tr>
              <td>비밀번호확인</td>
              <td><input type="password" className="pass2" name="password"
                value={this.state.password}
                onChange={this.changeEvent} /></td>
            </tr>
            <tr>
              <td>연락처</td>
              <td>
                <input className="tel" type="tel" name="phone"
                  value={this.state.phone}
                  onChange={this.changeEvent} />
              </td>
            </tr>
            <tr>
              <th>이메일</th>
              <td>
                <input className="mail" type="text" name="email1"
                  value={this.state.email1}
                  onChange={this.changeEvent} />
              </td>
            </tr>
            <div className="save">
              <button type="submit">회원정보 수정하기</button>
            </div>
          </tbody>
        </div>
      </div>
    );
  }
}
