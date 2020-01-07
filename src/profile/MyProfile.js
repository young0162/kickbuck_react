import React, { Component } from 'react';
import '../css/profile.css'
import axios from 'axios';

export default class MyProfile extends Component {
  constructor() {
    super();
    this.displayData = [];
    this.state = {
      //스프링으로부터 dto 데이타를 받을 변수
      selectData: '',
      user_name: '',
      email: '',
      passwordState: '',
      image: '',
      showdata: this.displayData
    }
    this.onSelect = this.onSelect.bind(this);
  }

  //마이메이지 호출되는 함수
  onSelect = (num) => {
    console.log("num="+num)
    var url = "http://localhost:9000/controller/profile/select?num="+num;

    axios.get(url)
      .then((responseData) => {
        console.log(responseData.data);
        this.setState({
          selectData: responseData.data,
          user_name: responseData.data.user_name,
          email: responseData.data.email,
          // password: responseData.data.password,
          image: responseData.data.image
        });
      })
      .catch((error) => {
        console.log("select one error");
      })
  }
  componentWillMount() {
    //렌더링 직전 스프링으로부터 목록을 받아온다
    this.onSelect();//누르기전에 실행해주기위해 필요함
    //버튼이 없으면 무조건 필요함
  }

  //입력시 state 값 변경
  onKeyChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  //버튼클릭시 사진업로드
  onImageUpload = (e) => {
    const uploadFile = e.target.files[0];
    const image = e.target.files[0].name; //이미지파일명
    console.log("uploadFile:" + uploadFile);
    console.log("image:" + image);
    this.setState({
      image
    });

    //서버로 이미지 업로드
    const imgfile = new FormData();
    imgfile.append("uploadFile", uploadFile);
    axios({
      method: 'post',
      url: 'http://localhost:9000/controller/profile/upload',
      data: imgfile,
      headers: { 'Content-Type': 'multipart/form-data' }
    })
      .then((resData) => {
        console.log("resData: " + resData.data);
      })
      .catch((error) => {
        console.log("이미지 업로드 오류" + error.data);
      })
  }

  //이미지 보기
  onImageAdd = () => {
    const url = "http://localhost:9000/controller/save/";
    const imgsrc = this.state.image;
    this.displayData.push(<img src={url + imgsrc} alt='' />);
    this.setState({
      showdata: this.displayData
    })
    console.log(imgsrc)
  }

  onSubmit = (e) => {
    e.preventDefault();//기본적인 서브밋행동 취소

    const uploadFile = this.state;
    var url =
      "http://localhost:9000/controller/update";
    axios
      .post(url, uploadFile)
      .then(res => {
        this.setState({
          email: this.state.email,
          password: this.state.password,
          image: this.state.showdata
        })
        console.log(res.data);
      })
      .catch(err => {
        console.log("submit 오류:" + err.data);
      });
    alert("회원정보가수정되었습니다.");
    window.location.reload();//새로고침
  };

  passwordCheck = () => {
    const password = this.state.password;
    const password2=this.state.password2;
    if(password.value === password2.value)
    {
      this.setState({
        passwordState: true
      });
    }
    else if (password.value !== password2.value)
    {
      this.setState({
        passwordState: false
      });
    }
  }

  render() {
    let stateP;

    if (this.state.passwordState) {
      stateP = <p>비밀번호가 일치합니다.</p>
    }
    else if (this.state.passwordState === false) {
      stateP = <p>비밀번호가 일치하지 않습니다.</p>
    }

    const url = "http://localhost:9000/controller/save/";
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <table>
            <tbody>
              <tr className="profile_tr">
                <td className="profile_td">프로필사진</td>
                <td className="profile_td">
                  <div>
                    {this.state.showdata}
                  </div>
                  <img style={{ width: '200px', height: '200px' }} src={url + this.state.image} alt="" />
                  <input type="file" onChange={this.onImageUpload.bind(this)}
                    name="image" />
                </td>
              </tr>
              <tr className="profile_tr">
                <td className="profile_td">닉네임</td>
                <td className="profile_td"><b>{this.state.user_name}</b></td>
              </tr>
              <tr className="profile_tr">
                <td className="profile_td">비밀번호</td>
                <td className="profile_td">
                  <input type="password" className="pass1"
                    name="password" placeholder="비밀번호"
                    onChange={this.passwordCheck.bind(this)}
                    value={this.state.password} /></td>
              </tr>
              <tr className="profile_tr">
                <td className="profile_td">비밀번호확인</td>
                <td className="profile_td">
                  <input type="password" className="pass2"
                    name="password2" placeholder="비밀번호 확인"
                    onChange={this.passwordCheck.bind(this)} 
                    value={this.state.password2}/>
                  {stateP}
                </td>
              </tr>
              <tr className="profile_tr">
                <td className="profile_td">이메일</td>
                <td className="profile_td">
                  <input className="mail" type="text" name="email"
                    value={this.state.email}
                    onChange={this.onKeyChange} />
                </td>
              </tr>
              <div className="save">
                <button type="submit" className="profile_btn">회원정보 수정</button>
              </div>
            </tbody>
          </table>
        </form>
      </div>
    );
  }
}
