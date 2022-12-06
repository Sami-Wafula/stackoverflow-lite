import React from "react";
import './SignUp.css'
import { Link } from "react-router-dom";

const SignUp = ()=>{
    return(
        <>
        {/* <button>Sign up with Google</button>
        <button>Sign up with Github</button> */}
        <form className="signup-form">
            <label>Username<input></input></label>
            <label>Email<input></input></label>
            <label>password<input></input></label>
            <input type="submit"></input>
        </form>
        <h4>Already have an account? <Link to='/login'>Log In </Link></h4>
        </>
    )
}

export default SignUp;