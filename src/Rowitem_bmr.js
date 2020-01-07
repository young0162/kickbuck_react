import React, { Component } from 'react';

export default class Rowitem_bmr extends Component {
    date = new Date(this.props.row.timestamp);

    render(){
        return (
            <tr>
                <td>
                    {this.props.row.num}
                </td>
                <td>
                    {this.props.row.nickname}
                </td>
                <td>
                    {this.props.row.contents}
                </td>
                <td>
                    {this.date.toLocaleString()}
                </td>
            </tr>
        )
    }
}