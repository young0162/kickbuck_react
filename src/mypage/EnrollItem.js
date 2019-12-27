import React, { Component } from 'react';

export default class EnrollItem extends Component {
  render() {
  
    console.log(this.props.row)
    return (
      <div>
      
        {/* <tr>
          <td>{this.props.row.subject}</td>
          <td>{this.props.row.content}</td>
          <td>{this.props.row.image}</td>
          <td>{this.props.row.dday}</td>
          <td>{this.props.row.day}</td> 
        </tr> */}

      </div>
    );
  }
}