import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import './NavBar.css'
const NavBar=()=> {

        return <>
        <div>
            <ul className="nav">
                <li><Link to='/sidenav'><div class="center">
  <div></div>
</div></Link></li>
                <li><Link to='/home'>Stack<b>Overflow-lite</b></Link></li>
                <li><Link to='/about'>About</Link></li>
                <li className="nav-search"><input className="nav-input" type="text" placeholder="Search"/></li>
                <li><Link to='/login'>Log in </Link></li>
                <li><Link to='/signup'>Sign up</Link></li>
            </ul>
            </div>
        </>
    
}

export default NavBar;