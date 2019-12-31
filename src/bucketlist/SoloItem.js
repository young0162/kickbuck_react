import React, { Component } from 'react';
import orora from '../image/main/orora.png';
import { FavoriteBorder, ThumbUp} from '@material-ui/icons';
import Axios from 'axios';

class SoloItem extends Component {

    detailShow = () => {
        this.props.detailShow();
    }

    withCountUp = () => {

        var url = "http://localhost:9000/controller/bucketwithup?num=" + this.props.idx.num;
        Axios.get(url)
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
            <div className="buket_form_box">
                <div className="buket_form"  num={this.props.idx.num}>
                    <img src={url + this.props.idx.image} alt=""  onClick={this.detailShow} />     
                    <div className="buket_content">
                        <p>{this.props.idx.subject}</p>
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
            </div> 
        );
    }
}

export default SoloItem;