import React from "react";
import './LandingPage.css'
import { Link } from "react-router-dom";

const LandingPage = ()=>{
    return(
        <>
        <div className="landing">
            <div className="section-a">
                <h4>Introducing Lite,<br/>
                optimized to finding answers fast<br/>
                and answering questions quick. </h4>
                <div className="section-a1">
                    <h5><Link to='/login'>Log In </Link>  |  <Link to='/signup'>Sign Up</Link></h5>
                </div>
            </div>
            <div className="section-b">
                <h3>Every
                developer
                    
                     has<br/>
                a tab open to Stack Overflow</h3>
            </div>
            <div className="landing-stats">
                <div className="landing-stat"><h5>40k+<br/>active members</h5></div>
                <div className="landing-stat"><h5>85k+<br/>questions</h5></div>
                <div className="landing-stat"><h5>54k+<br/>answers</h5></div>
            </div>
        </div>
        </>
    )
}

export default LandingPage;