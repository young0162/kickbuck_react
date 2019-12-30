import React, { Component } from 'react';

class QnaBoardItem extends Component {

   

    render() {
        return (
            
            <tr height="70px;">
                <td style={{textAlign: 'center', width: '100px'}}>
                    {this.props.row.num}
                </td>

                <td style={{width: '500px'}}>
                    <a href={"/community/qnaboarddetail/"+this.props.row.num}>
                        {this.props.row.title}
                    </a>
                </td>

                <td style={{textAlign: 'center', width: '180px'}}>
                    {this.props.row.nickname}
                </td>

                <td style={{textAlign: 'center', width: '100px'}}>
                    {this.props.row.readcnt}
                </td>

                <td style={{textAlign: 'center', width: '120px'}}>
                    {this.props.row.day}
                </td>

            </tr>
        );
    }
}

export default QnaBoardItem;