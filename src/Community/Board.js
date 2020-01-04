import React, { Component } from 'react';
import './Board.css';
import QnaBoard from './QnaBoard/QnaBoard';
import FreeBoard from './FreeBoard/FreeBoardList';


class Board extends Component {

    constructor(){
        
        super();

        this.state={
            freedisplay_none: "none",
            freedisplay: "block",
            qnadisplay_none: "none",
            qnadisplay: "block",
            freeTab_on_className: "tab_on",
            qnaTab_on_className: "",
            guestTab_on_className: "tab_on",
            faqTab_on_className: ""
        }
    }
    
    freeVisibleEvent=()=>{   
        this.setState({      
            freedisplay: 'block',
            qnadisplay_none: 'none',  
            freeTab_on_className: 'tab_on',    
            qnaTab_on_className: '',
            guestTab_on_className: '',
            faqTab_on_className: ''
        })
    }
    
    qnaVisibleEvent=()=>{
        this.setState({
            freedisplay: 'none',
            qnadisplay_none: 'block',
            freeTab_on_className: '',    
            qnaTab_on_className: 'tab_on',
            guestTab_on_className: '',
            faqTab_on_className: ''
        })
      }



    render() {
        return (
            <div>
                <div className='section-top'>
                    <div className='title_community'>
                        <span>COMMUNITY</span>
                    </div>
                </div>
                
                <div className='board_container'>
                    <ul className='board_tab'>
                        <li className={this.state.freeTab_on_className} onClick={this.freeVisibleEvent.bind(this)}>Free Board</li>
                        <li className={this.state.qnaTab_on_className} onClick={this.qnaVisibleEvent.bind(this)}>Q & A Board</li>
                        <li>Guest Board</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                <div className='freeboard' style={{display: this.state.freedisplay}}>
                    <FreeBoard/>
                </div>
                <div className='qnaboard' style={{display: this.state.qnadisplay_none}}>
                    <QnaBoard/>
                </div>


            </div>
        );
    }
}

export default Board;