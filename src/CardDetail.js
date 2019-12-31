import React, { Component } from 'react';
import orora from './image/main/orora5.jpg';
import orora2 from './image/main/orora3.jpg';
import orora3 from './image/main/orora4.jpg';
import { FavoriteBorder, Archive, HighlightOff} from '@material-ui/icons';
import { Slide } from 'react-slideshow-image';

class CardDetail extends Component {

    constructor(props) {
        super(props);
        
        console.dir(props.bucketOneData.imgarr);
        this.state = {
            bucketArrImg: this.props.bucketOneData,
            imgarr: []
        }
        
    }

  
    detailHide = () => {
        this.props.detailHide();
    }

    bucketArrImg = () => {
        console.log(this.props.bucketOneData.imgarr);
    }

    render() {
        

        const slideImages = [
            orora,
            orora2,
            orora3,
        ];

        const properties = {
            duration: 5000,
            transitionDuration: 500,
            infinite: true,
            indicators: true,
            arrows: true,
        }

        const url = "http://localhost:9000/controller/save/";
        const bucketData = this.props.bucketOneData;

        return (
            <div className="card_popup_box">
                <div className="card_popup_bg"></div>
                <div className="card_popup" onClick={this.bucketArrImg}>
                    <div className="slide-container">
                        <Slide {...properties}>
                        {/* {
                            this.props.idx.imgarr.map((item,idx) => (<img src={url + item} alt="" /> ) )                
                        } */}
                        <div className="each-slide">
                            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
                            </div>
                        </div>
                        <div className="each-slide">
                            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
                            </div>
                        </div>
                        <div className="each-slide">
                            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
                            </div>
                        </div>
                        </Slide>
                    </div>
                    <div className="popup_content">
                        <div className="content_title">
                            <div className="title_left">
                                <p>{bucketData.subject}</p>
                            </div>
                            <div className="title_right">
                                <p>
                                    <FavoriteBorder/>
                                    <Archive/>  
                                </p>
                            </div>
                        </div>
                        <div className="content_info">
                            <div className="info_left">
                                <p>{bucketData.content}</p>
                            </div>
                            <div className="info_right">
                                <p>
                                    {
                                        this.state.bucketArrImg.imgarr == null ?'test':
                                        this.state.bucketArrImg.imgarr.map((item,idx) => (<img style={{width:'100px'}} src={url + item} alt="" /> ) ) }
                                    {/* {this.props.bucketOneData.imgarr[0]} */}
                                </p>
                            </div>
                        </div>
                    </div>
                    <p className="close_but" onClick={this.detailHide}>
                        <HighlightOff/>
                    </p>
                </div>
            </div>
        );
    }
}

export default CardDetail;