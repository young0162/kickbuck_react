import React, { Component } from 'react';
import '../css/add.css';
import Axios from 'axios';
import { NavLink } from 'react-router-dom';



class Add extends Component {

    constructor(props) {
        super(props);

        

        this.state = {
            image: '',
            imageArray: '',
        }
    }

    BucketInsert = (data) => {
        const {subject, area, content} = this.refs;

        var url = "http://localhost:9000/controller/bucketadd";
        Axios.post( url,
            {
                subject: subject.value,
                area: area.value,
                content: content.value,
                user_name: localStorage.state,
                image: this.state.imageArray
            })
            .then( (resData) => {

            })
            .catch( (error) => {
                console.log("insert error" + error.data);
            })

            
    }

    onImageUpload = (e) => {
        const uploadFile = e.target.files[0];
        const image = e.target.files[0].name;
        console.log("uploadFile : " + uploadFile);
        console.log("image : " + image);

        this.setState({
            image
        })

        const bucketfile = new FormData();
        bucketfile.append('uploadFile',uploadFile);

        Axios({
            method: 'post',
            url: 'http://localhost:9000/controller/save',
            data: bucketfile,
            headers: {'Content-Type' : 'multipart/form-data'}
        })
        .then( (resData) => {
            console.log("resData: " + resData.data);
        })
        .catch( (error) => {
            console.log("이미지 업로드 오류" + error.data);
        })

        this.setState({
            imageArray : this.state.imageArray.concat(image)
        })
        console.log("this.imageArray : " + this.state.imageArray);
    }

    onImageAdd = () => {
        const url = "http://localhost:9000/controller/save/";
        const imgsrc = this.state.image;

        this.displayData.push( <img src={url + imgsrc} alt='' />);
    }

    render() {


        return (
            <div className="add_box">
                <p className="title">버킷리스트 등록하기</p>
                <div className="input_box">
                    <div className="mb">
                        <input type="text" placeholder="타이틀을 입력해주세요" className="pull" ref="subject" />
                    </div>
                    <div className="mb">
                        최대 10장까지 등록 가능합니다<input type="file" onChange={this.onImageUpload.bind(this)} /> <p onClick={this.onImageAdd.bind(this)}>이미지 추가</p>
                        <div className="img_box">
                            {this.displayData}
                        </div>
                    </div>
                    <div className="mb">
                        <input type="text" placeholder="위치를 입력하세요" ref="area" />
                        <p className="but">위치 추가</p>
                    </div>
                    <div className="mb">
                        <p className="but">디데이 추가</p>
                    </div>
                    <div className="mb">
                        <textarea placeholder="내용을 입력해주세요" ref="content"></textarea>
                    </div>
                    <div className="mb">
                        <input type="text" placeholder="해시태그를 입력 해주세요" className="pull" ref="hashtag" />
                    </div>
                    <div className="mb">
                        <label for="on">
                            <input type="radio" id="on" name="onoff" ref="on" /> 공개
                        </label>
                        <label for="off">
                            <input type="radio" id="off" name="onoff" ref="off" /> 비공개
                        </label>
                    </div>
                    <div className="but_box">
                        <NavLink className="ok" exact to='/' onClick={this.BucketInsert.bind(this)}>
                            등록
                        </NavLink>
                        <NavLink className="cancel" exact to='/'>
                            취소
                        </NavLink>
                    </div>    
                </div>
            </div>
        );
    }
}

export default Add;