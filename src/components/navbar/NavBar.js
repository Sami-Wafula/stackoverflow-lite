import React from "react";
import { useState } from "react";
import './NavBar.css'


const NavBar=()=> {

        return <>
        <div>
            <ul className="nav">
                <li href="#">ham</li>
                    <ul className="dropdown">
                        <li>Home</li>
                        <li>Questions</li>
                        <li>Tags</li>
                        <li>Users</li>
                    </ul>
                <li>Stack<b>Overflow-lite</b></li>
                <li>About</li>
                <li className="nav-search"><input className="nav-input" type="text" placeholder="Search"/></li>
                <li>Log in</li>
                <li>Sign up</li>
            </ul>
            </div>
        </>
    
}

export default NavBar;