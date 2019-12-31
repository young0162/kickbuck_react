import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class Category extends Component {
    render() {
        return (
            <div className="category_bar">
                <ul>
                    <NavLink exact to='/all'>
                        <li className="active">
                                모두보기    
                        </li>
                    </NavLink>
                    <NavLink exact to='/solo' style={{borderLeft:'1px solid #ddd'}}>
                        <li>
                            개인  
                        </li>
                    </NavLink>
                    <NavLink exact to='/with' style={{borderLeft:'1px solid #ddd'}}>
                        <li>
                            함께하는
                        </li>
                    </NavLink>
                    <NavLink exact to='/off' style={{borderLeft:'1px solid #ddd'}}>
                        <li>
                            OFF
                        </li>
                    </NavLink>
                </ul>
            </div>
        );
    }
}

export default Category;