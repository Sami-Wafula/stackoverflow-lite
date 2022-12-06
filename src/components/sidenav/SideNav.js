import React from "react";
import {  Link, Outlet } from "react-router-dom";
import './SideNav.css'
import Questions from "../questions/Questions";
import Tags from "../tags/Tags";
import Users from "../users/Users";
import Question from "../question/Question";
// import { BrowserRouter } from "react-router-dom";

const SideNav = ()=>{
    return(
        <>
        <div className="main">
            <div className="one">
                <ul>
                    <h4  className="item"><Link to='/home'>Home</Link></h4>
                    <h4  className="item"><Link to='/sidenav/tags'>Tags</Link></h4>
                    <h4  className="item"><Link to='/sidenav/questions'>Questions</Link></h4>
                    <h4  className="item"><Link to='/sidenav/users'>Users</Link></h4>
                </ul>
            </div>
            <div className="two">
                <Outlet />
            </div>
        </div>
        </>
    )
}

export default SideNav;