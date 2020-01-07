import React,{Component} from 'react';
import axios from 'axios';
import '../css/mypage.css';

export default class MyListDetail extends Component{
    constructor({match}){
        super();
        this.num=match.params.num
        this.state={
            selectData:''
        }      
        console.log("selectData:"+this.state.selectData); 
    }

    componentWillMount=()=>{
        this.onSelect();
    }
    
    onSelect=()=>{
       var url = "http://localhost:9000/controller/oneselect?num="+this.num;
       axios.get(url)
       .then((responseData)=>{
           console.log(responseData.data);
           this.setState({
            selectData:responseData.data
           });
       })
       .catch((error)=>{
           console.log("select  error:"+error.data);
       });
    }

    render(){
        return (
            <div className="hello">
                {this.num}
혀누
            <table>
                <tr>
                    <th></th>
                    <th>type</th>
                    <th>subject</th>
                    <th>content</th>
                    <th>imgarr</th>
                    <th>likecount</th>
                    <th>withcount</th>
                    <th>area</th>
                    <th>dday</th>
                    <th>day</th>
                    <th>with_user</th>
                </tr>
            </table>
            </div>
        )
    }
}

