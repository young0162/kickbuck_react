import React,{Component} from 'react';
import axios from 'axios';
import RowItem from './RowItem';
 
export default class StudentList extends Component
{
    constructor(props){
        super(props);
 
        this.state={
            stuData:[]
        }
    }
 
    list=()=>{
        const url="http://localhost:9002/final/student/list";
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
                   <caption><b>학생 정보 출력</b></caption>
                   <thead>
                       <tr style={{background:'orange'}}>
                           <th width="50">번호</th>
                           <th width="150">사진</th>
                           <th>학생명</th>
                       </tr>
                   </thead>
                   <tbody>
                    {
                        this.state.stuData.map((row,idx)=>(
                          <RowItem idx={idx} key={idx}
                           row={row}/>  
                        ))
                    }
                   </tbody>
               </table>
            </div>
        )
    }
}