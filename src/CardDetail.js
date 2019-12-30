import React, { Component } from 'react';
import orora from './image/main/orora5.jpg';
import orora2 from './image/main/orora3.jpg';
import orora3 from './image/main/orora4.jpg';
import { FavoriteBorder, Archive, HighlightOff} from '@material-ui/icons';
import { Slide } from 'react-slideshow-image';

class CardDetail extends Component {

    detailHide = () => {
        this.props.detailHide();
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

        return (
            <div className="card_popup_box">
                <div className="card_popup_bg"></div>
                <div className="card_popup">
                    <div className="slide-container">
                        <Slide {...properties}>
                        {
                            this.props.idx.imgarr.map((item,idx) => (<img src={url + item} alt="" /> ) )                
                        }
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
                                <p>환상적인 오로라 보러가기</p>
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
                                <p>내용 나오는곳</p>
                            </div>
                            <div className="info_right">
                                <p>함께한 사람들</p>
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