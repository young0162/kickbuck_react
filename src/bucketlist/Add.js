import React, { Component } from 'react';
import '../css/add.css';
import Axios from 'axios';
import { NavLink } from 'react-router-dom';



class Add extends Component {

    constructor(props) {
        super(props);

        this.displayData = [];
        this.hashtagDiv = [];

        this.state = {
            image: '',
            imageArray: '',
            dday: '',
            calendar: '',
            hashtag: '',
            showdata: this.displayData,
            hashtagShow: this.hashtagDiv,
            hashArray: '',
            openSet: 'on',  
        }
        
    }

    BucketInsert = (data) => {
        const {subject, area, content, calendar} = this.refs;

        var url = "http://localhost:9000/controller/bucketadd";
        Axios.post( url,
            {
                subject: subject.value,
                area: area.value,
                content: content.value,
                user_name: localStorage.state,
                image: this.state.imageArray,
                dday: calendar.value,
                hashtag: this.state.hashArray,
                open: this.state.openSet,
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
            imageArray : this.state.imageArray.concat(image) + ","
        })
    }

    onImageAdd = () => {
        const url = "http://localhost:9000/controller/save/";
        const imgsrc = this.state.image;

        this.displayData.push( <img src={url + imgsrc} alt='' />);

        this.setState({
            showdata: this.displayData
        })

    }

    onChangeDay = () => {

        const { calendar,dday } = this.refs;

        let _date1 = calendar.value;
        let _date2 = new Date();

        let diffDate_1 = _date1 instanceof Date ? _date1 :new Date(_date1);
        let diffDate_2 = _date2 instanceof Date ? _date2 :new Date(_date2);
    
        diffDate_1 =new Date(diffDate_1.getFullYear(), diffDate_1.getMonth()+1, diffDate_1.getDate());
        diffDate_2 =new Date(diffDate_2.getFullYear(), diffDate_2.getMonth()+1, diffDate_2.getDate());
    
        let diff = Math.abs(diffDate_2.getTime() - diffDate_1.getTime());
        diff = Math.ceil(diff / (1000 * 3600 * 24));
    

        this.setState({
            dday: '-' + diff,
            calendar: calendar.value
        })
        
    }

    

    onHashTagWords = (e) => {
        const { hashtag } = this.refs;

        this.setState({
            hashtag: hashtag.value,
        })
    }

    onHashDelete = (num) => {
        this.state.hashtagShow.splice(num,1);

        this.setState({
            hashtagShow: this.hashtagDiv,
        })
    }

    onHashTagAdd = (e) => {

        const { hashtag } = this.refs;

        if (e.key === 'Enter')
        {
            this.hashtagDiv.push( this.state.hashtag );

            this.setState({
                hashtagShow: this.hashtagDiv,
                hashArray: this.state.hashArray.concat(this.state.hashtag) + ','
            })

            hashtag.value = '';
        }

    }

    onOpenSet = (e) => {

        this.setState({
            openSet: e.target.value
        })
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
                            {this.state.showdata}
                        </div>
                    </div>
                    <div className="mb">
                        <input type="text" placeholder="위치를 입력하세요" ref="area" />
                        <p className="but">위치 추가</p>
                    </div>
                    <div className="mb">
                        <input type="date" ref="calendar" onChange={this.onChangeDay.bind(this)} />
                        D-Day<input ref="dday" type="text" readOnly="readonly" value={ this.state.dday}/>
                    </div>
                    <div className="mb">
                        <textarea placeholder="내용을 입력해주세요" ref="content"></textarea>
                    </div>
                    <div className="mb">
                        <input type="text" placeholder="해시태그를 입력 해주세요" className="pull mb5" ref="hashtag" onChange={this.onHashTagWords.bind(this)}  onKeyPress={this.onHashTagAdd.bind(this)} />
                        <div className="hashtagbox">
                            {
                                this.state.hashtagShow.map( (item,idx) => (
                                        <span key={idx} className="hashstyle">{item}
                                            <span  className="del_but" onClick={(e) => {this.onHashDelete(idx)}}>
                                                <span></span>
                                                <span></span>
                                            </span>
                                        </span>
                                    )
                                )
                            }
                        </div>
                    </div>
                    <div className="mb">
                        <label for="on">
                            <input type="radio" id="on"  name="onoff" value="on"  checked={this.state.openSet === 'on'} onChange={this.onOpenSet.bind(this)} /> 공개
                        </label>
                        <label for="off">
                            <input type="radio" id="off"  name="onoff" value="off"  checked={this.state.openSet === 'off'} onChange={this.onOpenSet.bind(this)} /> 비공개
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