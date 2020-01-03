import React, { Component } from 'react';

class TogetherBoardItem extends Component {

    constructor(history){
        super();
  
        this.history=history;
  
        this.state={
            image_name: "",
            comment: "",
            display_none: "none",
            display: "table-row"
        }
  
        //this.onKeyChange =  this.onKeyChange.bind(this);
  
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
            display_none: 'none',
            comment: ''
        })
    }



    render() {

        let imgbtn = this.props.row.image_name;
        let step = this.props.row.step_num;

        return (
            <tbody>
            <tr height="60px;">
                <td align="center">
                    {
                        step === 1
                        ? this.props.row.with_num
                        : ""                   
                    }
                </td>
                <td align="center">
                    {this.props.row.user_name}
                </td>
                <td>
                    {
                        step === 1
                        ? this.props.row.comment
                        :"RE:  "+this.props.row.comment
                    
                    }
                </td>
                <td align="center">
                    {this.props.row.daytime}
                </td>
                <td align="center">
                    {
                        imgbtn != null
                        ? <button type="button" style={{width:'90px', height:'40px', margin: '5px'}}> 이미지보기</button>
                        : ''
                    }
                </td>
                <td style={{display:this.state.display}}>
                    <button style={{width:'55px', height:'40px', margin: '5px'}} onClick={this.visibleEvent.bind(this)}>
                        댓글
                    </button>  
                    <button style={{width:'30px', height:'40px', margin: '2px'}}>
                        X
                    </button>  
                </td>
            </tr>
        
            <tr style={{display:this.state.display_none}}>
                

                <td align="center">
                    RE:
                </td>
            
                <td style={{height: '50px', textAlign: 'center'}}>
                    {localStorage.state}
                </td>

                <td>
                    <textarea name="comment" style={{width:'600px', height:'50px', margin: '5px'}} 
                    placeholder="내용을 입력하세요." required="required" />
                </td>

                <td >
                    <input style={{width:'75px', margin:'5px'}} type="file" name="image_name" onChange={this.onImageUpload}/>                            
                </td>

                <td>   
                    <form onSubmit={this.onSubmit}>                             
                        <button type="submit" style={{width:'90px', height:'40px', margin: '5px'}}>
                            등록
                        </button>                            
                    </form>                                                                
                </td>
                <td>
                    <button  style={{width:'90px', height:'40px', margin: '5px'}} onClick={this.unvisibleEvent.bind(this)}>
                        취소
                    </button>
                </td>
            </tr> 
            </tbody>
        );
    }
}

export default TogetherBoardItem;