import React, { Component } from 'react';
import '../css/add.css';

class Add extends Component {
    render() {
        return (
            <div className="add_box">
                <p className="title">버킷리스트 등록하기</p>
                <div className="input_box">
                    <div className="mb">
                        <input type="text" placeholder="타이틀을 입력해주세요" className="pull" />
                    </div>
                    <div className="mb">
                        최대 10장까지 등록 가능합니다<input type="file" />
                        <div className="img_box"></div>
                    </div>
                    <div className="mb">
                        <input type="text" placeholder="위치를 입력하세요" />
                        <p>위치 추가</p>
                    </div>
                    <div className="mb">
                        디데이 추가
                    </div>
                    <div className="mb">
                        <textarea placeholder="내용을 입력해주세요"></textarea>
                    </div>
                    <div className="mb">
                        <input type="text" placeholder="해시태그를 입력 해주세요" />
                    </div>
                    <div className="mb">
                        <label for="on">
                            <input type="radio" id="on" name="onoff"/> 공개
                        </label>
                        <label for="off">
                            <input type="radio" id="off" name="onoff"/> 비공개
                        </label>
                    </div>
                    <div className="but_box">
                        <p className="ok">
                            등록
                        </p>
                        <p className="cencel">
                            취소
                        </p>
                    </div>    
                </div>
            </div>
        );
    }
}

export default Add;