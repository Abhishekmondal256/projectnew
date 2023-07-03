import React from 'react';
import {NavLink} from 'react-router-dom';

function Menu(){
    return(
        <div className='navbar'>
           <span>:PPG</span>
            <ul className='left'>
                <li className='course'>All Courses <i class="fa fa-angle-double-down" style={{color:"white"}}></i></li>
                <li> <i class="fa fa-key icon">
              </i><input type="text" placeholder='       Crack Your Dream Company' /></li></ul>
                <ul className='right'>
                <li className='right-bar'><NavLink /><i class="fa fa-globe" ></i> Sign In</li>
                <li className='right-bar' style={{color:'yellow'}}><NavLink />Sign Up</li>
                </ul>   
        </div>
    );
}

export default Menu;