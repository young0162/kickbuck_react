import React, { Component } from 'react';
import axios from 'axios';

export default class Enroll extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subject: '', content: '', img: '', hastag: '', dday: '', googlemap: '', radioGroup: '', gonggae: '', bigonggae: ''
      // img1:'', img2:'',img3:'', img4:'',img5:'', img6:'',
      // img7:'', img8:'',img9:'', img10:''
    }
  }

  //입력하면 state 값 변경 메서드
  xChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }


  xUpload = (e) => {
    const uploadFile = e.target.files[0];
    const img = e.target.files[0].name; //이미지 파일명
    console.log("이미지 이름:" + img);

    this.setState({
      img
    });


    //서버로 이미지 업로드
    const stufile = new FormData();
    stufile.append('uploadFile', uploadFile);
    axios({
      method: 'post', url: 'http://localhost:9002/enroll/img/upload',
      /* url은 스프링 서버로 연결한 것과 controller 참조해서 정확하게 작성하자 */
      data: stufile,
      headers: { 'Content-Type': 'multipart/form-data' }
    })

      .then((res) => {
        console.log(res.data);
      })

      .catch((error) => {
        console.log("업로드 오류: " + error.data);
      });
  }

  onSubmit = (e) => {
    e.preventDefault();

    const uploadFile = this.state;
    var url = "http://localhost:9002/enroll/save";
    axios.post(url, uploadFile)
      .then((res) => {
        this.setState({
          msg: res.data,
          subject: '', content: '', img: '', hastag: '', dday: '', googlemap: '',
          radioGroup: '', gonggae: '', bigonggae: ''

        })
      })
      .catch((err) => {
        console.log("submit 오류:" + err.data);
      });
  }


  render() {
    return (
      <div>

        <div style={{ textAlign: 'center' }}>
          <form onSubmit={this.onSubmit} style={{ width: '2000px' }}>
            <table style={{ padding: '30px' }}>
              <caption>  버킷리스트 등록 </caption>
              <tbody>
                <tr>
                  <th width="100" bgcolor="white"> 제목 </th>
                  <td width="250">
                    <input placeholder="제목을 입력하세요" type="text" value={this.state.subject}
                      onChange={this.xChange} name="subject"
                      style={{ width: '500px', textAlign: 'center' }} />
                  </td>
                </tr>


                <tr>
                  <th width="100" bgcolor="white"> 이미지 등록 </th>

                  <td>
                  <input type="text" placeholder="최소 1개~최대 10개까지 등록 가능" 
                  style={{ width: '500px', textAlign: 'center'}}/> <br/>
                    <input placeholder="" type="file"
                      onChange={this.xUpload} name="img" style={{ width: '500px', textAlign: 'center' }}
                    />
                    
                  </td>
                </tr>

                <tr>
                  <th></th>
                  <td>
                    {this.state.img}
                  </td>
                </tr>

                <tr>
                  <th width="100" bgcolor="white"> 구글 지도 </th>
                  <td>
                    <input placeholder="구글 지도" type="text" value={this.state.googlemap}
                      onChange={this.xChange} name="googlemap" style={{ width: '500px', height: '200px', textAlign: 'center' }} />
                  </td>
                </tr>

                <tr>
                  <th width="100" bgcolor="white"> 디데이 설정 </th>

                  <td>
                    디데이 날짜 선택 &nbsp; &nbsp;
                    <select name="year">
                      <option value="2020">2020</option>
                      <option value="2021">2021</option>
                      <option value="2022">2022</option>
                    </select>

                    년 &nbsp; &nbsp;
                    <select name="month">
                      
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                    
                    </select>

                    월 &nbsp; &nbsp;
                    <select name="day">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                      <option value="13">13</option>
                      <option value="14">14</option>
                      <option value="15">15</option>
                      <option value="16">16</option>
                      <option value="17">17</option>
                      <option value="18">18</option>
                      <option value="19">19</option>
                      <option value="20">20</option>
                      <option value="21">21</option>
                      <option value="22">22</option>
                      <option value="23">23</option>
                      <option value="24">24</option>
                      <option value="25">25</option>
                      <option value="26">26</option>
                      <option value="27">27</option>
                      <option value="28">28</option>
                      <option value="29">29</option>
                      <option value="30">30</option>
                      <option value="31">31</option>
                    </select>
                    일
                                </td>
                </tr>


                <tr>
                  <th width="100" bgcolor="white"> 디데이 설정 </th>

                  <td>
                    <input type="select" value={this.state.dday}
                      placeholder="" name="dday" style={{ width: '500px', textAlign: 'center' }} />
                  </td>
                </tr>

                <tr>
                  <th width="100" bgcolor="white"> 본문 </th>

                  <td>
                    <textarea value={this.state.content}
                      onChange={this.xChange} placeholder="내용 입력" name="content"
                      style={{ width: '500px', height: '200px', textAlign: 'center' }} />
                  </td>
                </tr>

                <tr>
                  <th width="100" bgcolor="white"> 해시태그 </th>

                  <td>
                    <input type="text" value={this.state.hastag}
                      onChange={this.xChange} placeholder="해시태그 입력" name="hashtag"
                      style={{ width: '500px', textAlign: 'center' }} />
                  </td>
                </tr>

                <tr>
                  <td colSpan="2" align="center">
                    {/* 블로그 참조: <input type="radio" name="radioGroup" value='react' checked={this.state.radioGroup['react']} onChange={this.handleRadio}/> */}
                    <input type="radio" name="radioGroup" /> 공개 &nbsp;&nbsp;&nbsp;
                              <input type="radio" name="radioGroup" /> 비공개
                              </td>
                </tr>


                <tr>
                  <td colSpan="4" align="center">
                    <button type="submit"> 등록 </button>
                  </td>
                </tr>


              </tbody>
            </table>
          </form>
        </div>
      </div>
    );
  }
}
