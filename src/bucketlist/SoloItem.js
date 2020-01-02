import React, { Component } from 'react';
import orora from '../image/main/orora.png';
import boxbg from '../image/main/box_bg.png';
import { FavoriteBorder, ThumbUp} from '@material-ui/icons';
import Axios from 'axios';

class SoloItem extends Component {

    onClick = (event) => {
        this.detailShow();
        this.bucketSelect();
    }

    detailShow = () => {
        this.props.detailShow();
    }

    bucketSelect = () => {
        this.props.bucketSelect(this.props.idx.num);
    }

    
    withCountUp = () => {

        var url = "http://localhost:9000/controller/bucketwithup";
        Axios.post(url,
            {
                user_name: localStorage.state.toString(), 
                num: this.props.idx.num
            }
        )
        .then( (resData) => {
            
        })
        .catch( (error) => {
            console.log("update error" + error)
        })

    }

    likeCountUp = () => {
        var url = "http://localhost:9000/controller/bucketlikeup?num=" + this.props.idx.num;
        Axios.get(url)
        .then( (resData) => {

        })
        .catch( (error) => {
            console.log("update error" + error)
        })
    }

    render() {

        const url = "http://localhost:9000/controller/save/";

        
    

        return (
                <div className="buket_form"  num={this.props.idx.num} >
                    {/* {
                        this.props.idx.imgarr.map((item,idx) => (<img src={url + item} alt="" /> ) )                
                    } */}
                    <img className="bgimg" src={boxbg} alt=""  />
                    <img className="mimg" src={url + this.props.idx.imgarr[0]} alt=""  onClick={this.onClick}  />     
                    
                    <div className="buket_content">
                        <p>{this.props.idx.subject}
                        </p>
                        <div className="bottom_but">
                            <p onClick={this.withCountUp.bind(this)}>
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