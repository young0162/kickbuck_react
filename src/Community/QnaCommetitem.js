import React, { Component } from 'react';

class QnaCommentItem extends Component {

   

    render() {
        return (
            
            <tr height="70px;">
                <td style={{textAlign: 'center', width: '60px'}}>
                    {this.props.row.comment_num}
                </td>

                <td style={{textAlign: 'center', width: '120px'}}>
                    {this.props.row.nickname}
                </td>

                <td style={{textAlign: 'left', width: '680px'}}>
                    {this.props.row.comment}
                </td>

                <td style={{textAlign: 'center', width: '140px'}}>
                    {this.props.row.daytime}
                </td>
            </tr>
            
        );
    }
}

export default QnaCommentItem;