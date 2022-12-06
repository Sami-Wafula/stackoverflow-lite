import React from "react";
import './Users.css'

const Users = ()=>{
    return (
        <>
        <div className="users-main">
            <div className="users-header">
                <h4>Users</h4>
                <input placeholder="Search users"></input>
            </div>
            <div className="users-view">
                <div className="users-avatar"></div>
                <div className="users-details">
                    <h5>Sami_w</h5>
                    <h5>Nyeri, Kenya</h5>
                    <h5>110</h5>
                    <h5>Python, C, JavaScript</h5>
                </div>
            </div>
        </div>
        </>
    )
}

export default Users;