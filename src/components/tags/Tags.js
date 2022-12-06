import React from "react";
import './Tags.css'

const Tags = ()=>{
    return (
        <>
        <div className="tags-main">
            <div className="tags-header">
                <h4>Tags</h4>
                <h5>A tag is a keyword or label that groups  similar questions. Using
 the right tag can make it easier to get relevant answers</h5>
                <input placeholder="Search Tags"></input>
            </div>
            <div className="tags-content">
                <h5 className="tag-title">JavaScript</h5>
                <h5>JavaScript is a web scripting language. For questions related to JavaScript and it’s frameworks. Popular Frameworks include Angular, React Js and other front...</h5>
                <div className="tags-stats">
                    <div><h5>54k questions</h5></div>
                    <div className="tag-stat"><h5>20 asked today, 50 this week</h5></div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Tags;