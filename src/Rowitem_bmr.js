import React,{Component} from 'react';
 
export default class Rowitem_bmr extends Component
{
    render(){
        const url="http://localhost:9002/controller/save/";
        return (
            <div>
            <tr>
                <td><b>{this.props.idx+1}</b></td>
                
                <td>
                    {this.props.row.nickname}
                </td>
                <td>
                    {this.props.row.contents}
                </td>
            </tr>
            </div>
        )
    }
}
