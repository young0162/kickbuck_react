import React, { Component } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Image } from "semantic-ui-react";
import axios from 'axios';
import TogetherBoardItem from './TogetherBoardItem';


const responsive = {
    
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const images = [
    "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550353175-a3611868086b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550330039-a54e15ed9d33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1549737328-8b9f3252b927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1549833284-6a7df91c1f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1549985908-597a09ef0a7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  ];

  

  

class TogetherBoard extends Component {

  constructor(history){
      super();

      this.history=history;

      this.state={
          withBoardData: [],
          imageNameList: [],
          num:'',
          user_name: '',
          comment: '',
          display_none: "none",
          display: "table-row"
      }
  }

  // 목록을 가져올 함수
  withBoardList=()=>{
    var url="http://localhost:9000/controller/bucket/withboardlist";
    axios.get(url)
    .then((resData)=>{
        // 스프링 서버로부터 받은 데이타로 qnaData로 수정
        this.setState({
            withBoardData: resData.data
        })
        console.log(this.state.withBoardData);

    })
    .catch((error)=>{
        console.log("withBoard list 오류!");
    })
  }

  componentDidMount(){
    // 랜더링 직전 스프링으로 목록을 받아온다
    this.withBoardList();
    this.withImageNameList();
  }


  visibleEvent=()=>{
    this.setState({
        display: 'none',
        display_none: 'table-row'
    })
  }

  unvisibleEvent=()=>{
    

    this.setState({      
      display: 'table-row',
      display_none: 'none'      
    })

    this.refs.comment.value = '';
  }

  

 
  onImageUpload = e => {
    const uploadFile = e.target.files[0];
    const image_name = e.target.files[0].name; //이미지파일명
    console.log("이미지 파일명:" + image_name);
    this.setState({
      image_name
    });

    //서버로  사진 업로드
    const stufile = new FormData();
    stufile.append("uploadFile", uploadFile);
    axios({
      method: "post",
      url: "http://localhost:9000/controller/bucket/withboard/save",
      data: stufile,
      headers: { "Content-Type": "multipart/form-data" }
    })
      .then(res => {
        console.log(res.data);
      })
      .catch(error => {
        console.log("업로드 오류:" + error.data);
      });
  };

  // 스프링으로 데이타 전송
  onSubmit=(e)=>{
    e.preventDefault();

    axios.post(
        "http://localhost:9000/controller/bucket/withboardinsert",
        {
            num: 23,
            user_name: localStorage.state,
            comment: this.refs.comment.value,
            image_name: this.state.image_name
        }
    )
        .then((responseData)=>{
            // 추가를 한 후에 필요한 코드    
            // 코멘트 리스트 다시 호출
            this.withBoardList();
            this.setState({      
                  display: 'table-row',
                  display_none: 'none'      
                })
            // 코멘트 입력란 지우기
            this.refs.comment.value = '';            
            
        })
        .catch((error)=>{
            console.log("add error");
        });
           
  }

  // 이미지 네임 목록을 가져올 함수
  withImageNameList=()=>{
    var url="http://localhost:9000/controller/bucket/withimagenames";
    axios.get(url)
    .then((resData)=>{
        // 스프링 서버로부터 받은 데이타로 qnaData로 수정
        this.setState({
          imageNameList: resData.data
        })
        console.log(this.state.imageNameList);

    })
    .catch((error)=>{
        console.log("imageNameList 오류!"+error);
    })
  }

 

    render() {

        var imgurl = "http://localhost:9000/controller/save/";

        return (
            <div>
                <Carousel responsive={responsive}
                ssr
                // partialVisbile
                // deviceType={deviceType}
                itemClass="image-item">
                   {
                     this.state.imageNameList.map((item,idx)=>(
                        <Image
                            draggable={false}
                            style={{ width: "640px", height: "460px" }}
                            src={imgurl+item}
                        />
                        ))
                   }
                        
                
                </Carousel>
                <br/><br/>
                <hr/>
                <div >
                    <h2> Bucket List 함께하기 게시판 </h2>
                    <br/>
                    <button style={{width:'120px', height:'40px', margin: '5px', display:this.state.display}}
                      onClick={this.visibleEvent.bind(this)}>
                            글쓰기
                    </button>
                    
                    <table>
                      <tbody>
                        <tr style={{display:this.state.display_none}}>
                      
                          <td style={{width:'120px', height: '50px', textAlign: 'center'}}>
                              {localStorage.state}
                          </td>

                          <td>
                              <textarea ref="comment" style={{width:'700px', height:'50px', margin: '10px'}} 
                              placeholder="내용을 입력하세요." required="required"/>
                          </td>

                          <td>
                            <input style={{width:'150px', height: '50px', textAlign: 'center'}} type="file" name="image_name" onChange={this.onImageUpload}/>                            
                          </td>

                          <td>   
                              <form onSubmit={this.onSubmit}>                             
                                  <button type="submit" style={{width:'120px', height:'40px'}}>
                                      등록
                                  </button>                            
                              </form>                                                                
                          </td>
                         </tr> 
                      </tbody>
                    </table>

                    <button  style={{width:'120px', height:'40px', margin: '5px', display:this.state.display_none}}
                      onClick={this.unvisibleEvent.bind(this)}>
                        취소
                    </button>
                </div>
                <hr/>
                <table className="qnaboard board" style={{width: '1200px'}}>
                    <thead>
                        <tr>
                          <th colSpan="5" style={{padding: '10px'}}>
                              <b style={{fontSize: '2em'}}>함께하는 사람들</b>
                          </th>
                        </tr>
                        <tr>
                          <td colSpan="5" style={{textAlign:'center'}}>
                              <b style={{fontSize: '1.8em'}}>{localStorage.state}, {localStorage.state}, {localStorage.state},
                               {localStorage.state}, {localStorage.state}, {localStorage.state}, {localStorage.state}, {localStorage.state}, 
                               {localStorage.state}, {localStorage.state}</b>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan="5"><br/></td>
                        </tr>
                        <tr style={{height: '60px', textAlign:'center'}}>
                            <th width="100px">번호</th>
                            <th width="150px">사용자 이름</th>
                            <th width="600px">내용</th>
                            <th width="150px">작성일</th>
                            <th width="100px">이미지</th>
                            <th width="100px"></th>
                            
                        </tr>
                    </thead> 
                    
                        {
                          this.state.withBoardData.map((row,idx)=>(
                            <TogetherBoardItem row={row} idx={idx} key={row.with_num} onList={this.withBoardList}/>
                          ))                        
                        }
                    
                </table>
                <hr/>
                <br/><br/>
            </div>
        );
    }
}

export default TogetherBoard;