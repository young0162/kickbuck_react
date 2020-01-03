import React,{Component} from 'react';
import './style.css';
 
export default class RowItem_bmr extends Component
{
    render(){
        const url="http://localhost:9002/controller/save/";
        return (
            <tr>
                <td><b>{this.props.idx+1}</b></td>
                <td>
                    {this.props.row.contents}
                </td>
                <td>
                    {this.props.row.nickname}
                </td>
            </tr>
        )
    }
}