import React from "react";
import './SignIn.css'
import { Link } from "react-router-dom";

const SignIn = ()=> {
    return(
        <>
        <div className="signin-form">
            {/* <button>Sign in with Google</button>
        <button>Sign in with Github</button> */}
        <form className="signin">
            <label>Username<input></input></label>
            <label>password<input></input></label>
            <input type="submit"></input>
        </form>
        <h4>Don't have an account? <Link to='/signup'>Sign up</Link></h4>
        </div>
        </>
    )
}

export default SignIn;