import React,{Component} from 'react';
import axios from 'axios';
import './style.css';

export default class MyListDetail extends Component{
    constructor({match}){
        super();
        this.num=match.params.num
        this.state={
            selectData:''
        }        
    }

    componentWillMount=()=>{
        this.onSelect();
    }
    
    onSelect=()=>{
       var url = "http://localhost:9000/controller/mypage/select?num="+this.num;
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
            </div>
        )
    }
}

