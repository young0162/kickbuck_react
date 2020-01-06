import React,{Component} from 'react';
import './style.css';
 
export default class RowItem extends Component
{
    render(){
        const url="http://localhost:9002/final/save/";
        return (
            <tr>
                <td><b>{this.props.idx+1}</b></td>
                <td>
                    <a href={"select/"+this.props.row.num}>

                    <img src={url+this.props.row.myphoto} alt="" className="myphoto"/>
                       
                    <img src={url+this.props.row.myphoto} alt="" className="myphoto"/>
                    </a>
                </td>
                <td>
                    {this.props.row.name}
                </td>
            </tr>
        )
    }
}

