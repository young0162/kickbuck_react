import React,{Component} from 'react';
import axios from 'axios';
import Rowitem from './Rowitem_bmr';
 
export default class Bmr extends Component
{
    constructor(props){
        super(props);
 
        this.state={
            stuData:[]
        }
    }
 
    list=()=>{
        const url="http://localhost:9002/controller/bmr/list";
        axios.get(url)
        .then((res)=>{
            this.setState({
                stuData:res.data
            });
        })
        .catch((err)=>{
            console.log("list error:"+err.data);
        });
    }
 
    componentWillMount(){
        this.list();
    }
    render(){
        return (
            <div style={{textAlign:'center'}}>
               <table className="table table bordered">
                   <caption><b>방명록</b></caption>
                   <thead>
                       <tr style={{background:'orange'}}>
                           <th width="30">번호</th>
                           <th width="150">내용</th>
                           <th>닉네임</th>
                       </tr>
                   </thead>
                   <tbody>
                    {
                        this.state.stuData.map((row,idx)=>(
                          <Rowitem idx={idx} key={idx}
                           row={row}/>  
                        ))
                    }
                   </tbody>
               </table>
            </div>
        )
    }
}
