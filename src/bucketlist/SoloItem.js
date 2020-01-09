import React, { Component } from 'react';
import boxbg from '../image/main/box_bg.png';
import { FavoriteBorder, ThumbUp} from '@material-ui/icons';
import Axios from 'axios';

class SoloItem extends Component {

    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         withUserArr:[]
    //     }
    // }

    onClick = (event) => {
        this.detailShow();
        this.bucketSelect();
        // this.withCheck();
    }

    onClick2 = () => {
        this.withcomplete();
        this.withCountUp();
    }

    detailShow = () => {
        this.props.detailShow();
    }

    bucketSelect = () => {
        this.props.bucketSelect(this.props.idx.num);
    }

    withcomplete = () => {
        var url = "http://localhost:9000/controller/waitcomplete?num=" + this.props.idx.num;
        Axios.get(url)
        .then( (resData) => {
            console.log(resData.data)
        })
        .catch( (error) => {
            console.log("update error" + error)
        })
    }
    
    withCountUp = () => {
        if(localStorage.state) {
            var url = "http://localhost:9000/controller/bucketwithup";
            Axios.post(url,
                {
                    user_name: localStorage.state, 
                    num: this.props.idx.num
                }
            )
            .then( (resData) => {
                alert("버킷리스트를 함께 합니다");
                console.log(resData.data)
            })
            .catch( (error) => {
                console.log("update error" + error)
            })
        }
        else{
            alert("로그인후 가능합니다");
        }
    }

    likeCountUp = () => {
        if(localStorage.state)
        {
            var url = "http://localhost:9000/controller/bucketlikeup";
            Axios.post(url, 
                {
                    user_name: localStorage.state, 
                    num: this.props.idx.num
                }
            )
            .then( (resData) => {
                alert("공감 능력 + 1")
            })
            .catch( (error) => {
                console.log("update error" + error)
            })
        }
        else{
            alert("로그인후 가능합니다");
        }
    }

    

    // shouldComponentUpdate(nextProps, nextState) {
    //     if(this.state.withUserArr !== nextProps.withUserArr.witharr)
    //     {
    //         this.setState({
    //             withUserArr: nextProps.withUserArr.witharr
    //         })
    //     }
    // }

    render() {

        const url = "http://localhost:9000/controller/save/";

        
    

        return (
                <div className="buket_form"  num={this.props.idx.num} >
                    {/* {
                        this.props.idx.imgarr.map((item,idx) => (<img src={url + item} alt="" /> ) )                
                    } */}
                    <img className="bgimg" src={boxbg} alt=""  />
                    <img className="mimg" src={url + this.props.idx.imgarr[0]} alt=""    />     
                    <div className="black_bg" onClick={this.onClick}></div>
                    <div className="buket_content">
                        <p>{this.props.idx.subject}
                        </p>
                        <div className="bottom_but">
                            <p onClick={this.onClick2.bind(this)}>
                                <FavoriteBorder/>
                                <span>함께 </span>
                            </p>
                            <p onClick={this.likeCountUp.bind(this)}>
                                <ThumbUp/>
                                <span>공감</span>
                            </p>
                        </div>                        
                    </div>           
                </div>
        );
    }
}

export default SoloItem;
